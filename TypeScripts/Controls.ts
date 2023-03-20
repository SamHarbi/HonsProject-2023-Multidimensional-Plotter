/*
    This is a class defining a Store of User Controls 
*/

import { DATASET, InstantReadCSV } from './Loader';

export class Controls {

    currentTab: number; //What Tab is the application on 

    viewTab: HTMLDivElement;
    dataTab: HTMLDivElement;
    helpTab: HTMLDivElement;

    updateNeedDataTab: boolean;

    table: string; // HTML with data table
    tableElement: HTMLDivElement; // HTML element where table should go
    dimensionOptions: string[]; // Record of Headers from the dataset

    xSelect; // Drop down for X column
    ySelect; // Drop down for Y column
    zSelect; // Drop down for Z column
    cSelect; // Drop down for C column
    aSelect; // Drop down for A column

    colourMod;

    canvas;

    // User controlled rotation
    x_rotation;
    y_rotation;
    public x_move;
    public y_move;
    public z_move;
    align;

    // At which index position in DATASET is the x, y, z, c and a value
    public xIndex;
    public yIndex;
    public zIndex;
    public cIndex;
    public aIndex;

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

        this.xIndex = 2;
        this.yIndex = 1;
        this.zIndex = 0;
        this.cIndex = 3;
        this.aIndex = 4;

        this.mouse_x = 1;
        this.mouse_y = 1;

        this.updateNames = true;
        this.updateNeedDataTab = false;

        this.updateAxisFunc = functionToRunOnAxisUpdate;
        this.updateAxisNamesFunc = functionToRunOnAxisNamesUpdate;
        this.getPixelsFunc = functionToRunOnMouseClick;

        this.viewTab = <HTMLDivElement>document.getElementById("view");
        this.dataTab = <HTMLDivElement>document.getElementById("data");
        this.helpTab = <HTMLDivElement>document.getElementById("help");

        this.xSelect = <HTMLDivElement>document.getElementById("x");
        this.ySelect = <HTMLDivElement>document.getElementById("y");
        this.zSelect = <HTMLDivElement>document.getElementById("z");
        this.cSelect = <HTMLDivElement>document.getElementById("c");
        this.aSelect = <HTMLDivElement>document.getElementById("a");

        this.dimensionOptions = [];

        this.canvas = document.getElementById("glCanvas");

        this.table = "";
        this.tableElement = <HTMLDivElement>document.getElementById("table");

        this.colourMod = 0.1;

        this.align = 0;

        // Event Listeners for user controls
        (<HTMLElement>document.getElementById("input")).addEventListener("input", this.fileInput.bind(this));

        (<HTMLElement>document.getElementById("zoom")).addEventListener("input", this.Zoom.bind(this));
        (<HTMLElement>document.getElementById("zoom")).addEventListener("input", this.Zoom.bind(this));
        (<HTMLElement>document.getElementById("zoomMultiplier")).addEventListener("input", this.setZoomMultiplier.bind(this));

        (<HTMLElement>document.getElementById("viewsize")).addEventListener("input", this.ViewSize.bind(this));
        (<HTMLElement>document.getElementById("pointsize")).addEventListener("input", this.PointSize.bind(this));
        (<HTMLElement>document.getElementById("colourMod")).addEventListener("input", this.setColourMod.bind(this));

        (<HTMLElement>document.getElementById("glCanvas")).addEventListener("mousemove", this.MouseMove.bind(this));
        (<HTMLElement>document.getElementById("glCanvas")).addEventListener("mousemove", this.MouseClick.bind(this));
        (<HTMLElement>document.getElementById("glCanvas")).addEventListener("wheel", this.MouseWheel.bind(this));

