/*
    This is a class definition that handles WebGL Text using glyph textures
        x----x
        |    |    +   texture of a single letter
        |    |
        x----x
    A Single letter consists of a 2 triangle rect geometery with the glyph texture applied
*/

import Arial from './fonts/Atlas/Arial.json'
import Arial_Bold from './fonts/Atlas/Arial-Bold.json'

// @ts-ignore
import Arial_Atlas from "./fonts/Atlas/Arial.png"
import ArialBold_Atlas from "./fonts/Atlas/Arial-Bold.json"

export class Font {

    font_option: number;
    font_pointers;
    font_data_pointers;
    textureID: WebGLTexture;
    textureBuffer: WebGLBuffer;
    textureCord: number[];
    image: HTMLImageElement;
    gl: WebGLRenderingContext;

    constructor(set_font_option: number, set_gl: WebGLRenderingContext)
    {
        this.font_pointers = [Arial_Atlas, ArialBold_Atlas];
        this.font_data_pointers = [Arial, Arial_Bold];
        this.font_option = set_font_option;
        this.gl = set_gl;
        this.textureCord = [];
        
        this.image = new Image();
        this.image.src = this.font_pointers[this.font_option];
    }
    
    init(text: string)
    {
        // Create a Texture and ensure it is valid
        var temp_texture = this.gl.createTexture();
        if (temp_texture === null) {
            alert("An Error Occured while rendering (Texture Undefined), Please try reloading the page");
            return;
        }
        else {
            this.textureID = <WebGLTexture>temp_texture;
        }
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureID);
        
        // Temp data while waiting for image to load 
        this.gl.texImage2D(
            this.gl.TEXTURE_2D, 0, this.gl.RGBA, 0, 
            1, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE,
            new Uint8Array([0, 0, 255, 255]
        ));
        
        // Create a texture buffer and ensure it is valid 
        var temp_textureBuffer = this.gl.createBuffer();
        if (temp_textureBuffer === null) {
            alert("An Error Occured while rendering (Texture Buffer Undefined), Please try reloading the page");
            return;
        }
        else {
            this.textureBuffer = <WebGLBuffer>temp_textureBuffer;
        }

        
            let x = this.font_data_pointers[this.font_option].characters['a'].x;
            let y = this.font_data_pointers[this.font_option].characters['a'].y;
            let width = this.font_data_pointers[this.font_option].characters['a'].width;
            let height = this.font_data_pointers[this.font_option].characters['a'].height;

            //Single Letter consists of 4 vertex points -> thus 4 texture cord pairs
            this.textureCord.push(x);
            this.textureCord.push(y);

            this.textureCord.push(x);
            this.textureCord.push(y-height);

            this.textureCord.push(x+width);
            this.textureCord.push(y-height);

            this.textureCord.push(x+width);
            this.textureCord.push(y);
        

        //Bind Texture buffer
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.textureCord), this.gl.STATIC_DRAW);

        this.image.src = this.font_pointers[this.font_option];
        this.image.addEventListener('load', this.textureLoaded.bind(null, this.gl, this.image), false);

        return <WebGLBuffer>this.textureBuffer;
    }

    textureLoaded(gl, image) {
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,gl.UNSIGNED_BYTE, (image as TexImageSource));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    }

    getTextureID()
    {
        return this.textureID;
    }

    getTextureBuffer()
    {
        return this.textureBuffer;
    }

}