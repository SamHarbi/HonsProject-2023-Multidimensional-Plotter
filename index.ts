// Note: Adapted from https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html
// Imports will give errors if not using parcel
// @ts-ignore
import fragmentSource from './shaders/fragment.glsl'
// @ts-ignore
import vertexSource from './shaders/vertex.glsl'

import { Model } from './Model';
import { load_OBJ } from './Loader';
import { Text } from './Text';
import { Font } from './Font';

import * as glmath from 'gl-matrix';

let gl: WebGLRenderingContext;
let canvas: HTMLCanvasElement;

let programs: WebGLProgram[];
const num_of_programs = 2;

let modelUniformID: WebGLUniformLocation;
let viewUniformID: WebGLUniformLocation;
let projectionUniformID: WebGLUniformLocation;
let lightToggleUniformID: WebGLUniformLocation;

let positionAttributeID: GLint[];
let normalAttributeID: GLint[];
let textureAttributeID: GLint[];

let iter = 0; // For a simple movement demo

let Monkey;
let Cube;
let Axis;

let label; // For testing HTML based Text overlay
let Fonts; // Generator for Font Texture Data

let AxisLabels: Model[];

async function main() {

    // gl has already been checked so cannot be undefined- safe to cast
    gl = <WebGLRenderingContext>init();

    modelUniformID = [];
    viewUniformID = [];
    projectionUniformID = [];
    lightToggleUniformID = [];

    for(let i=0; i<num_of_programs; i++)
    {
        // Get Uniform Locations 
        modelUniformID[i] = <WebGLUniformLocation>gl.getUniformLocation(programs[i], "model");
        viewUniformID[i] = <WebGLUniformLocation>gl.getUniformLocation(programs[i], "view");
        projectionUniformID[i] = <WebGLUniformLocation>gl.getUniformLocation(programs[i], "projection");
        lightToggleUniformID[i] = <WebGLUniformLocation>gl.getUniformLocation(programs[i], "light_toggle");
    }

    // Define and Init all Models to render
    let axisData = await load_OBJ("Axis");
    Axis = new Model(positionAttributeID[0], normalAttributeID[0], textureAttributeID[0], gl.LINES);
    Axis.init(axisData[0], axisData[1], axisData[2], axisData[3], gl);

    let MonkeyData = await load_OBJ("Monkey");
    Monkey = new Model(positionAttributeID[0], normalAttributeID[0], textureAttributeID[0], gl.TRIANGLES);
    Monkey.init(MonkeyData[0], MonkeyData[1], MonkeyData[2], MonkeyData[3], gl);

    let CubeData = await load_OBJ("Cube3");
    Cube = new Model(positionAttributeID[0], normalAttributeID[0], textureAttributeID[0], gl.TRIANGLES);
    Cube.init(CubeData[0], CubeData[1], CubeData[2], CubeData[3], gl);

    AxisLabels = [];
    Fonts = new Font(0, gl); // Create a Font Object

    // Define 3 glyph based letter labels for each axis 
    let LetterData = await load_OBJ("Glyph");
    Fonts.init('x');
    AxisLabels[0] = new Model(positionAttributeID[1], normalAttributeID[1], textureAttributeID[1], gl.TRIANGLES);
    AxisLabels[0].init(LetterData[0], LetterData[1], LetterData[2], Fonts.getTextureCords(), gl, Fonts.getImage());
    Fonts.init('y');
    AxisLabels[1] = new Model(positionAttributeID[1], normalAttributeID[1], textureAttributeID[1], gl.TRIANGLES);
    AxisLabels[1].init(LetterData[0], LetterData[1], LetterData[2], Fonts.getTextureCords(), gl, Fonts.getImage());
    Fonts.init('z');
    AxisLabels[2] = new Model(positionAttributeID[1], normalAttributeID[1], textureAttributeID[1], gl.TRIANGLES);
    AxisLabels[2].init(LetterData[0], LetterData[1], LetterData[2], Fonts.getTextureCords(), gl, Fonts.getImage());
    
    //Init HTML based label
    label = new Text("div", gl.canvas.width, gl.canvas.height);

    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.FRONT);

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LESS);

    gl.frontFace(gl.CW);

    //gl.enable(gl.STENCIL_TEST);
    
    //Start render loop 
    window.requestAnimationFrame(render);

}

