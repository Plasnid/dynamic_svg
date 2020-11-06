// * dynamic svg circle drops

let svgDisplay = document.querySelector("svg");
let schemaData = "http://www.w3.org/2000/svg";
//let shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
let shapesArray = [];
function randoVal(valMax){
    return Math.floor(Math.random()*valMax);
}

function randoValFloat(valMax){
    return Math.random()*valMax;
}

function dotMotion(shapeElement){
    gsap.fromTo(shapeElement, {cy:Math.random()*(60)*(-1)},{cy:600, duration:randoVal(30)+2, repeat:12});
}

function buildCircles(xMax,yMax,radMax){
    let shape = document.createElementNS(schemaData, "circle");
    shape.setAttribute("cx", randoVal(xMax));
    shape.setAttribute("cy", 0);
    shape.setAttribute("r",  randoVal(radMax));
    shape.setAttribute("fill", `rgb(${randoVal(255)},${randoVal(255)},${randoVal(255)})`);
    svgDisplay.appendChild(shape);
    dotMotion(shape);
    shapesArray.push(shape);
}
function populateScreen(numShapes){
    for(let i=0;i<numShapes;i++){
        buildCircles(400,400,30);
    }
}
populateScreen(300);
