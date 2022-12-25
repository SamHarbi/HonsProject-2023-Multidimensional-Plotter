/*
    This is a class definition for a Text Object, Which is an abstraction for dealing with HTML that refrences vertex positions in the webgl scene
    Idea for this implmentation was based on https://webglfundamentals.org/webgl/lessons/webgl-text-html.html
*/

import * as glmath from 'gl-matrix';

export class Text {

    ID: number;
    parentDiv: HTMLDivElement;
    canvasWidth: number;
    canvasHeight: number;

    constructor(set_ID, set_canvasWidth, set_canvasHeight) {
        this.parentDiv = document.createElement(set_ID);
        this.parentDiv.classList.add('Label');
        document.getElementById("Labels")?.appendChild(this.parentDiv);
        this.ID = set_ID;
        this.canvasHeight = set_canvasHeight;
        this.canvasWidth = set_canvasWidth;
    }

    render(position:glmath.vec4, model: glmath.mat4, view: glmath.mat4, projection: glmath.mat4, value:string) {

        //glmath.vec4.normalize(position, position);
        let fin_matrix = glmath.mat4.create();
        fin_matrix = glmath.mat4.multiply(fin_matrix, view, projection);
        fin_matrix = glmath.mat4.multiply(fin_matrix, fin_matrix, model);
        let translated_position = glmath.vec4.transformMat4(position, position, fin_matrix);

        translated_position[0] /= translated_position[3];
        translated_position[1] /= translated_position[3];
 
        // convert from clipspace to pixels
        var pixelX = ( translated_position[0] *  0.5 + 0.5) * this.canvasWidth;
        var pixelY = ( translated_position[1] * -0.5 + 0.5) * this.canvasHeight;
        var pixelZ = ( translated_position[2] * -0.5 + 0.5) * this.canvasHeight / 20;
 
        // position the div
        this.parentDiv.style.left = Math.floor(pixelX) + "px";
        this.parentDiv.style.top  = Math.floor(pixelY) + "px";
        this.parentDiv.style.fontSize = 1 - Math.floor(pixelZ) + "px";
        
        this.parentDiv.innerHTML = value;
    }

}