        (<HTMLElement>document.getElementById("up")).addEventListener("click", this.Rotation.bind(this));
        (<HTMLElement>document.getElementById("down")).addEventListener("click", this.Rotation.bind(this));
        (<HTMLElement>document.getElementById("right")).addEventListener("click", this.Rotation.bind(this));
        (<HTMLElement>document.getElementById("left")).addEventListener("click", this.Rotation.bind(this));
        (<HTMLElement>document.getElementById("resetRotation")).addEventListener("click", this.resetRotation.bind(this));
        (<HTMLElement>document.getElementById("align")).addEventListener("click", this.Align.bind(this));

        (<HTMLElement>document.getElementById("back-Move")).addEventListener("click", this.MoveSlice.bind(this));
        (<HTMLElement>document.getElementById("forward-Move")).addEventListener("click", this.MoveSlice.bind(this));
        (<HTMLElement>document.getElementById("up-Move")).addEventListener("click", this.MoveSlice.bind(this));
        (<HTMLElement>document.getElementById("down-Move")).addEventListener("click", this.MoveSlice.bind(this));
        (<HTMLElement>document.getElementById("right-Move")).addEventListener("click", this.MoveSlice.bind(this));
        (<HTMLElement>document.getElementById("left-Move")).addEventListener("click", this.MoveSlice.bind(this));

        (<HTMLElement>document.getElementById("viewTab")).addEventListener("click", this.changeTabView.bind(this));
        (<HTMLElement>document.getElementById("dataTab")).addEventListener("click", this.changeTabData.bind(this));
        (<HTMLElement>document.getElementById("helpTab")).addEventListener("click", this.changeTabHelp.bind(this));

        (<HTMLElement>document.getElementById("render")).addEventListener("click", this.selectDimensions.bind(this));



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

    private setColourMod() {
        // @ts-ignore 1
        let change = <Number>document.getElementById("colourMod").value;
        if (change < 0) {
            this.colourMod = 0;
        } else {
            this.colourMod = change;
        }

        this.displayColourBounds();
    }

    private displayColourBounds() {
        let max = document.getElementById("maxSquash");
        let min = document.getElementById("minSquash");

        // @ts-ignore 1
        max.innerHTML = Math.round(1 / this.colourMod * 6) + " Aprox.";
        // @ts-ignore 1
        min.innerHTML = Math.round(1 / this.colourMod * -6) + " Aprox. ";
    }

    private changeTabView() {
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

        if (this.updateNeedDataTab == true) {
            this.updateTabData()
            this.updateNeedDataTab = false;
        }


    }

    private selectDimensions() {
        if (DATASET[0] != undefined) {
            this.xIndex = this.xSelect.value;
            this.yIndex = this.ySelect.value;
            this.zIndex = this.zSelect.value;
            this.cIndex = this.cSelect.value;
            this.aIndex = this.aSelect.value;
            this.updateNames = true;
            this.changeTabView();
        }
    }

