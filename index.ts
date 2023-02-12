// Note: Adapted from https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html
// Imports will give errors if not using parcel
// @ts-ignore
import fragmentSource_1 from './shaders/fragment_1.glsl'
// @ts-ignore
import vertexSource_1 from './shaders/vertex_1.glsl'
// @ts-ignore
import fragmentSource_2 from './shaders/fragment_2.glsl'
// @ts-ignore
import vertexSource_2 from './shaders/vertex_2.glsl'

import { Model } from './Model';
import { DATASET, load_OBJ, read_CSV } from './Loader';
import { Text } from './Text';
import { Font } from './Font';

import * as glmath from 'gl-matrix';

let glyph; // Loaded WebGL Label Skeleton
let short_glyph;

let gl: WebGLRenderingContext;
let canvas: HTMLCanvasElement;

let programs: WebGLProgram[];
const num_of_programs = 2;

let modelUniformID: WebGLUniformLocation;
let viewUniformID: WebGLUniformLocation;
let projectionUniformID: WebGLUniformLocation;
let lightToggleUniformID: WebGLUniformLocation;
let colourUniformID: WebGLUniformLocation;
let cameraRightWorldSpaceUniformID: WebGLUniformLocation;
let cameraUpWorldSpaceUniformID: WebGLUniformLocation;

let positionAttributeID: GLint[];
let normalAttributeID: GLint[];
let textureAttributeID: GLint[];

let iter = 0; // For a simple movement demo

//User controlled rotation
let x_rotation;
let y_rotation;
let x_move;
let y_move;
let z_move;

//Position modififed by mouse controls
let mouse_x;
let mouse_y;

let zoom; // At what zoom level is the view
let viewsize;

let Point;
let Cube;
let Axis;

let label; // For testing HTML based Text overlay
let Fonts; // Generator for Font Texture Data

let AxisLabels: Model[];
let AxisValues: Model[][];
let AxisMap: Number[]; //data describing the nature of the axis values, negative or positive 

//Axis Options
let xLength;
let yLength;
let zLength;

//Colours of Axis
let positiveColour = [1, 1, 1];
let negativeColour = [1, 0.4, 0.4];

// Event Listeners for user controls
(<HTMLElement>document.getElementById("zoom")).addEventListener("input", function () {
    // @ts-ignore 1
    let change = <Number>document.getElementById("zoom").value;
    // @ts-ignore 1
    zoom = change / 10;
    setAxisValues();
});

(<HTMLElement>document.getElementById("viewsize")).addEventListener("input", function () {
    // @ts-ignore 1 1
    viewsize = <Number>document.getElementById("viewsize").value / 10;
});

(<HTMLElement>document.getElementById("glCanvas")).addEventListener("mousemove", function (event) {

    if (event.buttons == 1) {
        mouse_x += event.movementX;
        mouse_y += event.movementY;
        //mouse_held = true;
    }

});

(<HTMLElement>document.getElementById("left")).addEventListener("click", function () {
    x_rotation -= 0.1;
});

(<HTMLElement>document.getElementById("right")).addEventListener("click", function () {
    x_rotation += 0.1;
});

(<HTMLElement>document.getElementById("up")).addEventListener("click", function () {
    y_rotation += 0.1;
});

(<HTMLElement>document.getElementById("down")).addEventListener("click", function () {
    y_rotation -= 0.1;
});


(<HTMLElement>document.getElementById("back-Move")).addEventListener("click", function () {
    x_move += 2;
    setAxisValues();
});

(<HTMLElement>document.getElementById("forward-Move")).addEventListener("click", function () {
    x_move -= 2;
    setAxisValues();
});

(<HTMLElement>document.getElementById("up-Move")).addEventListener("click", function () {
    y_move += 2;
    setAxisValues();
});

(<HTMLElement>document.getElementById("down-Move")).addEventListener("click", function () {
    y_move -= 2;
    setAxisValues();
});

(<HTMLElement>document.getElementById("right-Move")).addEventListener("click", function () {
    z_move += 2;
    setAxisValues();
});

