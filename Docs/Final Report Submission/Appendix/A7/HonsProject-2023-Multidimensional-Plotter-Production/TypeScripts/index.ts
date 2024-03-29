// Note: Adapted from https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html
// Imports will give errors if not using parcel
// Shader File Imports - These were adapted from the basic shaders seen here: https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html
// @ts-ignore
import fragmentSource_1 from '../shaders/fragment_1.glsl'
// @ts-ignore
import vertexSource_1 from '../shaders/vertex_1.glsl'
// @ts-ignore
import fragmentSource_2 from '../shaders/fragment_2.glsl'
// @ts-ignore
import vertexSource_2 from '../shaders/vertex_2.glsl'

import { Model } from './Model';
import { DATASET, load_OBJ, read_CSV } from './Loader';
import { Font } from './Font';
import { Text } from './Text';
import { Controls } from './Controls';

// Math Library for Graphics 
import * as glmath from 'gl-matrix';

let glyph; // Loaded WebGL Label Skeleton
let Fonts; // Generator for Font Texture Data

// WebGL required refs
let gl: WebGLRenderingContext;
let canvas: HTMLCanvasElement;

// ref to article with canvas
let screen: HTMLElement;

let programs: WebGLProgram[];
const num_of_programs = 2;

// Picking Required Variables
let pickingBuffer; // Off screen buffer to render picking view
let pickingTexture; // Texture being rendered to for picking 
let rect; // used to calculate canvas relative position, inspired by https://webglfundamentals.org/webgl/lessons/webgl-picking.html
let prevselectedPointID; // Previously Selected Point, quick fix to ignore picking when mouse has not hovered over anything 
let selectedPointID; // Currently Selected Point
let selectedPos; // Position of Selected Point 

// Uniform Adressess 
let modelUniformID: WebGLUniformLocation;
let viewUniformID: WebGLUniformLocation;
let projectionUniformID: WebGLUniformLocation;
let lightToggleUniformID: WebGLUniformLocation;
let colourUniformID: WebGLUniformLocation;
let cameraRightWorldSpaceUniformID: WebGLUniformLocation;
let cameraUpWorldSpaceUniformID: WebGLUniformLocation;
let viewmodUniformID: WebGLUniformLocation;
let idUniformID: WebGLUniformLocation;

let positionAttributeID: GLint[];
let normalAttributeID: GLint[];
let textureAttributeID: GLint[];

// Controller Class of MVC structure
let C: Controls;

// Ref to 3D models
let Point;
let Cube;
let Dice;
let Cone;
let Axis;

let AxisLabels: Model[];
let AxisValues: Model[][];
let AxisMap: Number[]; // data describing the nature of the axis values, negative or positive 

let AxisNames: Model[][]; // Names of data columns, i.e keys from DATASET var

//Colours of Axis
let positiveColour = [0.1, 0.1, 0.1];
let negativeColour = [1, 0.4, 0.4];
let altColour = [0.9, 0.9, 0.9];

