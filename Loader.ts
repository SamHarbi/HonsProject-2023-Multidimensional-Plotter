/*
    This is a collection of functions for dealing with loading in models 
*/

//Imports will give errors if not using parcel
// @ts-ignore
import fs from "fs";
// @ts-ignore
import path from "path";

export async function load_OBJ(model: string) {

    let raw = await ReadFile(model); //The Model to load
    const lines = raw.split('\n');

    let Vertices: number[];
    let Indicies: number[];
    let Normals: number[];
    let Textures: number[];
    let Combined: number[][];

    Vertices = [];
    Indicies = [];
    Normals = [];
    Textures = [];
    Combined = [[], [], [], []];

    for (let i = 0; i < lines.length; i++) {

        const line = lines[i].trim(); //Remove uneeded data

        //Skip empty lines and comments
        if (line[i] === '' || line.startsWith('#')) {
            continue;
        }

        //Extract Vertex Values
        if (line.startsWith('v ')) {

            let vertices = line.split(' ');

            for (let j = 1; j < vertices.length; j++) {
                Vertices.push(Number(vertices[j]));
            }
        }

        //Extract Face Values
        if (line.startsWith('f ')) {

            let points = line.split(' ');

            for (let i = 1; i < points.length; i++) {
                let indicies = points[i].split('/');
                // @ts-ignore
                Indicies.push(Number(indicies[0] - 1));
            }
        }

        //Extract Vertex Normal Values
        if (line.startsWith('vn ')) {

            let normals = line.split(' ');

            for (let i = 1; i < normals.length; i++) {
                Normals.push(Number(normals[i]));
            }
        }

        //Extract Texture Values
        if (line.startsWith('vt ')) {

            let textures = line.split(' ');

            for (let i = 1; i < textures.length; i++) {
                Textures.push(Number(textures[i]));
            }

        }
    }

    Combined[0] = Combined[0].concat(Vertices);
    Combined[1] = Combined[1].concat(Indicies);
    Combined[2] = Combined[2].concat(Normals);
    Combined[3] = Combined[3].concat(Textures);
    console.log(Combined);

    return Combined;

}

//Read a file 
async function ReadFile(model: string) {

    if (model === "Monkey") {
        var raw = fs.readFileSync(path.join(__dirname, "./models/Monkey.obj"), "utf8");
        return raw;
    }
    else if (model === "Triangle") {
        var raw = fs.readFileSync(path.join(__dirname, "./models/Triangle.obj"), "utf8");
        return raw;
    }
    else if (model == "Axis") {
        var raw = fs.readFileSync(path.join(__dirname, "./models/AxisLine.obj"), "utf8");
        return raw;
    }
    else if(model == "Glyph")
    {
        var raw = fs.readFileSync(path.join(__dirname, "./models/Glyph.obj"), "utf-8");
        return raw;
    }
    else {
        var raw = fs.readFileSync(path.join(__dirname, "./models/Cube2.obj"), "utf8");
        return raw;
    }


}
