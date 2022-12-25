/*
    This is a class definition for a Font Object, Which is an abstraction for dealing with and loading fonts using the opentype.js npm package
*/

import opentype from 'opentype.js';

export class Font {

    async make(name: string){
        const font = await opentype.load(new URL("fonts/IBMPlexSans-Regular.ttf", import.meta.url));
        const path = font.getPath('Hello, World!', 0, 150, 72);
        console.log(path);
    }

}