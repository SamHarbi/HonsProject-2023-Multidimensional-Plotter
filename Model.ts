/*
    This is a collection of functions for dealing with loading in models 
*/

import fs from "fs";
import path from "path";

export class Model {
    positionAttributeID: GLint;
    positionBuffer: WebGLBuffer;
    numVertices: GLint;
    gl: WebGLRenderingContext;

    constructor(posAttributeID: GLint) {
        this.positionAttributeID = posAttributeID;
    }

    init(vertexData: number[], glRef: WebGLRenderingContext) {

        this.gl = glRef;

        // Create a buffer and ensure it is valid
        var temp_positionBuffer = this.gl.createBuffer();
        if (temp_positionBuffer === null) {
            alert("An Error Occured while rendering, Please try reloading the page");
            return;
        }
        else {
            this.positionBuffer = <WebGLBuffer>temp_positionBuffer;
        }

        //Bind Vertex Data to a array buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertexData), this.gl.STATIC_DRAW);
    }

    render() {

        // Bind the position buffer.
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);

        // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        var size = 2;          // 2 components per iteration
        var type = this.gl.FLOAT;   // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        this.gl.vertexAttribPointer(
            this.positionAttributeID, size, type, normalize, stride, offset)


        var primitiveType = this.gl.TRIANGLES;
        var offset = 0;
        var count = 8;
        this.gl.drawArrays(primitiveType, offset, count);

    }
}


export async function load_OBJ(location: string) {

    let raw = await ReadFile(location); //The the file at location
    const lines = raw.split('\n');

    let Vertices: number[];

    Vertices = [];

    for (let i = 0; i < lines.length; i++) {

        const line = lines[i].trim(); //Remove uneeded data

        //Skip empty lines and comments
        if (line[i] === '' || line.startsWith('#')) {
            continue;
        }

        if (line.startsWith('v ')) {

            let vertices = line.split(" ");

            for (let j = 1; j < vertices.length; j++) {
                Vertices.push(Number(vertices[j]));
            }
        }
    }

    return Vertices;

}

//Read a file 
async function ReadFile(location: string) {
    var raw = fs.readFileSync(path.join(__dirname, "models/Cube.obj"), "utf8");
    return raw;
}