/*
    Set up the entire application and start rendering
    Also Entry point to application
*/
async function main() {

    // gl has already been checked so cannot be undefined- safe to cast
    gl = <WebGLRenderingContext>init();

    // Create Controller class and pass control functions (these will be called by control on user input)
    C = new Controls();
    C.Controls(setAxisValues, setAxisNames, getPixelsAtClick);

    // See Comment above where rect is defined 
    rect = canvas.getBoundingClientRect();

    // HTML Element containing canvas, for direct HTML modification 
    screen = <HTMLElement>document.getElementById("PlotScreen");

    /*
        Link Attributes and Locations
    */
    modelUniformID = [];
    viewUniformID = [];
    projectionUniformID = [];
    lightToggleUniformID = [];
    colourUniformID = [];

    for (let i = 0; i < num_of_programs; i++) {
        // Get Uniform Locations 
        modelUniformID[i] = <WebGLUniformLocation>gl.getUniformLocation(programs[i], "model");
        viewUniformID[i] = <WebGLUniformLocation>gl.getUniformLocation(programs[i], "view");
        projectionUniformID[i] = <WebGLUniformLocation>gl.getUniformLocation(programs[i], "projection");
        lightToggleUniformID[i] = <WebGLUniformLocation>gl.getUniformLocation(programs[i], "light_toggle");
        colourUniformID[i] = <WebGLUniformLocation>gl.getUniformLocation(programs[i], "in_colour");
    }

    // Uniforms only in shader program 0
    idUniformID = <WebGLUniformLocation>gl.getUniformLocation(programs[0], "id");

    // Uniforms only in shader program 1
    cameraRightWorldSpaceUniformID = <WebGLUniformLocation>gl.getUniformLocation(programs[1], "camRight_WS");
    cameraUpWorldSpaceUniformID = <WebGLUniformLocation>gl.getUniformLocation(programs[1], "camUp_WS");
    viewmodUniformID = <WebGLUniformLocation>gl.getUniformLocation(programs[1], "viewmod");

    /*
        Define and Init all Models to render
    */
    let axisData = await load_OBJ("Axis");
    Axis = new Model(positionAttributeID[0], normalAttributeID[0], textureAttributeID[0], gl.LINES);
    Axis.init(axisData[0], axisData[1], axisData[2], axisData[3], gl);

    let PointData = await load_OBJ("Cube3");
    Point = new Model(positionAttributeID[0], normalAttributeID[0], textureAttributeID[0], gl.TRIANGLES);
    Point.init(PointData[0], PointData[1], PointData[2], PointData[3], gl);

    let CubeData = await load_OBJ("Cube3");
    Cube = new Model(positionAttributeID[0], normalAttributeID[0], textureAttributeID[0], gl.TRIANGLES);
    Cube.init(CubeData[0], CubeData[1], CubeData[2], CubeData[3], gl);

    let ConeData = await load_OBJ("Cone");
    Cone = new Model(positionAttributeID[0], normalAttributeID[0], textureAttributeID[0], gl.TRIANGLES);
    Cone.init(ConeData[0], ConeData[1], ConeData[2], ConeData[3], gl);

    let DiceData = await load_OBJ("Dice");
    Dice = new Model(positionAttributeID[0], normalAttributeID[0], textureAttributeID[0], gl.TRIANGLES);
    Dice.init(DiceData[0], DiceData[1], DiceData[2], DiceData[3], gl);

    /* 
        Init general variables 
    */
    AxisLabels = [];
    AxisValues = [[]];
    AxisNames = [[], [], []];
    AxisMap = [];

    selectedPointID = 0;
    prevselectedPointID = -1;

    /*
        Prepare all Label types
    */
    glyph = await load_OBJ("Glyph");

    Fonts = new Font(0, gl, glyph); // Create a Font Object

    /*
        Define 3 glyph based letter labels for each axis 
    */
    Fonts.init('z');
    AxisLabels[0] = new Model(positionAttributeID[1], normalAttributeID[1], textureAttributeID[1], gl.TRIANGLES);
    AxisLabels[0].init(glyph[0], glyph[1], glyph[2], Fonts.getTextureCords(), gl, Fonts.getImage());
    Fonts.init('y');
    AxisLabels[1] = new Model(positionAttributeID[1], normalAttributeID[1], textureAttributeID[1], gl.TRIANGLES);
    AxisLabels[1].init(glyph[0], glyph[1], glyph[2], Fonts.getTextureCords(), gl, Fonts.getImage());
    Fonts.init('x');
    AxisLabels[2] = new Model(positionAttributeID[1], normalAttributeID[1], textureAttributeID[1], gl.TRIANGLES);
    AxisLabels[2].init(glyph[0], glyph[1], glyph[2], Fonts.getTextureCords(), gl, Fonts.getImage());

    setAxisValues(); // Init Axis Labels

    /*
        WebGL settings set
    */
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.FRONT);

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LESS);

    gl.frontFace(gl.CW);

    //gl.enable(gl.STENCIL_TEST); Stencil usage was removed 

    /*
        Setup FrameBuffer for picking
    */

    // Create picking Texture
    pickingTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, pickingTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.canvas.width, gl.canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    // Set important parameters for accuracy inspired by this: https://webglfundamentals.org/webgl/lessons/webgl-picking.html
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    // Create Picking Buffer
    pickingBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, pickingBuffer);

    // Bind texture to picking buffer
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pickingTexture, 0);

    // Unbind picking buffer, use default screen as the render destination 
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    /*
        Setup Finished, Now do things
    */

    // Listen for a file upload, This is no longer done here but managed by Controller 
    // await read_CSV();

    //Start render loop 
    window.requestAnimationFrame(Render);

}

/*
    Function for preparing models and textures for the names of each axis
*/
function setAxisNames() {
    // !! NOTE !! This limits to three columns names only 
    let names = Object.keys(DATASET[0]); //Array of names 
    let namLen = names.length;
    if (namLen > 3) {
        namLen = 3;
    }

    let indexVals = C.getIndexValues(); // 0:x 1:y 2:z 3:c 4:a
    let axisIndex = [indexVals[2], indexVals[1], indexVals[0], indexVals[3], indexVals[4]];

    for (let i = 0; i < namLen; i++) {
        AxisNames[i] = [];
        let charArray = names[axisIndex[i]].split('');

        for (let j = 0; j < charArray.length; j++) {
            Fonts.init(charArray[j]);
            AxisNames[i][j] = new Model(positionAttributeID[1], normalAttributeID[1], textureAttributeID[1], gl.TRIANGLES);
            AxisNames[i][j].init(glyph[0], glyph[1], glyph[2], Fonts.getTextureCords(), gl, Fonts.getImage());
        }
    }
}

