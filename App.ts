/*
    This is the HTML based user controls and general website UI that doesn't need
    to be rendered in WebGL.

    HTML is entirely created and appended through TypeScript. This is somewhat similar to how a framework would do it
*/
export class App {
    
    Parent: HTMLElement; 

    constructor(parent)
    {
        let temp_parent = document.getElementById(parent);
        if(typeof(temp_parent) === null)
        {
            let temp_parent = document.body;
        }

        this.Parent = <HTMLElement>temp_parent;
    }



}