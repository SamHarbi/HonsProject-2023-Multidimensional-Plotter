//Note: Adapted from https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html
//Imports will give errors if not using parcel
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

let program: WebGLProgram;

let modelUniformID: WebGLUniformLocation;
let viewUniformID: WebGLUniformLocation;
let projectionUniformID: WebGLUniformLocation;
let lightToggleUniformID: WebGLUniformLocation;

let positionAttributeID: GLint;
let normalAttributeID: GLint;
let textureAttributeID: GLint;

let iter = 0; //For a simple movment demo

let Monkey;
let Cube;
let Axis;

let label;
let label2;

let f: Font[];

async function main() {

    //gl has already been checked so cannot be undefined- safe to cast
    gl = <WebGLRenderingContext>init();

    modelUniformID = <WebGLUniformLocation>gl.getUniformLocation(program, "model");
    viewUniformID = <WebGLUniformLocation>gl.getUniformLocation(program, "view");
    projectionUniformID = <WebGLUniformLocation>gl.getUniformLocation(program, "projection");
    lightToggleUniformID = <WebGLUniformLocation>gl.getUniformLocation(program, "light_toggle");

    let axisData = await load_OBJ("Axis");
    Axis = new Model(positionAttributeID, normalAttributeID, textureAttributeID, gl.LINES);
    Axis.init(axisData[0], axisData[1], axisData[2], axisData[3], gl);

    let MonkeyData = await load_OBJ("Monkey");
    Monkey = new Model(positionAttributeID, normalAttributeID, textureAttributeID, gl.TRIANGLES);
    Monkey.init(MonkeyData[0], MonkeyData[1], MonkeyData[2], MonkeyData[3], gl);

    let CubeData = await load_OBJ("Cube3");
    Cube = new Model(positionAttributeID, normalAttributeID, textureAttributeID, gl.TRIANGLES);
    Cube.init(CubeData[0], CubeData[1], CubeData[2], MonkeyData[3], gl);

    label = new Text("aa", gl.canvas.width, gl.canvas.height);
    label2 = new Text("bb", gl.canvas.width, gl.canvas.height);

    //f = [];
    //for(let i=0; i<33; i++)
   // {
        //f.push(new Font("Arial", positionAttributeID, normalAttributeID, gl.TRIANGLES));
    //}

    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.FRONT);

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LESS);

    gl.frontFace(gl.CW);

    gl.enable(gl.STENCIL_TEST);

    //f = new Font();
    //f.make("IBMPlexSans-Regular");


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
    gl.enableVertexAttribArray(textureAttributeID);

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

    // +++ DRAWING POLYGONS START +++

    // DRAW STENCIL CUBE
    gl.stencilFunc(gl.ALWAYS, 1, 0xFF);
    gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);

    gl.uniform1i(lightToggleUniformID, 0); // Don't Use Light

    // Bounding Cube
    let cubeModel = glmath.mat4.create();
    glmath.mat4.scale(cubeModel, cubeModel, [0.5, 0.5, 0.5]);
    glmath.mat4.translate(cubeModel, cubeModel, [0, 0, 0]);
    gl.uniformMatrix4fv(modelUniformID, false, cubeModel);
    gl.cullFace(gl.BACK);
    Cube.render();
    gl.cullFace(gl.FRONT);

    gl.stencilFunc(gl.EQUAL, 1, 0xFF);
    gl.stencilOp(gl.REPLACE, gl.KEEP, gl.REPLACE);

    // ALL OTHER POLYGONS WITHIN BOUNDING CUBE START

    gl.uniform1i(lightToggleUniformID, 1); // Use Light

    let Axismodel = glmath.mat4.create();
    let globalAxisModel = glmath.mat4.create();
    glmath.mat4.scale(globalAxisModel, globalAxisModel, [0.9, 0.9, 0.9]);
    glmath.mat4.translate(globalAxisModel, globalAxisModel, [-0.42, -0.42, -0.25]);
    
    for(let i=0; i<11; i++)
    {
        Axismodel = glmath.mat4.create();
        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.translate(Axismodel, Axismodel, [0.5, 0, (i/10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 1]);
        gl.uniformMatrix4fv(modelUniformID, false, Axismodel);
        Axis.render();
        

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.rotate(Axismodel, Axismodel, 1.5708, [0, 1, 0]);
        glmath.mat4.translate(Axismodel, Axismodel, [-0.5, 0, (i/10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 0]);
        gl.uniformMatrix4fv(modelUniformID, false, Axismodel);
        Axis.render();
    }
    
    glmath.mat4.rotate(globalAxisModel, globalAxisModel, 1.5708, [1, 0, 0]);
    glmath.mat4.translate(globalAxisModel, globalAxisModel, [0, 0, -1]);

    for(let i=0; i<11; i++)
    {
        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.translate(Axismodel, Axismodel, [0.5, 0, (i/10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 1]);
        gl.uniformMatrix4fv(modelUniformID, false, Axismodel);

        Axis.render();

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.rotate(Axismodel, Axismodel, 1.5708, [0, 1, 0]);
        glmath.mat4.translate(Axismodel, Axismodel, [-0.5, 0, (i/10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 0]);
        gl.uniformMatrix4fv(modelUniformID, false, Axismodel);
        
        Axis.render();
    }

    glmath.mat4.rotate(globalAxisModel, globalAxisModel, 1.5708, [0, 0, 1]);
    glmath.mat4.translate(globalAxisModel, globalAxisModel, [0, 0, 0]);

    for(let i=0; i<11; i++)
    {
        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.translate(Axismodel, Axismodel, [0.5, 0, (i/10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 1]);
        gl.uniformMatrix4fv(modelUniformID, false, Axismodel);

        Axis.render();

        glmath.mat4.copy(Axismodel, globalAxisModel);
        glmath.mat4.rotate(Axismodel, Axismodel, 1.5708, [0, 1, 0]);
        glmath.mat4.translate(Axismodel, Axismodel, [-0.5, 0, (i/10)]);
        glmath.mat4.scale(Axismodel, Axismodel, [0.5, 1, 0]);
        gl.uniformMatrix4fv(modelUniformID, false, Axismodel);
        
        Axis.render();
    }

    
    let Monkeymodel = glmath.mat4.create();
    glmath.mat4.scale(Monkeymodel, Monkeymodel, [0.2, 0.2, 0.2]);
    glmath.mat4.rotate(Monkeymodel, Monkeymodel, iter, [0.2, 1, 0]);
    gl.uniformMatrix4fv(modelUniformID, false, Monkeymodel);
    Monkey.render();

    let point = glmath.vec4.create();
    point = glmath.vec4.clone([-0.5, -0.500000, -0.390625, 1]);
    label.render(point, Monkeymodel, projection, view, "label");

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
    normalAttributeID = temp_gl.getAttribLocation(program, "a_normal");
    textureAttributeID = temp_gl.getAttribLocation(program, "a_texture");

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