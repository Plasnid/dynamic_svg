/*
    Linda Cheng 100123456
    randomly generated the cx, cy, r and x and y
*/
/*
window.onload = function () {
    // reference the svg
    let myObj = document.getElementById('obj').contentDocument;
    // reference specific target
    let myDots = myObj.getElementsByClassName('dotStyle');
    // reference the background
    let myBkground = myObj.getElementById('bkground');
    // colorList - a list of color
    let colorList = ['orange', 'peachpuff', 'blue', 'pink',
    'violet', 'lime', 'peru', 'teal', 'red', 'green', 'brown', 'coral'];

    // animation

    gsap.to(myBkground, {
    //    fill: 'rgb(random(0,255), random(0,255), random(0,255))',
        fill: 'rgb(200, random(0,200), random(0,200))',
        ease: 'none',
        duration: 10,
        repeat: -1,
        yoyo: true
    });

    gsap.fromTo(myDots, {
        attr: {
            cx: 'random(10, 800)',
            r: 'random(2, 30)'
        }, 
        y: -300,     
        fill: gsap.utils.wrap(colorList)
    },
    {
        y: 820,
        duration: 'random(1, 3)',
        ease: 'none',
        stagger: {
            each: .2,
            repeat: -1,
            repeatRefresh: true
        }
    })

}
*/
// * dynamic svg circle drops

let svgDisplay = document.querySelector("svg");
let schemaData = "http://www.w3.org/2000/svg";
//let shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");
let shapesArray = [];
function randoVal(valMax){
    return Math.floor(Math.random()*valMax);
}
function buildCircles(xMax,yMax,radMax){
    let shape = document.createElementNS(schemaData, "circle");
    shape.setAttribute("cx", randoVal(xMax));
    shape.setAttribute("cy", randoVal(yMax));
    shape.setAttribute("r",  randoVal(radMax));
    shape.setAttribute("fill", `rgb(${randoVal(255)},${randoVal(255)},${randoVal(255)})`);
    svgDisplay.appendChild(shape);
    shapesArray.push(shape);
}
function populateScreen(numShapes){
    for(let i=0;i<numShapes;i++){
        buildCircles(400,400,30);
    }
}
populateScreen(120);
