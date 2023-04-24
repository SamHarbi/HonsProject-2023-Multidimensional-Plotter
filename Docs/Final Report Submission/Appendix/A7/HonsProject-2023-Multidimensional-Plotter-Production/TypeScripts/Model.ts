/*
    This is a class definition for a Model Object, Which act's as a store and renderer for a 3D object
*/

// @ts-ignore
import NoTexture from "../fonts/Atlas/no_texture.png"

export class Model {

    positionAttributeID: GLint;
    normalAttributeID: GLint;
    textureAttributeID: GLint;
    positionBuffer: WebGLBuffer;
    normalBuffer: WebGLBuffer;
    indexBuffer: WebGLBuffer;
    textureBuffer: WebGLBuffer;
    numVertices: GLint;
    numIndices: GLint;
    texture: WebGLTexture;
    image: HTMLImageElement;
    gl: WebGLRenderingContext;
    drawmode: number;

    /*
        Set Attributes on creation
    */
    constructor(newPositionAttributeID: GLint, newNormalAttributeID: GLint, newTextureAttributeID: GLint, newDrawMode: number) {
        this.positionAttributeID = newPositionAttributeID;
        this.normalAttributeID = newNormalAttributeID;
        this.textureAttributeID = newTextureAttributeID;

        this.drawmode = newDrawMode;
    }

    /*
        Initializes model with rendering data
        Based on and copies some comments for clarity from: 
        https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html
        https://webglfundamentals.org/webgl/lessons/webgl-indexed-vertices.html
        https://webglfundamentals.org/webgl/lessons/webgl-3d-textures.html
    */
    init(vertexData: number[], indexData: number[], normalData: number[], textureCord: number[], glRef: WebGLRenderingContext, texImageURL?: string) {

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

        // Create a Texture and ensure it is valid
        var temp_texture = this.gl.createTexture();
        if (temp_texture === null) {
            alert("An Error Occured while rendering (Texture Undefined), Please try reloading the page");
            return;
        }
        else {
            this.texture = <WebGLTexture>temp_texture;
        }

        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);

        // Temp data while waiting for image to load 
        this.gl.texImage2D(
            this.gl.TEXTURE_2D, 0, this.gl.RGBA, 0,
            1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE,
            new Uint8Array([0, 0, 255, 255]
            ));

        this.image = new Image(341, 145);
        if (texImageURL !== undefined) {
            this.image.src = texImageURL; //Refactor
        }
        else {
            this.image.src = NoTexture;
        }
        this.image.addEventListener('load', this.textureLoaded.bind(null, this.gl, this.image, this.texture), false);

        // Create a texture buffer and ensure it is valid 
        var temp_textureBuffer = this.gl.createBuffer();
        if (temp_textureBuffer === null) {
            alert("An Error Occured while rendering (Texture Buffer Undefined), Please try reloading the page");
            return;
        }
        else {
            this.textureBuffer = <WebGLBuffer>temp_textureBuffer;
        }

        //Bind Vertex Data to an array buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertexData), this.gl.STATIC_DRAW);
        //console.log(new Float32Array(vertexData));

        //Bind Index Data to an array buffer
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), this.gl.STATIC_DRAW);
        //console.log(new Uint16Array(indexData));

        //Bind Normal Data to an array buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(normalData), this.gl.STATIC_DRAW);
        //console.log(new Float32Array(normalData));

        //Bind Texture buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(textureCord), this.gl.STATIC_DRAW);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
    }

    textureLoaded(gl, image, texture) {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, (image as TexImageSource));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        //gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    }

    /*
        renders model as per data assigned with init with rendering data
        Based on and copies some comments for clarity from: 
        https://webglfundamentals.org/webgl/lessons/webgl-fundamentals.html
        https://webglfundamentals.org/webgl/lessons/webgl-indexed-vertices.html
        https://webglfundamentals.org/webgl/lessons/webgl-3d-textures.html
    */
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

        // Bind the index buffer
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

        // Bind the normal buffer.
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer);

        // Bind predefined texture
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureBuffer);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);

        // Tell the attribute how to get data out of normalBuffer (ARRAY_BUFFER)
        var size = 3;          // 3 components per iteration
        var type = this.gl.FLOAT;   // the data is 32bit floating point values
        var normalize = false; // normalize the data (convert from 0-255 to 0-1)
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        this.gl.vertexAttribPointer(
            this.normalAttributeID, size, type, normalize, stride, offset)

        this.gl.vertexAttribPointer(
            this.textureAttributeID, 2, type, false, stride, offset)

        var primitiveType = this.drawmode;
        var offset = 0;
        var count = this.numIndices;
        var indexType = this.gl.UNSIGNED_SHORT;
        //this.gl.drawArrays(primitiveType, offset, count);

        this.gl.drawElements(primitiveType, count, indexType, offset);


    }


}