/*
    Helper Function used by setAxisValues
    Method: 
        1- Calculate the Axis Value, example 245
        2- Split this into an array, example [2, 4, 5]
        3- Save and init glyph render data for each digit 

*/
function generateAxisValuesAt(i, mod, controller) {
    AxisValues[i] = [];

    let rawAxisValue = (i - mod) + controller; // Axis Value that can be +ve or -ve 
    rawAxisValue = rawAxisValue * (C.getCombinedZoom()); // Apply difference between each value
    var digit = String((Math.abs(rawAxisValue))).split('').map(Number); // Get Array of +ve digits that represent the value 

    // No way to know if a label is negative or positive from within the code, store it in an array for each axis glyph
    if (rawAxisValue > 0) // Positive Number 
    {
        AxisMap[i] = 1;
    } else { // Negative Number
        AxisMap[i] = 0;
    }

    // For every digit that makes the axis label 
    for (let j = 0; j < digit.length; j++) {

        // Init digit
        if (digit[j] === undefined) {
            Fonts.init(0);
        } else {
            Fonts.init(digit[j]);
        }

        // Save digit
        AxisValues[i][j] = new Model(positionAttributeID[1], normalAttributeID[1], textureAttributeID[1], gl.TRIANGLES);
        AxisValues[i][j].init(glyph[0], glyph[1], glyph[2], Fonts.getTextureCords(), gl, Fonts.getImage());
    }

    // If the glyph is negative, push a negative sign glyph at the start 
    if (rawAxisValue < 0) {

        Fonts.init('-');
        let temp_val = new Model(positionAttributeID[1], normalAttributeID[1], textureAttributeID[1], gl.TRIANGLES);
        temp_val.init(glyph[0], glyph[1], glyph[2], Fonts.getTextureCords(), gl, Fonts.getImage());
        AxisValues[i].unshift(temp_val);
    }

}

/*
    Set the values on the axis
    10 value labels on each axis
*/
function setAxisValues() {

    let moveAxis = C.getMoveAxis(); // 0:x 1:y 2:z

    for (let i = 0; i < 31; i++) {
        if (i <= 10) {
            generateAxisValuesAt(i, 0, moveAxis[2]);
        } else if (i <= 20) {
            generateAxisValuesAt(i, 10, moveAxis[0]);
        } else if (i <= 31) {
            generateAxisValuesAt(i, 20, moveAxis[1]);
        }
    }
}

/*
    Top Level Render Function, setup reused components such as the global model and view then call 
    upon helper function to render some logical part of the scene using those values
*/
function Render(timestamp) {
    // | Setup |

    resizeCanvasToDisplaySize(gl.canvas);

    // Clear Canvas and Set Background Color 
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

    C.RenderUpdateControls();

    //Create a top level model
    let GLOBAL_MODEL = glmath.mat4.create();
    glmath.mat4.scale(GLOBAL_MODEL, GLOBAL_MODEL, [C.getViewSize(), C.getViewSize(), C.getViewSize()]);
    glmath.mat4.translate(GLOBAL_MODEL, GLOBAL_MODEL, [0.2, 0.2, 1]);
    let rotation = C.getCurrentRotation(); // x:0 y:1
    glmath.mat4.rotate(GLOBAL_MODEL, GLOBAL_MODEL, 15 * (Math.PI / 180), [1, 0, 0]);
    glmath.mat4.rotate(GLOBAL_MODEL, GLOBAL_MODEL, 25 * (Math.PI / 180), [0, -1, 0]);

    let currRotation = C.getCurrentRotation(); // x = index 0, y = 1
    glmath.mat4.rotate(GLOBAL_MODEL, GLOBAL_MODEL, currRotation[0], [0, 1, 0]);
    glmath.mat4.rotate(GLOBAL_MODEL, GLOBAL_MODEL, currRotation[1], [1, 0, 0]);

    // Setup View
    let view = glmath.mat4.create()
    let viewPos = glmath.vec3.create();
    let viewRotation = glmath.vec3.create();
    let viewUp = glmath.vec3.create();

    glmath.mat4.lookAt(view,
        glmath.vec3.set(viewPos, 0, 0, 3),
        glmath.vec3.set(viewRotation, 0, 0, 0),
        glmath.vec3.set(viewUp, 0, 1, 0));

    gl.useProgram(programs[0]);
    gl.uniformMatrix4fv(viewUniformID[0], false, view);

    gl.useProgram(programs[1]);
    gl.uniformMatrix4fv(viewUniformID[1], false, view);

    // | Helper Functions Start |

    RenderStructure(GLOBAL_MODEL);

    RenderAxisText(GLOBAL_MODEL, view);

    // Render to Texture and get mouse hover position from it 
    gl.bindFramebuffer(gl.FRAMEBUFFER, pickingBuffer);
    RenderData(GLOBAL_MODEL, true);

    let mouseClicks = C.getMouseClicks(); // x = index 0, y = 1
    getPixelsAtClick(mouseClicks[0], mouseClicks[1]);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // Render to Screen
    RenderData(GLOBAL_MODEL, false);

    window.requestAnimationFrame(Render);

}

