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

let positionBuffer: WebGLBuffer;

let positionAttributeID: GLint;

let modelLocation: WebGLUniformLocation;
let viewAttributeID: GLint;

let colourUniformID: WebGLUniformLocation;

let iter = 0

let Cube;

async function main() {

    //gl has already been checked so cannot be undefined 
    gl = <WebGLRenderingContext>init();

    // Create a buffer and ensure it is valid
    var temp_positionBuffer = gl.createBuffer();
    if (temp_positionBuffer === null) {
        alert("An Error Occured while rendering, Please try reloading the page");
        return;
    }
    else {
        positionBuffer = <WebGLBuffer>temp_positionBuffer;
    }

    modelLocation = <WebGLUniformLocation>gl.getUniformLocation(program, "model");
    colourUniformID = <WebGLUniformLocation>gl.getUniformLocation(program, "colour");
    gl.uniform4fv(colourUniformID, [1, 1, 0, 0]);

    let cubeData = await load_OBJ("./models/Cube2.obj");
    Cube = new Model(positionAttributeID);
    Cube.init(cubeData[0], cubeData[1], gl);

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

    let model = glmath.mat4.create();
    glmath.mat4.rotate(model, model, iter, [0, 1, 0]);
    glmath.mat4.scale(model, model, [0.3, 0.5, 0.3]);
    gl.uniformMatrix4fv(modelLocation, false, model);

    Cube.render();

    //Repeat
    window.requestAnimationFrame(render);
}

/*
    Initialise WebGL Context and setup everything before render loop
*/
function init() {

    //Get canvas and initalise it 
    canvas = <HTMLCanvasElement>document.querySelector("#glCanvas");
    const temp_gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (temp_gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    //Create, compile and link shaders
    let vertex = createShader(temp_gl, temp_gl.VERTEX_SHADER, vertexSource);
    let fragment = createShader(temp_gl, temp_gl.FRAGMENT_SHADER, fragmentSource);
    program = createProgram(temp_gl, vertex, fragment);

    var positionAttributeID = temp_gl.getAttribLocation(program, "a_position");

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