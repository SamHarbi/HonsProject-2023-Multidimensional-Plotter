/*
    This is a class definition that handles WebGL Text using glyph textures  
*/

import Arial from './fonts/Atlas/Arial.json'
import Arial_Bold from './fonts/Atlas/Arial-Bold.json'

export class Font {

    font_option: string;
    Atlas: HTMLImageElement;

    constructor(set_font_option:string)
    {
        this.font_option = set_font_option;
        this.Atlas = new Image();
    }
    
    init(gl:WebGLRenderingContext)
    {
        let glyph = gl.createTexture;
        
        gl.texImage2D(
            gl.TEXTURE_2D, 0, gl.RGBA, 0, 
            1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
            new Uint8Array([0, 0, 255, 255]
        ));

        this.Atlas.src = require("./fonts/Atlas/Arial.png");
        this.Atlas.addEventListener('load', function() {
        gl.bindTexture(gl.TEXTURE_2D, glyph);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA,gl.UNSIGNED_BYTE, (this as TexImageSource));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        });
        
    }

}