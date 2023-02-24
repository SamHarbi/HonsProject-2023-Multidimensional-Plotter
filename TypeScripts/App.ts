/*
    This is the "Controller" part of an MVC design. User controls are handelled here and used to modify the Model, i.e WebGL Scene
*/

let updateNames; // Check if names need to be re-init


export class App {

    App() {
        window.addEventListener("input", this.updateAxisNames);
    }

    updateAxisNames() {
        alert("App Activated");
    }


}