(<HTMLElement>document.getElementById("left-Move")).addEventListener("click", function () {
    z_move -= 2;
    setAxisValues();
});

async function main() {

    // gl has already been checked so cannot be undefined- safe to cast
    gl = <WebGLRenderingContext>init();

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

    //Uniforms only in shader program 1
    cameraRightWorldSpaceUniformID = <WebGLUniformLocation>gl.getUniformLocation(programs[1], "camRight_WS");
    cameraUpWorldSpaceUniformID = <WebGLUniformLocation>gl.getUniformLocation(programs[1], "camUp_WS");

    // Define and Init all Models to render
    let axisData = await load_OBJ("Axis");
    Axis = new Model(positionAttributeID[0], normalAttributeID[0], textureAttributeID[0], gl.LINES);
    Axis.init(axisData[0], axisData[1], axisData[2], axisData[3], gl);

    let PointData = await load_OBJ("Cube3");
    Point = new Model(positionAttributeID[0], normalAttributeID[0], textureAttributeID[0], gl.TRIANGLES);
    Point.init(PointData[0], PointData[1], PointData[2], PointData[3], gl);

    let CubeData = await load_OBJ("Cube3");
    Cube = new Model(positionAttributeID[0], normalAttributeID[0], textureAttributeID[0], gl.TRIANGLES);
    Cube.init(CubeData[0], CubeData[1], CubeData[2], CubeData[3], gl);

    AxisLabels = [];
    AxisValues = [[]];
    AxisMap = [];
    Fonts = new Font(0, gl); // Create a Font Object

    xLength = 1;
    yLength = 1;
    zLength = 1;

    x_rotation = 0;
    y_rotation = 0;

    x_move = 0;
    y_move = 0;
    z_move = 0;

    zoom = 1;
    viewsize = 0.4;

    mouse_x = 1;
    mouse_y = 1;

    //Prepare Label 
    glyph = await load_OBJ("Glyph");
    short_glyph = await load_OBJ("ShortGlyph");

    // Define 3 glyph based letter labels for each axis 
    let LetterData = await load_OBJ("Glyph");

    Fonts.init('z');
    AxisLabels[0] = new Model(positionAttributeID[1], normalAttributeID[1], textureAttributeID[1], gl.TRIANGLES);
    AxisLabels[0].init(LetterData[0], LetterData[1], LetterData[2], Fonts.getTextureCords(), gl, Fonts.getImage());
    Fonts.init('y');
    AxisLabels[1] = new Model(positionAttributeID[1], normalAttributeID[1], textureAttributeID[1], gl.TRIANGLES);
    AxisLabels[1].init(LetterData[0], LetterData[1], LetterData[2], Fonts.getTextureCords(), gl, Fonts.getImage());
    Fonts.init('x');
    AxisLabels[2] = new Model(positionAttributeID[1], normalAttributeID[1], textureAttributeID[1], gl.TRIANGLES);
    AxisLabels[2].init(LetterData[0], LetterData[1], LetterData[2], Fonts.getTextureCords(), gl, Fonts.getImage());

    await setAxisValues(); //This is not great performance wise, but it's alright

    //Init HTML based label
    //label = new Text("div", gl.canvas.width, gl.canvas.height);

    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.FRONT);

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LESS);

    gl.frontFace(gl.CW);

    gl.enable(gl.STENCIL_TEST);

    // Listen for a file upload 
    await read_CSV();

    //Start render loop 
    window.requestAnimationFrame(Render);

}

/*
    Helper Function used by setAxisValues
*/
function generateAxisValuesAt(i, mod, controller) {
    AxisValues[i] = [];

    // Dual zoom level, this could be made better with more zoom levels
    let zoom_mod = 1;
    if (zoom <= 0.2) {
        zoom_mod = 25
    }

    let rawAxisValue = (i - mod) + controller;
    var digit = String(Math.abs(rawAxisValue) * zoom_mod).split('').map(Number); // Calculate the Axis value, then get array of digits

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

    if (rawAxisValue < 0) {

        Fonts.init('-');

        let temp_val = new Model(positionAttributeID[1], normalAttributeID[1], textureAttributeID[1], gl.TRIANGLES);
        temp_val.init(short_glyph[0], short_glyph[1], short_glyph[2], Fonts.getTextureCords(), gl, Fonts.getImage());

        AxisValues[i].unshift(temp_val);
    }

}

