const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "##2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}
function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
}
function onMouseDown(event) {
    painting = true;
}
if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}
