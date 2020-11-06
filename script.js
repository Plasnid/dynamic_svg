// * dynamic svg circle drops
let svgDisplay = document.querySelector("svg");
let schemaData = "http://www.w3.org/2000/svg";
let shapesArray = [];
function randoVal(valMax){
    return Math.floor(Math.random()*valMax);
}
// * generates random values with floats, used for velocity
function randoValFloat(valMax){
    return Math.random()*valMax;
}

// * initializes motion on an individual element
function dotMotion(shapeElement){
    gsap.fromTo(shapeElement, {cy:Math.random()*(60)*(-1)},{cy:600, duration:randoVal(30)+2, repeat:12});
}

// * generate circles with random x, colour, radius
function buildCircles(xMax,radMax){
    let shape = document.createElementNS(schemaData, "circle");
    shape.setAttribute("cx", randoVal(xMax));
    shape.setAttribute("cy", 0);
    shape.setAttribute("r",  randoVal(radMax));
    shape.setAttribute("fill", `rgb(${randoVal(255)},${randoVal(255)},${randoVal(255)})`);
    svgDisplay.appendChild(shape);
    dotMotion(shape);
    shapesArray.push(shape);
}
// *select how far across the screen the shapes are generated and their max radius
function populateScreen(numShapes){
    for(let i=0;i<numShapes;i++){
        buildCircles(400,30);
    }
}
populateScreen(300);