/*
    Set the values on the axis
    10 value labels on each axis
*/
async function setAxisValues() {

    for (let i = 0; i < 31; i++) {
        if (i <= 10) {
            generateAxisValuesAt(i, 0, z_move);
        } else if (i <= 20) {
            generateAxisValuesAt(i, 10, x_move);
        } else if (i <= 31) {
            generateAxisValuesAt(i, 20, y_move);
        }

    }

}

/*
    Top Level Render Function, setup reused components such as the global model and view then call 
    upon helper function to render some logical part of the scene using those values
*/
function Render(timestamp) {
    // | Setup |

    //Create a top level model
    let GLOBAL_MODEL = glmath.mat4.create();
    glmath.mat4.scale(GLOBAL_MODEL, GLOBAL_MODEL, [viewsize, viewsize, viewsize]);
    glmath.mat4.translate(GLOBAL_MODEL, GLOBAL_MODEL, [0.2, 0.2, 1]);
    glmath.mat4.rotate(GLOBAL_MODEL, GLOBAL_MODEL, 15 * (Math.PI / 180), [1, 0, 0]);
    glmath.mat4.rotate(GLOBAL_MODEL, GLOBAL_MODEL, 25 * (Math.PI / 180), [0, -1, 0]);

    //User controlled rotation applied
    glmath.mat4.rotate(GLOBAL_MODEL, GLOBAL_MODEL, x_rotation + mouse_x / 100, [0, 1, 0]);
    glmath.mat4.rotate(GLOBAL_MODEL, GLOBAL_MODEL, y_rotation + mouse_y / 100, [1, 0, 0]);

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

    RenderData(GLOBAL_MODEL);

    window.requestAnimationFrame(Render);
}

