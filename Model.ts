/*
    This is a class definition for a Model Object, Which act's as a store and renderer for a 3D object
*/
export class Model {
    positionAttributeID: GLint;
    positionBuffer: WebGLBuffer;
    indexBuffer: WebGLBuffer;
    numVertices: GLint;
    numIndices: GLint;
    gl: WebGLRenderingContext;
    drawmode: number;


    constructor(newPositionAttributeID: GLint, newDrawMode: number) {
        this.positionAttributeID = newPositionAttributeID;
        this.drawmode = newDrawMode;
    }

    init(vertexData: number[], indexData: number[], glRef: WebGLRenderingContext) {

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

        //Bind Vertex Data to an array buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertexData), this.gl.STATIC_DRAW);
        console.log(new Float32Array(vertexData));

        //Bind Index Data to an array buffer
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), this.gl.STATIC_DRAW);
        console.log(new Uint16Array(indexData));

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
        this.gl.drawElements(primitiveType, count, indexType, offset);

    }
}

