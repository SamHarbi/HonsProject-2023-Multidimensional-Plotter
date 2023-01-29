/*
    This is a class definition that generates texture and vertex data for a given character / number 
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

import { load_OBJ } from './Loader';

export class Font {

    font_option: number;
    font_pointers;
    font_data_pointers;
    textureID: WebGLTexture;
    textureBuffer: WebGLBuffer;
    textureCord: number[];
    image: HTMLImageElement;
    gl: WebGLRenderingContext;

    constructor(set_font_option: number, set_gl: WebGLRenderingContext) {
        this.font_pointers = [Arial_Atlas, ArialBold_Atlas];
        this.font_data_pointers = [Arial, Arial_Bold];
        this.font_option = set_font_option;
        this.gl = set_gl;
        this.textureCord = [];

        this.image = new Image();
        this.image.src = this.font_pointers[this.font_option];
    }

    init(num: string) {

        this.textureCord = [];
        let x = this.font_data_pointers[this.font_option].characters[num].x;
        let y = this.font_data_pointers[this.font_option].characters[num].y;
        let width = this.font_data_pointers[this.font_option].characters[num].width;
        let height = this.font_data_pointers[this.font_option].characters[num].height;

        //Single Letter consists of 4 vertex points -> thus 4 texture cord pairs
        this.textureCord.push(x / 341);
        this.textureCord.push(y / 125);

        this.textureCord.push(x / 341);
        this.textureCord.push((y + height) / 125);

        this.textureCord.push((x + width) / 341);
        this.textureCord.push((y + height) / 125);

        this.textureCord.push((x + width) / 341);
        this.textureCord.push(y / 125);

    }

    getTextureCords() {
        return this.textureCord;
    }

    getImage() {
        return this.image.src;
    }



}