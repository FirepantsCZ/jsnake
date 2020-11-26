var coorx = 0;
var coory = 0;

var width = 50;
var height = 50;

var speed = 5;

window.onload = function () {
    draw(0, 0, width, height);
    document.addEventListener("keydown", function (event) { key(event) });
}

function draw(coorx, coory, width, height) {
    var canvas = document.getElementById("can");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(200, 0, 0)";

    ctx.fillRect(coorx, coory, width, height);
    ctx.clearRect(coorx - 50, coory, width, height);
    ctx.clearRect(coorx, coory - 50, width, height);
    ctx.clearRect(coorx + 50, coory, width, height);
    ctx.clearRect(coorx, coory + 50, width, height);
}

function key(event) {
    var pressed = event.which;
    console.log(pressed);
    switch (pressed) {
        case 37: coorx -= speed;
            break;
        case 38: coory -= speed;
            break;
        case 39: coorx += speed;
            break;
        case 40: coory += speed;
            break;
    }

    if (coorx > 100) {
        coorx -= speed;
    }
    if (coory > 100) {
        coory -= speed;
    }
    if (coorx < 0) {
        coorx += speed;
    }
    if (coory < 0) {
        coory += speed;
    }
    console.log("x coordinates: " + coorx);
    console.log("x coordinates: " + coory);

    draw(coorx, coory, width, height);
}