/*
    Render Loop
    Renders everything (glyph text) that needs shader program 1
    Depends on positions of axis lines already placed to ensure relative placement of text
*/
function RenderAxisText(globalAxisModel: glmath.mat4) {
    
    // _____________
    // +++ SETUP +++
    // _____________

    //Set Shader to use 
    gl.useProgram(programs[1]);
    gl.enableVertexAttribArray(positionAttributeID[1]);
    gl.enableVertexAttribArray(normalAttributeID[1]);
    gl.enableVertexAttribArray(textureAttributeID[1]);

    // Setup View
    let view = glmath.mat4.create()
    let viewPos = glmath.vec3.create();
    let viewRotation = glmath.vec3.create();
    let viewUp = glmath.vec3.create();

    glmath.mat4.lookAt(view, 
        glmath.vec3.set(viewPos, 1, 1, 3), 
        glmath.vec3.set(viewRotation, 0, 0, 0), 
        glmath.vec3.set(viewUp, 0, 1, 0));
    gl.uniformMatrix4fv(viewUniformID[1], false, view);
    
    // Setup Projection 
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    let projection: glmath.mat4 = glmath.mat4.create();
    projection = glmath.mat4.perspective(projection, 0.5, gl.canvas.width / gl.canvas.height, 0.1, 700);
    gl.uniformMatrix4fv(projectionUniformID[1], false, projection);

    gl.uniform1i(lightToggleUniformID[1], 1); // Use Light

    //glmath.mat4.rotate(globalAxisModel, globalAxisModel, 1, [0, 0, 0.5]);

    gl.stencilFunc(gl.ALWAYS, 1, 0xFF);
    
    let LetterModel = glmath.mat4.create();
    glmath.mat4.copy(LetterModel, globalAxisModel);
    glmath.mat4.scale(LetterModel, LetterModel, [0.03, 0.03, 1]);
    
    glmath.mat4.translate(LetterModel, LetterModel, [36, 0, 0]);
    gl.uniformMatrix4fv(modelUniformID[1], false, LetterModel);
    AxisLabels[0].render();

    glmath.mat4.translate(LetterModel, LetterModel, [-36, 36, 0]);
    gl.uniformMatrix4fv(modelUniformID[1], false, LetterModel);
    AxisLabels[1].render();

    glmath.mat4.translate(LetterModel, LetterModel, [-2, -39, 1]);
    gl.uniformMatrix4fv(modelUniformID[1], false, LetterModel);
    AxisLabels[2].render();

}

