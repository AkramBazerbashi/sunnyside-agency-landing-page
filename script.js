let iconMenu = document.getElementById("iconMenu");
let background = document.getElementById("background");
let canvas = document.getElementById("canvas");
let canvas1 = document.getElementById("canvas1");
let context = canvas.getContext('2d');
let context1 = canvas1.getContext('2d');
context.beginPath();
context.moveTo(0, 30);
context.lineTo(30, 30);
context.lineTo(30, 0);
context.lineTo(0, 30);
context.fillStyle = "#FFF"
context.fill();

context1.beginPath();
context1.lineWidth = 3;
context1.moveTo(30, 0);
context1.lineTo(30, 60);
context1.lineTo(40, 50);
context1.lineTo(30, 60);
context1.lineTo(20, 50);
context1.lineTo(30, 60);
context1.moveTo(30, 0);
context1.strokeStyle = "#FFF"
context1.stroke();


let active = false;

iconMenu.onclick = function () {
    if (!active) {
        active = true;
        background.style.cssText = "display: block;"
        canvas.style.cssText = "display: block;"
    }
    else {
        active = false;
        background.style.cssText = "display: none;"
        canvas.style.cssText = "display: none;"
    }
}