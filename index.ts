//Note: Adapted from https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html
//Imports will give errors if not using parcel
// @ts-ignore
import fragmentSource from './shaders/fragment.glsl'
// @ts-ignore
import vertexSource from './shaders/vertex.glsl'

import { Model } from './Model';
import { load_OBJ } from './Loader';
import * as glmath from 'gl-matrix';

let gl: WebGLRenderingContext;
let canvas: HTMLCanvasElement;

let program: WebGLProgram;

let modelUniformID: WebGLUniformLocation;
let viewUniformID: WebGLUniformLocation;
let projectionUniformID: WebGLUniformLocation;
let lightToggleUniformID: WebGLUniformLocation;

let positionAttributeID: GLint;
let normalAttributeID: GLint;

let iter = 0; //For a simple movment demo

let Monkey;
let Cube;
let Axis;

async function main() {

    //gl has already been checked so cannot be undefined- safe to cast
    gl = <WebGLRenderingContext>init();

    modelUniformID = <WebGLUniformLocation>gl.getUniformLocation(program, "model");
    viewUniformID = <WebGLUniformLocation>gl.getUniformLocation(program, "view");
    projectionUniformID = <WebGLUniformLocation>gl.getUniformLocation(program, "projection");
    lightToggleUniformID = <WebGLUniformLocation>gl.getUniformLocation(program, "light_toggle");

    let axisData = await load_OBJ("Axis");
    Axis = new Model(positionAttributeID, normalAttributeID, gl.LINES);
    Axis.init(axisData[0], axisData[1], axisData[2], gl);

    let MonkeyData = await load_OBJ("Monkey");
    Monkey = new Model(positionAttributeID, normalAttributeID, gl.TRIANGLES);
    Monkey.init(MonkeyData[0], MonkeyData[1], MonkeyData[2], gl);

    let CubeData = await load_OBJ("Cube3");
    Cube = new Model(positionAttributeID, normalAttributeID, gl.TRIANGLES);
    Cube.init(CubeData[0], CubeData[1], CubeData[2], gl);

    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.FRONT);

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LESS);

    gl.frontFace(gl.CW);

    gl.enable(gl.STENCIL_TEST);


    //Start render loop 
    window.requestAnimationFrame(render);

}

/*
    Render Loop 
*/
function render(timestamp) {

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    iter = iter + 0.01;
    if (iter > 100) {
        iter = 0;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(program);
    gl.enableVertexAttribArray(positionAttributeID);
    gl.enableVertexAttribArray(normalAttributeID);

    gl.uniform1i(lightToggleUniformID, 1);

    let projection: glmath.mat4 = glmath.mat4.create();
    projection = glmath.mat4.perspective(projection, 0.5, gl.canvas.width / gl.canvas.height, 0.1, 700);
    gl.uniformMatrix4fv(projectionUniformID, false, projection);

    let view = glmath.mat4.create()
    let viewPos = glmath.vec3.create();
    let viewRotation = glmath.vec3.create();
    let viewUp = glmath.vec3.create();
    glmath.mat4.lookAt(view, glmath.vec3.set(viewPos, 1, 1, 3), glmath.vec3.set(viewRotation, 0, 0, 0), glmath.vec3.set(viewUp, 0, 1, 0));
    gl.uniformMatrix4fv(viewUniformID, false, view);

    // DRAWING POLYGONS START

    gl.stencilFunc(
        gl.ALWAYS,    // the test
        1,            // reference value
        0xFF,         // mask
    );

    gl.stencilOp(
        gl.KEEP,     // what to do if the stencil test fails
        gl.KEEP,     // what to do if the depth test fails
        gl.REPLACE,  // what to do if both tests pass
    );

    gl.uniform1i(lightToggleUniformID, 0);

    //Bounding Cube
    let cubeModel = glmath.mat4.create();
    glmath.mat4.scale(cubeModel, cubeModel, [0.5, 0.5, 0.5]);
    gl.uniformMatrix4fv(modelUniformID, false, cubeModel);
    gl.cullFace(gl.BACK);
    Cube.render();
    gl.cullFace(gl.FRONT);

    gl.stencilFunc(
        gl.EQUAL,     // the test
        1,            // reference value
        0xFF,         // mask
    );
    gl.stencilOp(
        gl.REPLACE,     // what to do if the stencil test fails
        gl.KEEP,     // what to do if the depth test fails
        gl.REPLACE,     // what to do if both tests pass
    );

    //ALL OTHER POLYGONS WITHIN BOUNDING CUBE START

    gl.uniform1i(lightToggleUniformID, 1);

    let Axismodel = glmath.mat4.create();
    glmath.mat4.scale(Axismodel, Axismodel, [1, 1, 1]);
    glmath.mat4.rotate(Axismodel, Axismodel, 0.2, [0.2, 0, 0]);
    gl.uniformMatrix4fv(modelUniformID, false, Axismodel);
    Axis.render();

    let Monkeymodel = glmath.mat4.create();
    glmath.mat4.scale(Monkeymodel, Monkeymodel, [0.2, 0.2, 0.2]);
    glmath.mat4.rotate(Monkeymodel, Monkeymodel, iter, [0.2, 1, 0]);
    gl.uniformMatrix4fv(modelUniformID, false, Monkeymodel);
    Monkey.render();

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
    program = createProgram(temp_gl, vertex, fragment);

    positionAttributeID = temp_gl.getAttribLocation(program, "a_position");
    normalAttributeID = temp_gl.getAttribLocation(program, "a_normal")

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