/*
    Render Loop 
    Renders everything that needs program 0
*/
function render(timestamp) {

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

    // Setup View
    let view = glmath.mat4.create()
    let viewPos = glmath.vec3.create();
    let viewRotation = glmath.vec3.create();
    let viewUp = glmath.vec3.create();

    glmath.mat4.lookAt(view, 
        glmath.vec3.set(viewPos, 1, 1, 3), 
        glmath.vec3.set(viewRotation, 0, 0, 0), 
        glmath.vec3.set(viewUp, 0, 1, 0));
    gl.uniformMatrix4fv(viewUniformID[0], false, view);
    
    // Setup Projection 
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    let projection: glmath.mat4 = glmath.mat4.create();
    projection = glmath.mat4.perspective(projection, 0.5, gl.canvas.width / gl.canvas.height, 0.1, 700);
    gl.uniformMatrix4fv(projectionUniformID[0], false, projection);

    // ______________________________
    // +++ DRAWING POLYGONS START +++
    // ______________________________

    // | DRAW STENCIL CUBE |
    gl.stencilFunc(gl.ALWAYS, 1, 0xFF);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);

    gl.uniform1i(lightToggleUniformID[0], 0); // Don't Use Light

    // Bounding Cube
    let cubeModel = glmath.mat4.create();

    glmath.mat4.scale(cubeModel, cubeModel, [0.5, 0.5, 0.5]);
    glmath.mat4.translate(cubeModel, cubeModel, [0, 0, 0]);
    gl.uniformMatrix4fv(modelUniformID[0], false, cubeModel);

    gl.cullFace(gl.BACK);
    Cube.render();
    gl.cullFace(gl.FRONT);

    gl.stencilFunc(gl.EQUAL, 1, 0xFF);
    gl.stencilOp(gl.REPLACE, gl.KEEP, gl.REPLACE);

    // | ALL OTHER POLYGONS WITHIN BOUNDING CUBE START |

    gl.stencilFunc(gl.EQUAL, 1, 0xFF);
    gl.stencilOp(gl.REPLACE, gl.KEEP, gl.REPLACE);

    gl.uniform1i(lightToggleUniformID[0], 1); // Use Light

    let globalAxisModel = glmath.mat4.create();

    //Apply global transformations
    glmath.mat4.scale(globalAxisModel, globalAxisModel, [0.9, 0.9, 0.9]);
    glmath.mat4.translate(globalAxisModel, globalAxisModel, [-0.42, -0.42, -0.25]);

    //For Axis Glyphs 
    const initGlobalAxisModel = glmath.mat4.copy((glmath.mat4.create()), globalAxisModel);

    // Create a local and global model to split transformations applied to Axis Lines
    let Axismodel = glmath.mat4.create();

    for(let i=0; i<11; i++)
    {
        Axismodel = glmath.mat4.create();
        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.translate(Axismodel, Axismodel, [0.5, 0, (i/10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 1]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);
        Axis.render(undefined, undefined);
        
        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.rotate(Axismodel, Axismodel, 1.5708, [0, 1, 0]);
        glmath.mat4.translate(Axismodel, Axismodel, [-0.5, 0, (i/10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 0]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);
        Axis.render(undefined, undefined);
    }
    
    glmath.mat4.rotate(globalAxisModel, globalAxisModel, 1.5708, [1, 0, 0]);
    glmath.mat4.translate(globalAxisModel, globalAxisModel, [0, 0, -1]);

    for(let i=0; i<11; i++)
    {
        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.translate(Axismodel, Axismodel, [0.5, 0, (i/10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 1]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);

        Axis.render(undefined, undefined);

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.rotate(Axismodel, Axismodel, 1.5708, [0, 1, 0]);
        glmath.mat4.translate(Axismodel, Axismodel, [-0.5, 0, (i/10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 0]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);
        
        Axis.render(undefined, undefined);
    }

    glmath.mat4.rotate(globalAxisModel, globalAxisModel, 1.5708, [0, 0, 1]);
    glmath.mat4.translate(globalAxisModel, globalAxisModel, [0, 0, 0]);

    for(let i=0; i<11; i++)
    {
        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.translate(Axismodel, Axismodel, [0.5, 0, (i/10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 1]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);

        Axis.render(undefined, undefined);

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.rotate(Axismodel, Axismodel, 1.5708, [0, 1, 0]);
        glmath.mat4.translate(Axismodel, Axismodel, [-0.5, 0, (i/10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 0]);
        gl.uniformMatrix4fv(modelUniformID[0], false, Axismodel);
        
        Axis.render(undefined, undefined);
    }

    
    let Monkeymodel = glmath.mat4.create();
    glmath.mat4.scale(Monkeymodel, Monkeymodel, [0.2, 0.2, 0.2]);
    glmath.mat4.rotate(Monkeymodel, Monkeymodel, iter, [0.2, 1, 0]);
    gl.uniformMatrix4fv(modelUniformID[0], false, Monkeymodel);
    Monkey.render();

    let point = glmath.vec4.create();
    point = glmath.vec4.clone([-0.5, -0.500000, -0.390625, 1]);
    label.render(point, Monkeymodel, projection, view, "label");
    
    RenderAxisText(initGlobalAxisModel);

    //Repeat
    window.requestAnimationFrame(render);
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
    let vertex = createShader(temp_gl, temp_gl.VERTEX_SHADER, vertexSource);
    let fragment = createShader(temp_gl, temp_gl.FRAGMENT_SHADER, fragmentSource);

    programs = [];
    positionAttributeID = [];
    normalAttributeID = [];
    textureAttributeID = [];

    for(let i=0; i<num_of_programs; i++)
    {
        programs[i] = createProgram(temp_gl, vertex, fragment);

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

window.onload = main;