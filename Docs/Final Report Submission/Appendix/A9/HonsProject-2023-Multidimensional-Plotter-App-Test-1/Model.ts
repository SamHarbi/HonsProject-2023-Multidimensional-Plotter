/*
    This is a class definition for a Model Object, Which act's as a store and renderer for a 3D object
    Based on and copies some comments for clarity from: 
        https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html
        https://webglfundamentals.org/webgl/lessons/webgl-indexed-vertices.html
        https://webglfundamentals.org/webgl/lessons/webgl-3d-textures.html
*/
export class Model {
    positionAttributeID: GLint;
    normalAttributeID: GLint;
    positionBuffer: WebGLBuffer;
    normalBuffer: WebGLBuffer;
    indexBuffer: WebGLBuffer;
    numVertices: GLint;
    numIndices: GLint;
    gl: WebGLRenderingContext;
    drawmode: number;


    constructor(newPositionAttributeID: GLint, newNormalAttributeID: GLint, newDrawMode: number) {
        this.positionAttributeID = newPositionAttributeID;
        this.normalAttributeID = newNormalAttributeID;
        this.drawmode = newDrawMode;
    }

    init(vertexData: number[], indexData: number[], normalData: number[], glRef: WebGLRenderingContext) {

        this.gl = glRef;

        this.numIndices = indexData.length;

        // Create a Vertex buffer and ensure it is valid
        var temp_positionBuffer = this.gl.createBuffer();
        if (temp_positionBuffer === null) {
            alert("An Error Occured while rendering (Vertex Buffer Undefined), Please try reloading the page");
            return;
        }
        else {
            this.positionBuffer = <WebGLBuffer>temp_positionBuffer;
        }

        // Create a Index buffer and ensure it is valid
        var temp_indexBuffer = this.gl.createBuffer();
        if (temp_indexBuffer === null) {
            alert("An Error Occured while rendering (Index Buffer Undefined), Please try reloading the page");
            return;
        }
        else {
            this.indexBuffer = <WebGLBuffer>temp_indexBuffer;
        }

        // Create a Normal buffer and ensure it is valid
        var temp_normalBuffer = this.gl.createBuffer();
        if (temp_normalBuffer === null) {
            alert("An Error Occured while rendering (Normal Buffer Undefined), Please try reloading the page");
            return;
        }
        else {
            this.normalBuffer = <WebGLBuffer>temp_normalBuffer;
        }

        //Bind Vertex Data to an array buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertexData), this.gl.STATIC_DRAW);
        console.log(new Float32Array(vertexData));

        //Bind Index Data to an array buffer
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), this.gl.STATIC_DRAW);
        console.log(new Uint16Array(indexData));

        //Bind Normal Data to an array buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(normalData), this.gl.STATIC_DRAW);
        console.log(new Float32Array(normalData));
    }

    render() {

        // Bind the position buffer.
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);

        // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        var size = 3;          // 3 components per iteration
        var type = this.gl.FLOAT;   // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        this.gl.vertexAttribPointer(
            this.positionAttributeID, size, type, normalize, stride, offset)

        //Bind the index buffer
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

        var primitiveType = this.drawmode;
        var offset = 0;
        var count = this.numIndices;
        var indexType = this.gl.UNSIGNED_SHORT;
        //this.gl.drawArrays(primitiveType, offset, count);

        // Bind the normal buffer.
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer);

        // Tell the attribute how to get data out of normalBuffer (ARRAY_BUFFER)
        var size = 3;          // 3 components per iteration
        var type = this.gl.FLOAT;   // the data is 32bit floating point values
        var normalize = false; // normalize the data (convert from 0-255 to 0-1)
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        this.gl.vertexAttribPointer(
            this.normalAttributeID, size, type, normalize, stride, offset)

        this.gl.drawElements(primitiveType, count, indexType, offset);


    }
}

