/*
    This is a class definition that generates texture and vertex data for a given character / number 
        x----x
        |    |    +   texture of a single letter
        |    |
        x----x
    A Single letter consists of a 2 triangle rect geometery with the glyph texture applied
*/

import Arial from '../fonts/Atlas/Arial.json'
import Arial_Bold from '../fonts/Atlas/Arial-Bold.json'

// @ts-ignore
import Arial_Atlas from "../fonts/Atlas/Arial.png"
// @ts-ignore
import ArialBold_Atlas from "../fonts/Atlas/Arial-Bold.png"


export class Font {

    font_option: number;
    font_pointers;
    font_data_pointers;
    textureID: WebGLTexture;
    textureBuffer: WebGLBuffer;
    textureCord: number[];
    image: HTMLImageElement;
    gl: WebGLRenderingContext;

    glyph: number[][];
    short_glyph: number[][];
    thin_glyph: number[][];

    // Initialize everything including which font to use
    constructor(set_font_option: number, set_gl: WebGLRenderingContext, loadedGlyph: number[][]) {
        this.font_pointers = [Arial_Atlas, ArialBold_Atlas];
        this.font_data_pointers = [Arial, Arial_Bold];
        this.font_option = set_font_option;
        this.gl = set_gl;
        this.textureCord = [];

        this.image = new Image();
        this.image.src = this.font_pointers[this.font_option];

        this.glyph = loadedGlyph; // Cannot use async here, thus must be init
    }

    init(num: string, custom_height?: number) {

        this.textureCord = [];
        let x = this.font_data_pointers[this.font_option].characters[num].x;
        let y = this.font_data_pointers[this.font_option].characters[num].y;
        let width = this.font_data_pointers[this.font_option].characters[num].width;
        let height = this.font_data_pointers[this.font_option].characters[num].height;

        let font_height = this.font_data_pointers[this.font_option].height;
        let font_width = this.font_data_pointers[this.font_option].width;
        let font_size = this.font_data_pointers[this.font_option].size;

        if (typeof custom_height !== 'undefined') {
            height = custom_height;
        }

        //Single Letter consists of 4 vertex points -> thus 4 texture cord pairs
        this.textureCord.push(x / font_width);
        this.textureCord.push(y / font_height);

        this.textureCord.push(x / font_width);
        this.textureCord.push((y + height) / font_height);

        this.textureCord.push((x + width) / font_width);
        this.textureCord.push((y + height) / font_height);

        this.textureCord.push((x + width) / font_width);
        this.textureCord.push(y / font_height);

        // Directly Modify Glyph geometry to avoid stretched letters
        this.glyph[0][6] = width / 20;
        this.glyph[0][9] = width / 20;

        this.glyph[0][1] = height / 20;
        this.glyph[0][10] = height / 20;

    }

    getTextureCords() {
        return this.textureCord;
    }

    getImage() {
        return this.image.src;
    }

    getGlyph(char: string) {
        return this.glyph;
    }

}