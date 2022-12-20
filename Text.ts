/*
    This is a class definition for a Text Object, Which is an abstraction for dealing with HTML that refrences vertex positions in the webgl scene
    Idea for this implmentation was based on https://webglfundamentals.org/webgl/lessons/webgl-text-html.html
*/

import * as glmath from 'gl-matrix';

export class Text {

    div: HTMLDivElement;
    parentDiv: HTMLDivElement;
    model: glmath.mat4;

    constructor(set_parentDiv, set_model) {
        this.parentDiv = set_parentDiv;
        this.model = set_model;
    }

}