/*
    Renders Imported Data Points that need shader program 1
*/
function RenderData(global_model: glmath.mat4, pickingPass: boolean) {

    // | Data Tasks |

    //Check if a valid point was selected, and get it's position 
    if (selectedPointID != prevselectedPointID && DATASET[0] != undefined) {

        if (selectedPointID <= DATASET.length) {
            prevselectedPointID = selectedPointID;
            let indexVals = C.getIndexValues(); // 0:x 1:y 2:z 3:c 4:a
            let x = (Number(Object.values(DATASET[selectedPointID])[indexVals[0]]));
            let y = (Number(Object.values(DATASET[selectedPointID])[indexVals[1]]));
            let z = (Number(Object.values(DATASET[selectedPointID])[indexVals[2]]));
            let c = (Number(Object.values(DATASET[selectedPointID])[indexVals[3]]));
            let a = (Number(Object.values(DATASET[selectedPointID])[indexVals[4]]));

            selectedPos = [x, y, z, c, a];
        }

    }

    // _____________
    // +++ SETUP +++
    // _____________

    gl.useProgram(programs[0]);
    gl.enableVertexAttribArray(positionAttributeID[0]);
    gl.enableVertexAttribArray(normalAttributeID[0]);
    gl.enableVertexAttribArray(textureAttributeID[0]);

    // Setup Projection 
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    let projection: glmath.mat4 = glmath.mat4.create();
    projection = glmath.mat4.perspective(projection, 0.5, gl.canvas.width / gl.canvas.height, 0.1, 700);
    gl.uniformMatrix4fv(projectionUniformID[0], false, projection);

    if (pickingPass == true) {
        gl.uniform1i(lightToggleUniformID[0], 0); // Don't Use Light
    }
    else {
        gl.uniform1i(lightToggleUniformID[0], 1);
    }

    // _____________
    // +++ Render +++
    // _____________

    let global_point_model = glmath.mat4.create();
    glmath.mat4.copy(global_point_model, global_model);
    glmath.mat4.scale(global_point_model, global_point_model, [0.05, 0.05, 0.05]);

    let moveAxis = C.getMoveAxis(); // 0:x y:1 z:2
    glmath.mat4.translate(global_point_model, global_point_model, [0 - 2 * moveAxis[2], 0 - 2 * moveAxis[1], 0 - 2 * moveAxis[0]]);

    // For every point to render in dataset 
    for (let i = 0; i < DATASET.length; i++) {

        let indexVals = C.getIndexValues(); // 0:x 1:y 2:z 3:c 4:a
        let z = Number(Object.values(DATASET[i])[indexVals[2]]) * 2 / C.getCombinedZoom();
        let y = Number(Object.values(DATASET[i])[indexVals[1]]) * 2 / C.getCombinedZoom();
        let x = (Number(Object.values(DATASET[i])[indexVals[0]]) * 2) / C.getCombinedZoom();

        let a = Number(Object.values(DATASET[i])[indexVals[3]]);
        let t = (Number(Object.values(DATASET[i])[indexVals[4]]) * 2) / C.getCombinedZoom();

        //Check that points are not beyond the view cube on +ve side
        if ((x - 2 * moveAxis[0] > 20) || y - 2 * moveAxis[1] > 20 || z - 2 * moveAxis[2] > 20) {
            continue;
        }

        //Check that points are not beyond the view cube on -ve side
        if (x - 2 * moveAxis[0] < 0 || y - 2 * moveAxis[1] < 0 || z - 2 * moveAxis[2] < 0) {
            continue;
        }

        // Set sizing and position
        let point_model = glmath.mat4.create();
        glmath.mat4.copy(point_model, global_point_model);
        glmath.mat4.translate(point_model, point_model, [z, y, x]);
        glmath.mat4.scale(point_model, point_model, [1, 1, 1]);
        let scaledSize = C.getPointSize() / C.getCombinedZoom();
        glmath.mat4.scale(point_model, point_model, [scaledSize, scaledSize, scaledSize]);

        // Encode colour as id / i if picking pass
        if (pickingPass == true) {
            gl.uniform3fv(idUniformID, [(i & 0x000000FF) >> 0, (i & 0x0000FF00) >> 8, (i & 0x00FF0000) >> 16]);
        } else {
            gl.uniform3fv(idUniformID, [-1, -1, -1]);
        }

        // If selected change how point looks
        if (selectedPointID == i && pickingPass == false) {
            gl.uniform1i(lightToggleUniformID[0], 1);
            gl.uniform3f(colourUniformID[0], 0, 0, 0);
            glmath.mat4.scale(point_model, point_model, [1.2, 1.2, 1.2]);
        }
        else if (!Number.isNaN(a) && pickingPass == false) { // Apply 4th dimension if available into colour uniform 
            gl.uniform1i(lightToggleUniformID[0], 0); // Don't Use Light
            gl.uniform3f(colourUniformID[0], Math.abs(SquashNumber(a)), Math.abs(SquashNumber(a)), Math.abs(SquashNumber(a)));
        } else if (pickingPass == false) {
            gl.uniform1i(lightToggleUniformID[0], 1);
            gl.uniform3f(colourUniformID[0], 1.0, 1.0, 1.0);
        }

        gl.uniformMatrix4fv(modelUniformID[0], false, point_model);
        Point.render();

    }
}

