const canvas = document.getElementById("jsCanvas");

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
}
function onMouseDown(event) {
    console.log(event);
}
if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
}
