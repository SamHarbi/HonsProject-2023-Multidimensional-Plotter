/*
    This is a collection of functions for dealing with loading in models 
*/

//Imports will give errors if not using parcel
// @ts-ignore
import { Console } from "console";
import fs from "fs";
// @ts-ignore
import path from "path";

var csv = require('jquery-csv'); //Not actually jquery, just a parser with jquery compliant syntax

//Global Dataset Variable of currently last imported (valid) data
export var DATASET: number[][];
DATASET = [];

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
            continue;
        }

        //Extract Face Values
        if (line.startsWith('f ')) {

            let points = line.split(' ');

            for (let i = 1; i < points.length; i++) {
                let indicies = points[i].split('/');
                // @ts-ignore
                Indicies.push(Number(indicies[0] - 1));
            }
            continue;
        }

        //Extract Vertex Normal Values
        if (line.startsWith('vn ')) {

            let normals = line.split(' ');

            for (let i = 1; i < normals.length; i++) {
                Normals.push(Number(normals[i]));
            }
            continue;
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

/*
    Partially based on https://developer.mozilla.org/en-US/docs/Web/API/File_API

    Uses jquery-csv to read in a csv file (compliant with IETF RFC 4180) and save it into DATASET as a JS Object 
*/
export async function read_CSV() {

    const fileInput = <HTMLInputElement>document.querySelector("input[type=file]");

    fileInput.addEventListener("change", () => {
        let [file] = <FileList>fileInput.files;
        if (file) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                try{
                    DATASET = csv.toObjects(reader.result); //Save to Object
                } catch(error)
                {
                    alert("Wrong file format, Please Uplaod a .csv file");
                }
            });
            reader.readAsText(file);
          }
    })

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
        var raw = fs.readFileSync(path.join(__dirname, "./models/Cube3.obj"), "utf8");
        return raw;
    }
}