    private updateTabData() {
        if (DATASET[0] != undefined) {
            // Heading 
            this.table = "<table><thead><tr><th scope='col'>#</th>"
            let names = Object.keys(DATASET[0]);
            let columns = names.length;

            for (let i = 0; i < names.length; i++) {
                this.table = this.table + '<th scope="col">' + names[i] + '</th>';
                //this.xSelect.innerHTML = this.xSelect.innerHTML + "<option value='" + names[i] + "'>" + names[i] + "</option>";
                this.dimensionOptions[i] = names[i];
            }

            console.log(this.dimensionOptions);

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
        this.tableElement.innerHTML = this.table;
        this.updateSelectors();
    }

    private updateSelectors() {

        this.xSelect.innerHTML = '';
        this.ySelect.innerHTML = '';
        this.zSelect.innerHTML = '';
        this.cSelect.innerHTML = '';
        this.aSelect.innerHTML = '';

        for (let i = 0; i < this.dimensionOptions.length; i++) {

            if (i == this.xIndex) {
                this.xSelect.innerHTML = this.xSelect.innerHTML + "<option value='" + i + "' selected>" + this.dimensionOptions[i] + "</option>";
            }
            else {
                this.xSelect.innerHTML = this.xSelect.innerHTML + "<option value='" + i + "'>" + this.dimensionOptions[i] + "</option>";
            }

            if (i == this.yIndex) {
                this.ySelect.innerHTML = this.ySelect.innerHTML + "<option value='" + i + "' selected>" + this.dimensionOptions[i] + "</option>";
            }
            else {
                this.ySelect.innerHTML = this.ySelect.innerHTML + "<option value='" + i + "'>" + this.dimensionOptions[i] + "</option>";
            }

            if (i == this.zIndex) {
                this.zSelect.innerHTML = this.zSelect.innerHTML + "<option value='" + i + "' selected>" + this.dimensionOptions[i] + "</option>";
            }
            else {
                this.zSelect.innerHTML = this.zSelect.innerHTML + "<option value='" + i + "'>" + this.dimensionOptions[i] + "</option>";
            }

            if (i == this.cIndex) {
                this.cSelect.innerHTML = this.cSelect.innerHTML + "<option value='" + i + "' selected>" + this.dimensionOptions[i] + "</option>";
            }
            else {
                this.cSelect.innerHTML = this.cSelect.innerHTML + "<option value='" + i + "'>" + this.dimensionOptions[i] + "</option>";
            }

            if (i == this.aIndex) {
                this.aSelect.innerHTML = this.aSelect.innerHTML + "<option value='" + i + "' selected>" + this.dimensionOptions[i] + "</option>";
            }
            else {
                this.aSelect.innerHTML = this.aSelect.innerHTML + "<option value='" + i + "'>" + this.dimensionOptions[i] + "</option>";
            }
        }
    }

    private changeTabHelp(event) {
        this.dataTab.hidden = true;
        this.viewTab.hidden = true;
        this.helpTab.hidden = false;
    }

    private resetRotation() {
        this.x_rotation = 0;
        this.y_rotation = 0;
        this.mouse_x = 0;
        this.mouse_y = 0;
    }

    /*
        Move graph to preset positions 
    */
    private Align() {
        if (this.align == 0) {
            this.align = 1;
            this.resetRotation();
            this.x_rotation = 25 * (Math.PI / 180);
            this.y_rotation = 0 * (Math.PI / 180);
        } else if (this.align == 1) {
            this.align = 2;
            this.resetRotation();
            this.x_rotation = 115 * (Math.PI / 180);
            this.y_rotation = 0 * (Math.PI / 180);
        } else if (this.align == 2) {
            this.align = 3;
            this.resetRotation();
            this.x_rotation = 205 * (Math.PI / 180);
            this.y_rotation = 0 * (Math.PI / 180);
        }
        else if (this.align == 3) {
            this.align = 0;
            this.resetRotation();
            this.x_rotation = 295 * (Math.PI / 180);
            this.y_rotation = 0 * (Math.PI / 180);
        }
    }

    private fileInput() {
        InstantReadCSV();
        this.displayColourBounds();
        this.changeTabView();
        this.updateNeedDataTab = true;
        this.updateNames = true;
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

    private MouseWheel(event) {
        if (event.deltaY > 0) {
            this.viewsize += 0.1;
        } else if (event.deltaY < 0) {
            this.viewsize -= 0.1;
        }

        if (this.viewsize > 1) {
            this.viewsize = 1;
        } else if (this.viewsize <= 0.1) {
            this.viewsize = 0.1;
        }

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

    /*
        *
        * GETTERS AND SETTERS
        *
    */

    public getMoveAxis() {
        return [this.x_move, this.y_move, this.z_move];
    }

    public getIndexValues() {
        return [this.xIndex, this.yIndex, this.zIndex, this.cIndex, this.aIndex];
    }

    public getMouseClicks() {
        return [this.mouseClickX, this.mouseClickY];
    }

    public getCombinedZoom() {
        return this.combinedZoom;
    }

    public getCurrentRotation() {
        return [this.current_x_rotation, this.current_y_rotation];
    }

    public getViewSize() {
        return this.viewsize;
    }

    public getPointSize() {
        return this.pointsize;
    }

    public getColourMod() {
        return this.colourMod;
    }
}