/*
    This is a class defining a Store of User Controls 
*/

import { DATASET } from './Loader';

export class Controls {

    currentTab: number; //What Tab is the application on 

    viewTab: HTMLDivElement;
    dataTab: HTMLDivElement;
    helpTab: HTMLDivElement;

    table: string; // HTML with data table

    canvas;

    // User controlled rotation
    x_rotation;
    y_rotation;
    public x_move;
    public y_move;
    public z_move;

    // At what rotation value the view is at, combined mouse + button
    current_x_rotation;
    current_y_rotation;

    // Position modififed by mouse controls
    public mouse_x;
    public mouse_y;

    // Mouse Click Values
    public mouseClickX;
    public mouseClickY;

    public zoom; // At what zoom level is the view, controls zoom of data points 
    public zoomMultiplier; // Changes how large the range of zoom is on the draggable field 
    public combinedZoom; // Zoom * Multiplier 
    public viewsize; // Camera position, controls camera zoom outside chart
    public pointsize; // Size of a data point 

    updateNames; // Check if names need to be re-init

    updateAxisFunc: Function; // Function to run after axis values change
    updateAxisNamesFunc: Function; // FUnction to run when names need to be updated 
    getPixelsFunc: Function; // On mouse click, get pixel data from screen 

    Controls(functionToRunOnAxisUpdate: Function, functionToRunOnAxisNamesUpdate: Function, functionToRunOnMouseClick: Function) {
        this.x_rotation = 0;
        this.y_rotation = 0;

        this.x_move = 0;
        this.y_move = 0;
        this.z_move = 0;

        this.zoom = 1;
        this.zoomMultiplier = 1;
        this.combinedZoom = 1;
        this.viewsize = 0.4;
        this.pointsize = 1;

        this.mouse_x = 1;
        this.mouse_y = 1;

        this.updateNames = true;

        this.updateAxisFunc = functionToRunOnAxisUpdate;
        this.updateAxisNamesFunc = functionToRunOnAxisNamesUpdate;
        this.getPixelsFunc = functionToRunOnMouseClick;

        this.viewTab = <HTMLDivElement>document.getElementById("view");
        this.dataTab = <HTMLDivElement>document.getElementById("data");
        this.helpTab = <HTMLDivElement>document.getElementById("help");

        this.canvas = document.getElementById("glCanvas");

        this.table = "";

        // Event Listeners for user controls
        (<HTMLElement>document.getElementById("input")).addEventListener("input", this.UpdateNames.bind(this));
        (<HTMLElement>document.getElementById("zoom")).addEventListener("input", this.Zoom.bind(this));
        (<HTMLElement>document.getElementById("viewsize")).addEventListener("input", this.ViewSize.bind(this));
        (<HTMLElement>document.getElementById("pointsize")).addEventListener("input", this.PointSize.bind(this));
        (<HTMLElement>document.getElementById("zoomMultiplier")).addEventListener("input", this.setZoomMultiplier.bind(this));

        (<HTMLElement>document.getElementById("glCanvas")).addEventListener("mousemove", this.MouseMove.bind(this));
        (<HTMLElement>document.getElementById("glCanvas")).addEventListener("mousemove", this.MouseClick.bind(this));

        (<HTMLElement>document.getElementById("up")).addEventListener("click", this.Rotation.bind(this));
        (<HTMLElement>document.getElementById("down")).addEventListener("click", this.Rotation.bind(this));
        (<HTMLElement>document.getElementById("right")).addEventListener("click", this.Rotation.bind(this));
        (<HTMLElement>document.getElementById("left")).addEventListener("click", this.Rotation.bind(this));
        (<HTMLElement>document.getElementById("resetRotation")).addEventListener("click", this.resetRotation.bind(this));

        (<HTMLElement>document.getElementById("back-Move")).addEventListener("click", this.MoveSlice.bind(this));
        (<HTMLElement>document.getElementById("forward-Move")).addEventListener("click", this.MoveSlice.bind(this));
        (<HTMLElement>document.getElementById("up-Move")).addEventListener("click", this.MoveSlice.bind(this));
        (<HTMLElement>document.getElementById("down-Move")).addEventListener("click", this.MoveSlice.bind(this));
        (<HTMLElement>document.getElementById("right-Move")).addEventListener("click", this.MoveSlice.bind(this));
        (<HTMLElement>document.getElementById("left-Move")).addEventListener("click", this.MoveSlice.bind(this));

        (<HTMLElement>document.getElementById("viewTab")).addEventListener("click", this.changeTabView.bind(this));
        (<HTMLElement>document.getElementById("dataTab")).addEventListener("click", this.changeTabData.bind(this));
        (<HTMLElement>document.getElementById("helpTab")).addEventListener("click", this.changeTabHelp.bind(this));
    }

