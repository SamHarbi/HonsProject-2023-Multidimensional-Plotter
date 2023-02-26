/*
    This is a class defining a Store of User Controls 
*/

export class Controls {

    // User controlled rotation
    x_rotation;
    y_rotation;
    x_move;
    y_move;
    z_move;

    // At what rotation value the view is at, combined mouse + button
    current_x_rotation;
    current_y_rotation;

    // Position modififed by mouse controls
    mouse_x;
    mouse_y;

    zoom; // At what zoom level is the view, controls zoom of data points 
    viewsize; // Camera position, controls camera zoom outside chart
    pointsize; // Size of a data point 

    updateNames; // Check if names need to be re-init

    Controls() {
        this.x_rotation = 0;
        this.y_rotation = 0;

        this.x_move = 0;
        this.y_move = 0;
        this.z_move = 0;

        this.zoom = 1;
        this.viewsize = 0.4;
        this.pointsize = 1;

        this.mouse_x = 1;
        this.mouse_y = 1;

        this.updateNames = true;

        // Event Listeners for user controls
        (<HTMLElement>document.getElementById("input")).addEventListener("input", this.UpdateNames);
        (<HTMLElement>document.getElementById("zoom")).addEventListener("input", this.Zoom);
        (<HTMLElement>document.getElementById("viewsize")).addEventListener("input", this.ViewSize);
        (<HTMLElement>document.getElementById("pointsize")).addEventListener("input", this.PointSize);
        (<HTMLElement>document.getElementById("glCanvas")).addEventListener("mousemove", this.MouseMove);

        (<HTMLElement>document.getElementById("up")).addEventListener("click", this.Rotation);
        (<HTMLElement>document.getElementById("down")).addEventListener("click", this.Rotation);

        (<HTMLElement>document.getElementById("right")).addEventListener("click", this.Rotation);
        (<HTMLElement>document.getElementById("left")).addEventListener("click", this.Rotation);

        (<HTMLElement>document.getElementById("back-Move")).addEventListener("click", this.MoveSlice);
        (<HTMLElement>document.getElementById("forward-Move")).addEventListener("click", this.MoveSlice);

        (<HTMLElement>document.getElementById("up-Move")).addEventListener("click", function () {
            y_move += 2;
            setAxisValues();
        });

        (<HTMLElement>document.getElementById("down-Move")).addEventListener("click", function () {
            y_move -= 2;
            setAxisValues();
        });

        (<HTMLElement>document.getElementById("right-Move")).addEventListener("click", function () {
            z_move += 2;
            setAxisValues();
        });

        (<HTMLElement>document.getElementById("left-Move")).addEventListener("click", function () {
            z_move -= 2;
            setAxisValues();
        });

    }

    private UpdateNames() {
        this.updateNames = true;
    }

    private Zoom() {
        // @ts-ignore 1
        let change = <Number>document.getElementById("zoom").value;
        // @ts-ignore 1
        zoom = change / 10;
        //setAxisValues();
    }

    private ViewSize() {
        // @ts-ignore 1 1
        viewsize = <Number>document.getElementById("viewsize").value / 10;
    }

    private PointSize() {
        // @ts-ignore 1 1
        pointsize = <Number>document.getElementById("pointsize").value / 10;
    }

    private MouseMove(event) {
        if (event.buttons == 1) {
            this.mouse_x += event.movementX;
            this.mouse_y += event.movementY;
            //mouse_held = true;
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

        console.log(event);

    }

    private MoveSlice(event) {
        if (event.currentTarget.id == "back-Move") {
            this.x_move += 2;
            //setAxisValues();
        }
        else if (event.currentTarget.id == "forward-Move") {
            this.x_move -= 2;;
        }
        else if (event.currentTarget.id == "down") {
            this.y_rotation -= 0.1;
        }
        else if (event.currentTarget.id == "up") {
            this.y_rotation += 0.1;
        }
    }
}