/*
    Renders Imported Data Points that need shader program 1
*/
function RenderData(global_model: glmath.mat4) {
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

    gl.uniform1i(lightToggleUniformID[0], 1); // Use Light

    gl.stencilFunc(gl.EQUAL, 1, 0xFF);
    gl.stencilOp(gl.REPLACE, gl.KEEP, gl.REPLACE);

    // _____________
    // +++ Render +++
    // _____________

    let global_point_model = glmath.mat4.create();
    glmath.mat4.copy(global_point_model, global_model);
    glmath.mat4.scale(global_point_model, global_point_model, [0.05, 0.05, 0.05]);
    glmath.mat4.translate(global_point_model, global_point_model, [0 - 2 * z_move * 1 / zoom, 0 - 2 * y_move * 1 / zoom, 0 - 2 * x_move * 1 / zoom]);

    for (let i = 0; i < DATASET.length; i++) {
        let x = Number(Object.values(DATASET[i])[0]) * 2;
        let y = Number(Object.values(DATASET[i])[1]) * 2;
        let z = (Number(Object.values(DATASET[i])[2]) * 2);

        let point_model = glmath.mat4.create();
        glmath.mat4.copy(point_model, global_point_model);
        glmath.mat4.translate(point_model, point_model, [x * zoom, y * zoom, z * zoom]);
        glmath.mat4.scale(point_model, point_model, [1 * zoom, 1 * zoom, 1 * zoom]);
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
    This will need to be revisted to implement correctly 
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
    gl.uniform3f(colourUniformID[1], positiveColour[0], positiveColour[1], positiveColour[2]);

    gl.stencilFunc(gl.ALWAYS, 1, 0xFF);

    // _____________
    // +++ Render +++
    // _____________

    //global_model = eraseRotation(global_model);
    glmath.mat4.scale(global_model, global_model, [1.8, 1.8, 1.8]);
    glmath.mat4.translate(global_model, global_model, [-0.55, -0.55, -0.55]);

    let LetterModel = glmath.mat4.create();
    glmath.mat4.copy(LetterModel, global_model);
    glmath.mat4.scale(LetterModel, LetterModel, [0.03, 0.03, 1]);
    glmath.mat4.translate(LetterModel, LetterModel, [40, 0, 0]);

    gl.uniformMatrix4fv(modelUniformID[1], false, LetterModel);
    AxisLabels[0].render();

    let singleAxisModel = glmath.mat4.copy((glmath.mat4.create()), global_model);
    glmath.mat4.scale(singleAxisModel, singleAxisModel, [0.02, 0.02, 1]);
    glmath.mat4.translate(singleAxisModel, singleAxisModel, [0, 0.6, 0]);

    /*
        This affects how many glyphs are rendered based on the zoom level
    */
    let zoom_factor = zoom * 10

    if (zoom <= 0.2 || zoom == 1) {
        for (let i = 1; i < zoom_factor; i++) {
            let loopModel = glmath.mat4.create();
            glmath.mat4.copy(loopModel, singleAxisModel);
            glmath.mat4.translate(loopModel, loopModel, [5 * i / zoom, 0, 0]);
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

    }

    glmath.mat4.translate(LetterModel, LetterModel, [-40, 40, 0]);
    gl.uniformMatrix4fv(modelUniformID[1], false, LetterModel);
    gl.uniform3f(colourUniformID[1], positiveColour[0], positiveColour[1], positiveColour[2]);
    AxisLabels[1].render();

    singleAxisModel = glmath.mat4.copy((glmath.mat4.create()), global_model);
    glmath.mat4.scale(singleAxisModel, singleAxisModel, [0.02, 0.02, 1]);
    glmath.mat4.translate(singleAxisModel, singleAxisModel, [1, 0.6, 1]);

    if (zoom <= 0.2 || zoom == 1) {
        for (let i = 11; i < zoom_factor + 10; i++) {
            let loopModel = glmath.mat4.create();
            glmath.mat4.copy(loopModel, singleAxisModel);
            glmath.mat4.translate(loopModel, loopModel, [0, 0, (0.1 * (i - 10)) / zoom - 1]);
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

    glmath.mat4.translate(LetterModel, LetterModel, [-5, -45, 1]);
    gl.uniformMatrix4fv(modelUniformID[1], false, LetterModel);
    gl.uniform3f(colourUniformID[1], positiveColour[0], positiveColour[1], positiveColour[2]);
    AxisLabels[2].render();

    singleAxisModel = glmath.mat4.copy((glmath.mat4.create()), global_model);
    glmath.mat4.scale(singleAxisModel, singleAxisModel, [0.02, 0.02, 1]);
    glmath.mat4.translate(singleAxisModel, singleAxisModel, [2, 0, 0]);
    //glmath.mat4.translate(singleAxisModel, singleAxisModel, [-3.0, -1.0, 0]);

    if (zoom <= 0.2 || zoom == 1) {
        for (let i = 21; i < zoom_factor + 20; i++) {
            let loopModel = glmath.mat4.create();
            glmath.mat4.copy(loopModel, singleAxisModel);
            glmath.mat4.translate(loopModel, loopModel, [-2 * xLength, (5.0 * (i - 20)) / zoom, 0]);
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
}

/*
    Render Loop 
    Renders everything that needs program 0
*/
function RenderStructure(global_model: glmath.mat4) {

    // _____________
    // +++ SETUP +++
    // _____________

    //Simple Iterator for animation
    iter = iter + 0.01;
    if (iter > 100) {
        iter = 0;
    }

    // Clear Canvas and Set Background Color 
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

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



    // ________________
    // +++ Render +++
    // ________________

    // | DRAW STENCIL CUBE |
    gl.stencilFunc(gl.ALWAYS, 1, 0xFF);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);

    gl.uniform1i(lightToggleUniformID[0], 0); // Don't Use Light

    // Bounding Cube
    let cubeModel = glmath.mat4.create();
    glmath.mat4.copy(cubeModel, global_model);
    //glmath.mat4.rotate(cubeModel, cubeModel, iter, [0, 1, 0]);
    gl.uniformMatrix4fv(modelUniformID[0], false, cubeModel);

    gl.cullFace(gl.BACK);
    Cube.render();
    gl.cullFace(gl.FRONT);

    gl.stencilFunc(gl.EQUAL, 1, 0xFF);
    gl.stencilOp(gl.REPLACE, gl.REPLACE, gl.REPLACE);

    // | ALL OTHER POLYGONS WITHIN BOUNDING CUBE START |

    gl.stencilFunc(gl.EQUAL, 1, 0xFF);
    gl.stencilOp(gl.REPLACE, gl.KEEP, gl.REPLACE);

    gl.uniform1i(lightToggleUniformID[0], 1); // Use Light

    let globalAxisModel = glmath.mat4.create();
    let glyphModel = glmath.mat4.create();

    //Apply global transformations
    glmath.mat4.copy(globalAxisModel, global_model);
    //glmath.mat4.rotate(globalAxisModel, globalAxisModel, iter, [0, 1, 0]);
    glmath.mat4.scale(globalAxisModel, globalAxisModel, [1.8, 1.8, 1.8]);
    glmath.mat4.translate(globalAxisModel, globalAxisModel, [-0.55, -0.55, -0.55]);

    glmath.mat4.copy(glyphModel, global_model);
    glmath.mat4.scale(glyphModel, glyphModel, [1.8, 1.8, 1.8]);
    glmath.mat4.translate(glyphModel, glyphModel, [-0.55, -0.55, -0.55]);


    // Create a local and global model to split transformations applied to Axis Lines
    let Axismodel = glmath.mat4.create();

    for (let i = 0; i < 11; i++) {
        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.translate(Axismodel, Axismodel, [0.5, 0, (i / (10 * zoom))]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 1]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);
        Axis.render();

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.rotate(Axismodel, Axismodel, 1.5708, [0, 1, 0]);
        glmath.mat4.translate(Axismodel, Axismodel, [-0.5, 0, (i / (10 * zoom))]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 0]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);
        Axis.render();
    }

    glmath.mat4.rotate(globalAxisModel, globalAxisModel, 90 * (Math.PI / 180), [1, 0, 0]);
    glmath.mat4.translate(globalAxisModel, globalAxisModel, [0, 0, -1]);

    for (let i = 0; i < 11; i++) {
        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.translate(Axismodel, Axismodel, [0.5, 0, (i / (10 * zoom))]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 1]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);

        Axis.render();

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.rotate(Axismodel, Axismodel, 90 * (Math.PI / 180), [0, 1, 0]);
        glmath.mat4.translate(Axismodel, Axismodel, [-0.5, 0, (i / (10 * zoom))]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 0]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);

        Axis.render();
    }

    glmath.mat4.rotate(globalAxisModel, globalAxisModel, 90 * (Math.PI / 180), [0, 0, 1]);
    glmath.mat4.translate(globalAxisModel, globalAxisModel, [0, 0, 0]);

    for (let i = 0; i < 11; i++) {
        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.translate(Axismodel, Axismodel, [0.5, 0, (i / (10 * zoom))]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 1]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);

        Axis.render();

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.rotate(Axismodel, Axismodel, 90 * (Math.PI / 180), [0, 1, 0]);
        glmath.mat4.translate(Axismodel, Axismodel, [-0.5, 0, (i / (10 * zoom))]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 0]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);

        Axis.render();
    }


}

/*
    Initialise WebGL Context and setup everything before render loop
*/
function init() {

    //Get canvas and initalise it 
    canvas = <HTMLCanvasElement>document.querySelector("#glCanvas");
    const temp_gl = canvas.getContext("webgl", { stencil: true });

    // Only continue if WebGL is available and working
    if (temp_gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

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
        1, 0, 0, matrix[0][3],
        0, 1, 0, matrix[1][3],
        0, 0, 1, matrix[2][3],
        matrix[3][0], matrix[3][1], matrix[3][2], matrix[3][3]
    );
}

window.onload = main;