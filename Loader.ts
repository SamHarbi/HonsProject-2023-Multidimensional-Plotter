/*
    This is a collection of functions for dealing with loading in models 
*/

//Imports will give errors if not using parcel
// @ts-ignore
import fs from "fs";
// @ts-ignore
import path from "path";

export async function load_OBJ(location: string) {

    let raw = await ReadFile(location); //The the file at location
    const lines = raw.split('\n');

    let Vertices: number[];
    let Indicies: number[];
    let Combined: number[][];

    Vertices = [];
    Indicies = [];
    Combined = [[], []];

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

        if (line.startsWith('f ')) {

            let points = line.split(' ');

            for (let i = 1; i < points.length; i++) {
                let indicies = points[i].split('/');
                Indicies.push(Number(indicies[0] - 1));
            }
        }
    }

    Combined[0] = Combined[0].concat(Vertices);
    Combined[1] = Combined[1].concat(Indicies);
    console.log(Combined);

    return Combined;

}

//Read a file 
async function ReadFile(location: string) {
    var raw = fs.readFileSync("./models/Monkey.obj", "utf8");
    return raw;
}