    public RenderUpdateControls() {
        if (DATASET[0] != undefined && this.updateNames == true) {
            this.updateAxisNamesFunc(); // Init Axis Names
            this.updateNames = false;
        }

        //User controlled rotation applied
        this.current_x_rotation = this.x_rotation + this.mouse_x / 100;
        this.current_y_rotation = this.y_rotation + this.mouse_y / 100;

        if (this.current_x_rotation > 360 * (Math.PI / 180) || this.current_x_rotation < -360 * (Math.PI / 180)) {
            this.current_x_rotation = 0;
            this.mouse_x = 0;
            this.x_rotation = 0;
        }
    }

    private changeTabView(event) {
        this.dataTab.hidden = true;
        this.viewTab.hidden = false;
        this.helpTab.hidden = true;

        // Reset size of canvas 
        this.canvas.width = 1600;
        this.canvas.height = 800;
    }

    private changeTabData() {
        this.dataTab.hidden = false;
        this.viewTab.hidden = true;
        this.helpTab.hidden = true;


        this.updateTabData();

    }

    private updateTabData() {
        if (DATASET[0] != undefined) {
            if (this.table == "") {
                // Heading 
                this.table = "<table><thead><tr><th scope='col'>#</th>"
                let names = Object.keys(DATASET[0]);
                let columns = names.length;

                for (let i = 0; i < names.length; i++) {
                    this.table = this.table + '<th scope="col">' + names[i] + '</th>';
                }

                this.table = this.table + "</tr></thead><tbody>";

                // Body
                for (let i = 0; i < DATASET.length; i++) {
                    this.table = this.table + "<tr><th scope='row'>" + i + "</th>";
                    for (let j = 0; j < columns; j++) {
                        this.table = this.table + "<td>" + Number(Object.values(DATASET[i])[j]) + "<td>";
                    }
                    this.table = this.table + "</tr>"
                }
            }
            this.dataTab.innerHTML = this.table;
        }
    }

    private changeTabHelp(event) {
        this.dataTab.hidden = true;
        this.viewTab.hidden = true;
        this.helpTab.hidden = false;
    }

    private resetRotation(event) {
        this.x_rotation = 0;
        this.y_rotation = 0;
        this.mouse_x = 0;
        this.mouse_y = 0;
    }

    private UpdateNames() {
        this.updateNames = true;
        if (this.dataTab.hidden == false) {
            this.updateTabData();
        }
    }

    private Zoom(event) {
        // @ts-ignore 1
        let change = <Number>document.getElementById("zoom").value;
        if (change < 0) {
            this.zoom = 1;
        } else {
            this.zoom = change;
        }
        this.calculateCombinedZoom();
        this.updateAxisFunc();
    }

    private setZoomMultiplier() {
        // @ts-ignore 1
        let change = <Number>document.getElementById("zoomMultiplier").value;
        if (change < 0) {
            this.zoomMultiplier = 1;
        } else {
            this.zoomMultiplier = change;
        }
        this.calculateCombinedZoom();
        this.updateAxisFunc();
    }

    private calculateCombinedZoom() {
        this.combinedZoom = this.zoom * this.zoomMultiplier // Apply multiplier 
    }

    private ViewSize() {
        // @ts-ignore 1 1
        this.viewsize = <Number>document.getElementById("viewsize").value / 10;
    }

    private PointSize() {
        // @ts-ignore 1 1
        this.pointsize = <Number>document.getElementById("pointsize").value / 10;
    }

    private MouseClick(event) {
        this.mouseClickX = event.clientX;
        this.mouseClickY = event.clientY;
        //this.getPixelsFunc(this.mouseClickX, this.mouseClickY);
    }

    private MouseMove(event) {
        if (event.buttons == 1) {
            this.mouse_x += event.movementX;
            this.mouse_y += event.movementY;
        }
    }

    private Rotation(event) {

        if (event.currentTarget.id == "right") {
            this.x_rotation += 0.1;
        }
        else if (event.currentTarget.id == "left") {
            this.x_rotation -= 0.1;
        }
        else if (event.currentTarget.id == "down") {
            this.y_rotation -= 0.1;
        }
        else if (event.currentTarget.id == "up") {
            this.y_rotation += 0.1;
        }

    }

    private MoveSlice(event) {
        if (event.currentTarget.id == "back-Move") {
            this.x_move += 2;
        }
        else if (event.currentTarget.id == "forward-Move") {
            this.x_move -= 2;;
        }
        else if (event.currentTarget.id == "down-Move") {
            this.y_move -= 2;
        }
        else if (event.currentTarget.id == "up-Move") {
            this.y_move += 2;
        }
        else if (event.currentTarget.id == "right-Move") {
            this.z_move += 2;
        }
        else if (event.currentTarget.id == "left-Move") {
            this.z_move -= 2;
        }

        this.updateAxisFunc();
    }
}