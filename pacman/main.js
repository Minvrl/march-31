let circle = document.getElementById("circle");
let box = document.getElementById("box");
let circleSize = 50;


document.addEventListener("keydown", function(e) {
    let currentLeft = parseInt(circle.style.left) || 0;
    let currentTop = parseInt(circle.style.top) || 0;

    switch (e.key) {

        case "ArrowLeft":
            if (currentLeft > 0) {
                circle.style.left = (currentLeft - 10) + "px";
            } else {
                circle.style.left = (box.offsetWidth - circleSize) + "px";
            }
            break;


        case "ArrowRight":
            if (currentLeft < (box.offsetWidth - circleSize)) {
                circle.style.left = (currentLeft + 10) + "px";
            } else {
                circle.style.left = "0px";
            }
            break;

        case "ArrowUp":
            if (currentTop > 0) {
                circle.style.top = (currentTop - 10) + "px";
            } else {
                circle.style.top = (box.offsetHeight - circleSize) + "px";
            }
            break;


        case "ArrowDown":
            if (currentTop < (box.offsetHeight - circleSize)) {
                circle.style.top = (currentTop + 10) + "px";
            } else {
                circle.style.top = "0px";
            }
            break;


        case "Enter":
            createDot(currentLeft, currentTop);
            break;
    }
});



function createDot(left, top) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.left = left + "px";
    dot.style.top = top + "px";
    box.appendChild(dot);
}