/*
    Renders glyph text that needs shader program 1
    Depends on positions of axis lines already placed to ensure relative placement of text
*/
function RenderAxisText(global_model: glmath.mat4, view: glmath.mat4) {

    // _____________
    // +++ SETUP +++
    // _____________

    /* Really simple way to scale the axis values automatically, needs to re-init axis values though
    This will need to be revisted to implement in a better way
    if(DATASET[0] != undefined)
    {
        let max_x = String(Object.values(DATASET[0])[0]);
        xLength = max_x.length;

        let max_y = String(Object.values(DATASET[0])[1]);
        yLength = max_y.length;
    
        let max_z = String(Object.values(DATASET[0])[2]);
        zLength = max_z.length;
    }
    */

    //Set Shader to use 
    gl.useProgram(programs[1]);
    gl.enableVertexAttribArray(positionAttributeID[1]);
    gl.enableVertexAttribArray(normalAttributeID[1]);
    gl.enableVertexAttribArray(textureAttributeID[1]);

    // Setup Projection 
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    let projection: glmath.mat4 = glmath.mat4.create();
    projection = glmath.mat4.perspective(projection, 0.5, gl.canvas.width / gl.canvas.height, 0.1, 700);
    gl.uniformMatrix4fv(projectionUniformID[1], false, projection);

    gl.uniform1i(lightToggleUniformID[1], 1); // Use Light
    gl.uniform3f(cameraRightWorldSpaceUniformID, view[0][0], view[1][0], view[2][0]);
    gl.uniform3f(cameraUpWorldSpaceUniformID, view[0][1], view[1][1], view[2][1]);
    gl.uniform3f(colourUniformID[1], altColour[0], altColour[1], altColour[2]);
    gl.uniform1i(viewmodUniformID, 1 / C.getViewSize());

    // _____________
    // +++ Render +++
    // _____________

    glmath.mat4.scale(global_model, global_model, [1.8, 1.8, 1.8]);
    glmath.mat4.translate(global_model, global_model, [-0.55, -0.55, -0.55]);

    // First axis label
    let LetterModel = glmath.mat4.create();
    glmath.mat4.copy(LetterModel, global_model);
    glmath.mat4.scale(LetterModel, LetterModel, [0.03, 0.03, 1]);
    glmath.mat4.translate(LetterModel, LetterModel, [40, 0, 0]);

    gl.uniformMatrix4fv(modelUniformID[1], false, LetterModel);
    AxisLabels[0].render();

    // Setup and Render axis names 
    if (AxisNames[0][0] != undefined) {

        let AxisNameModel = glmath.mat4.create();
        glmath.mat4.copy(AxisNameModel, LetterModel);

        let currRotation = C.getCurrentRotation() // x:0 y:1
        if ((currRotation[0] < -1.34 && currRotation[0] > -4.20) || (currRotation[0] > 2 && currRotation[0] < 5)) {
            glmath.mat4.rotateY(AxisNameModel, AxisNameModel, 180 * (Math.PI / 180));
            glmath.mat4.translate(AxisNameModel, AxisNameModel, [0, -10, 0]);
        }
        glmath.mat4.translate(AxisNameModel, AxisNameModel, [0, 5, 0]);

        for (let j = 0; j < AxisNames[0].length; j++) {
            glmath.mat4.translate(AxisNameModel, AxisNameModel, [2.5, 0, 0]);
            gl.uniform1i(viewmodUniformID, -1);
            gl.uniformMatrix4fv(modelUniformID[1], false, AxisNameModel);
            AxisNames[0][j].render();
        }
    }

    gl.uniform1i(viewmodUniformID, 1 / C.getViewSize());
    let singleAxisModel = glmath.mat4.copy((glmath.mat4.create()), global_model);
    glmath.mat4.scale(singleAxisModel, singleAxisModel, [0.02, 0.02, 1]);
    glmath.mat4.translate(singleAxisModel, singleAxisModel, [0, 0.6, 0]);

    /*
        There is a little bit of code repetition here which is not ideal. But what the following does is as follows

        1 - render axis label (X, Y or Z)
        2 - render 10 line values and apply any modification
        repeat for 2 axes
    */

    for (let i = 1; i < 10; i++) {
        let loopModel = glmath.mat4.create();
        glmath.mat4.copy(loopModel, singleAxisModel);
        glmath.mat4.translate(loopModel, loopModel, [5 * i, 0, 0]);
        for (let j = 0; j <= AxisValues[i].length; j++) {
            if (j > 0) {
                glmath.mat4.translate(loopModel, loopModel, [2, -2, 0]);
            }
            gl.uniformMatrix4fv(modelUniformID[1], false, loopModel);
            if (AxisValues[i][j] != undefined) {
                if (AxisMap[i] == 0) {
                    gl.uniform3f(colourUniformID[1], negativeColour[0], negativeColour[1], negativeColour[2]);
                } else {
                    gl.uniform3f(colourUniformID[1], positiveColour[0], positiveColour[1], positiveColour[2]);
                }
                AxisValues[i][j].render();
            }
        }
    }

    // Second axis label
    glmath.mat4.translate(LetterModel, LetterModel, [-40, 40, 0]);
    gl.uniformMatrix4fv(modelUniformID[1], false, LetterModel);
    gl.uniform3f(colourUniformID[1], altColour[0], altColour[1], altColour[2]);
    AxisLabels[1].render();

    if (AxisNames[1][0] != undefined) {

        let AxisNameModel = glmath.mat4.create();
        glmath.mat4.copy(AxisNameModel, LetterModel);

        let currRotation = C.getCurrentRotation() // x:0 y:1
        if ((currRotation[0] < -1.34 && currRotation[0] > -4.20) || (currRotation[0] > 2 && currRotation[0] < 5)) {
            glmath.mat4.rotateY(AxisNameModel, AxisNameModel, 180 * (Math.PI / 180));
            glmath.mat4.translate(AxisNameModel, AxisNameModel, [0, -10, 0]);
        }
        glmath.mat4.translate(AxisNameModel, AxisNameModel, [0, 5, 0]);

        for (let j = 0; j < AxisNames[1].length; j++) {
            glmath.mat4.translate(AxisNameModel, AxisNameModel, [2.5, 0, 0]);
            gl.uniform1i(viewmodUniformID, -1);
            gl.uniformMatrix4fv(modelUniformID[1], false, AxisNameModel);
            AxisNames[1][j].render();
        }
    }

    gl.uniform1i(viewmodUniformID, 1 / C.getViewSize());
    singleAxisModel = glmath.mat4.copy((glmath.mat4.create()), global_model);
    glmath.mat4.scale(singleAxisModel, singleAxisModel, [0.02, 0.02, 1]);
    glmath.mat4.translate(singleAxisModel, singleAxisModel, [1, 0.6, 1]);

    for (let i = 11; i < 10 + 10; i++) {
        let loopModel = glmath.mat4.create();
        glmath.mat4.copy(loopModel, singleAxisModel);
        glmath.mat4.translate(loopModel, loopModel, [0, 0, (0.1 * (i - 10)) - 1]);
        for (let j = 0; j <= AxisValues[i].length; j++) {
            if (j > 0) {
                glmath.mat4.translate(loopModel, loopModel, [2, 0, 0]);
            }
            gl.uniformMatrix4fv(modelUniformID[1], false, loopModel);
            if (AxisValues[i][j] != undefined) {
                if (AxisMap[i] == 0) {
                    gl.uniform3f(colourUniformID[1], negativeColour[0], negativeColour[1], negativeColour[2]);
                } else {
                    gl.uniform3f(colourUniformID[1], positiveColour[0], positiveColour[1], positiveColour[2]);
                }
                AxisValues[i][j].render();
            }
        }
    }

    //third axis label
    glmath.mat4.translate(LetterModel, LetterModel, [-5, -45, 1]);
    gl.uniformMatrix4fv(modelUniformID[1], false, LetterModel);
    gl.uniform3f(colourUniformID[1], altColour[0], altColour[1], altColour[2]);
    AxisLabels[2].render();

    if (AxisNames[2][0] != undefined) {

        let AxisNameModel = glmath.mat4.create();
        glmath.mat4.copy(AxisNameModel, LetterModel);

        let currRotation = C.getCurrentRotation(); // x:0 y:1
        if ((currRotation[0] < -1 && currRotation[0] > -4.20) || (currRotation[0] > 2 && currRotation[0] < 5)) {
            glmath.mat4.rotateY(AxisNameModel, AxisNameModel, 180 * (Math.PI / 180));
            glmath.mat4.translate(AxisNameModel, AxisNameModel, [0, -2, 0]);
        }
        //glmath.mat4.translate(AxisNameModel, AxisNameModel, [0, -5, 0]);

        for (let j = 0; j < AxisNames[2].length; j++) {
            glmath.mat4.translate(AxisNameModel, AxisNameModel, [2.5, 0, 0]);
            gl.uniform1i(viewmodUniformID, -1);
            gl.uniformMatrix4fv(modelUniformID[1], false, AxisNameModel);
            AxisNames[2][j].render();
        }
    }

    gl.uniform1i(viewmodUniformID, 1 / C.getViewSize());
    singleAxisModel = glmath.mat4.copy((glmath.mat4.create()), global_model);
    glmath.mat4.scale(singleAxisModel, singleAxisModel, [0.02, 0.02, 1]);
    glmath.mat4.translate(singleAxisModel, singleAxisModel, [2, 0, 0]);
    //glmath.mat4.translate(singleAxisModel, singleAxisModel, [-3.0, -1.0, 0]);

    for (let i = 21; i < 10 + 20; i++) {
        let loopModel = glmath.mat4.create();
        glmath.mat4.copy(loopModel, singleAxisModel);
        glmath.mat4.translate(loopModel, loopModel, [-2, (5.0 * (i - 20)), 0]);
        for (let j = 0; j <= AxisValues[i].length; j++) {
            if (j > 0) {
                glmath.mat4.translate(loopModel, loopModel, [2, 0, 0]);
            }
            gl.uniformMatrix4fv(modelUniformID[1], false, loopModel);
            if (AxisValues[i][j] != undefined) {
                if (AxisMap[i] == 0) {
                    gl.uniform3f(colourUniformID[1], negativeColour[0], negativeColour[1], negativeColour[2]);
                } else {
                    gl.uniform3f(colourUniformID[1], positiveColour[0], positiveColour[1], positiveColour[2]);
                }
                AxisValues[i][j].render();
            }
        }
    }
}

/*
    Render Loop 
    Renders everything that needs program 0
*/
function RenderStructure(global_model: glmath.mat4) {

    // _____________
    // +++ SETUP +++
    // _____________

    //Set Shader to use 
    gl.useProgram(programs[0]);
    gl.enableVertexAttribArray(positionAttributeID[0]);
    gl.enableVertexAttribArray(normalAttributeID[0]);
    gl.enableVertexAttribArray(textureAttributeID[0]);

    // Setup Projection 
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    let projection: glmath.mat4 = glmath.mat4.create();
    projection = glmath.mat4.perspective(projection, 0.5, gl.canvas.width / gl.canvas.height, 0.1, 700);
    gl.uniformMatrix4fv(projectionUniformID[0], false, projection);
    gl.uniform3f(colourUniformID[0], 1, 1, 1);
    gl.uniform3fv(idUniformID, [-1, -1, -1]);

    // ________________
    // +++ Render +++
    // ________________

    gl.uniform1i(lightToggleUniformID[0], 0); // Don't Use Light

    // Bounding Cube
    let cubeModel = glmath.mat4.create();
    glmath.mat4.copy(cubeModel, global_model);
    gl.uniformMatrix4fv(modelUniformID[0], false, cubeModel);

    gl.cullFace(gl.BACK);
    Cube.render();
    gl.cullFace(gl.FRONT);

    // | ALL OTHER POLYGONS WITHIN BOUNDING CUBE START |

    gl.uniform1i(lightToggleUniformID[0], 1); // Use Light

    let globalAxisModel = glmath.mat4.create();
    let glyphModel = glmath.mat4.create();

    //Apply global transformations
    glmath.mat4.copy(globalAxisModel, global_model);
    glmath.mat4.scale(globalAxisModel, globalAxisModel, [1.8, 1.8, 1.8]);
    glmath.mat4.translate(globalAxisModel, globalAxisModel, [-0.55, -0.55, -0.55]);

    glmath.mat4.copy(glyphModel, global_model);
    glmath.mat4.scale(glyphModel, glyphModel, [1.8, 1.8, 1.8]);
    glmath.mat4.translate(glyphModel, glyphModel, [-0.55, -0.55, -0.55]);


    // Create a local model to split transformations applied to Axis Lines
    let Axismodel = glmath.mat4.create();

    for (let i = 0; i < 11; i++) {

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.translate(Axismodel, Axismodel, [0.5, 0, (i / 10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 1]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);
        Axis.render();

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.rotate(Axismodel, Axismodel, 1.5708, [0, 1, 0]);
        glmath.mat4.translate(Axismodel, Axismodel, [-0.5, 0, (i / 10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 0]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);
        Axis.render();
    }

    glmath.mat4.rotate(globalAxisModel, globalAxisModel, 90 * (Math.PI / 180), [1, 0, 0]);
    glmath.mat4.translate(globalAxisModel, globalAxisModel, [0, 0, -1]);

    for (let i = 0; i < 11; i++) {

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.translate(Axismodel, Axismodel, [0.5, 0, (i / 10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 1]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);

        Axis.render();

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.rotate(Axismodel, Axismodel, 90 * (Math.PI / 180), [0, 1, 0]);
        glmath.mat4.translate(Axismodel, Axismodel, [-0.5, 0, (i / 10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 0]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);

        Axis.render();
    }

    glmath.mat4.rotate(globalAxisModel, globalAxisModel, 90 * (Math.PI / 180), [0, 0, 1]);
    glmath.mat4.translate(globalAxisModel, globalAxisModel, [0, 0, 0]);

    for (let i = 0; i < 11; i++) {

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.translate(Axismodel, Axismodel, [0.5, 0, (i / 10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 1]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);

        Axis.render();

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.rotate(Axismodel, Axismodel, 90 * (Math.PI / 180), [0, 1, 0]);
        glmath.mat4.translate(Axismodel, Axismodel, [-0.5, 0, (i / 10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 0]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);

        Axis.render();
    }

}

/*
    Initialise WebGL Context and setups WebGL before render loop
*/
function init() {

    //Get canvas and initalise it 
    canvas = <HTMLCanvasElement>document.querySelector("#glCanvas");
    const temp_gl = canvas.getContext("webgl", { stencil: false, preserveDrawingBuffer: true });

    // Only continue if WebGL is available and working
    if (temp_gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    //@ts-ignore 
    /*if (temp_gl.getContextAttributes().stencil == false) {
        alert("Your Browser does not fully support this application (Stencil Attribute Missing) Please try another browser");
    }*/

    //Create, compile and link shaders
    let vertex = [createShader(temp_gl, temp_gl.VERTEX_SHADER, vertexSource_1),
    createShader(temp_gl, temp_gl.VERTEX_SHADER, vertexSource_2)];
    let fragment = [createShader(temp_gl, temp_gl.FRAGMENT_SHADER, fragmentSource_1),
    createShader(temp_gl, temp_gl.FRAGMENT_SHADER, fragmentSource_2)];

    programs = [];
    positionAttributeID = [];
    normalAttributeID = [];
    textureAttributeID = [];

    for (let i = 0; i < num_of_programs; i++) {
        programs[i] = createProgram(temp_gl, vertex[i], fragment[i]);

        positionAttributeID[i] = temp_gl.getAttribLocation(programs[i], "a_position");
        normalAttributeID[i] = temp_gl.getAttribLocation(programs[i], "a_normal");
        textureAttributeID[i] = temp_gl.getAttribLocation(programs[i], "a_texture");
    }

    return temp_gl;

}

/*
    Function copied from https://webglfundamentals.org/webgl/
    Creates a Shader
*/
function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
        return shader;
    }

    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

/*
    Function copied from https://webglfundamentals.org/webgl/
    Creates a Program from shaders
*/
function createProgram(gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
        return program;
    }

    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

/*
    Set rotation part to the indentity matrix
*/
function eraseRotation(matrix: glmath.mat4) {
    return glmath.mat4.fromValues(
        1, 0, matrix[2], matrix[3],
        0, 1, 0, matrix[7],
        0, 0, 1, matrix[11],
        matrix[12], matrix[13], matrix[14], matrix[15]
    );
}

/*
    Takes an unbounded number and distributes it to be between 0 and 1
    Based on https://stats.stackexchange.com/questions/1112/how-to-represent-an-unbounded-variable-as-number-between-0-and-1
*/
function SquashNumber(value) {
    let mod = C.getColourMod();
    return (1 / (1 + Math.pow(Math.E, -(mod * value)))) * 1;
}

/*
    Function copied from https://webglfundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
    Ensures drawingbuffer is the same size as the canvas 
*/
function resizeCanvasToDisplaySize(canvas) {
    // Lookup the size the browser is displaying the canvas in CSS pixels.
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    // Check if the canvas is not the same size.
    const needResize = canvas.width !== displayWidth ||
        canvas.height !== displayHeight;

    if (needResize) {
        // Make the canvas the same size
        canvas.width = displayWidth;
        canvas.height = displayHeight;
    }

    return needResize;
}

/*
    Get what pixel on the screen is the mouse hovering over 

    Inspired by solutions shown here: 
    https://stackoverflow.com/questions/16905302/webgl-and-glsl-picking
    http://www.opengl-tutorial.org/miscellaneous/clicking-on-objects/picking-with-an-opengl-hack/
*/
function getPixelsAtClick(x, y) {

    // Calculate x and y on canvas 
    let finX = (x - rect.left);
    let finY = gl.canvas.height - (y - rect.top) - 1;

    // Get 4 component colour of pixel
    let colour = new Uint8Array(4);
    gl.readPixels(finX, finY, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, colour);

    // Encode what point (if any) has been selected 
    selectedPointID = colour[0] + (colour[1] * 256) + (colour[2] * 256 * 256);

    // Record the data in HTML view
    if (DATASET[0] != undefined) {
        screen.innerHTML = "ID of Point Selected: " + selectedPointID + " | Position: "
            + "X: " + selectedPos[0] + " Y: " + selectedPos[1] + " Z: " + selectedPos[2] + " C: " + selectedPos[3];
    }

}


window.onload = main;