let c = 0
let cscale = 0.314
function setup() {
  createCanvas(400, 400);
}

function draw() {
  c += cscale
  
  background(220);
  drawframe ()
  sayMousePosition ()
  createShape1()
  createShape2 ()
  createShape3 ()
  createShape4 ()
  createShape5 ()
  createShape6 ()
  createShape7 ()
  createShape8 ()
}
function drawframe () {
  fill (240,230,230)
  rect (50,50,300,300)
  rect (63,63,275,275)
  line (50,50,63,63)
  line (50,350,63,63+275)
  line (350,50,63+275,63)
  line (350,350,63+275,63+275)
}
function initShape () {
  noFill ()
  beginShape ()
}
function finalizeShape () {
  endShape (CLOSE)
    fill(0,0,0)
}

function getRandom(){
  let n = sin(c)
  console.log(n)
  return random(-10 * n, 10 * n)
}

function createShape1 (){
  fill(0,0,0) 
  initShape ()
  vertex (160 + getRandom(),338 + getRandom())
  vertex(63 + getRandom(),220 + getRandom())
  vertex(63 + getRandom(),180 + getRandom())
  vertex (160 + getRandom(),63 + getRandom())
  finalizeShape ()
}
function createShape2 (){
  fill (184, 55, 39) 
  initShape ()
  vertex (160 + getRandom(),220 + getRandom())
  vertex (280 + getRandom(),338 + getRandom())
  vertex (338 + getRandom(),338 + getRandom())
  vertex (338 + getRandom(),63 + getRandom())
  finalizeShape ()
}
function createShape3 (){
  fill (148, 143, 142)
  initShape ()
  vertex (338 + getRandom(),63 + getRandom())
  vertex (200 + getRandom(),63 + getRandom())
  vertex (280 + getRandom(),114 + getRandom())
  finalizeShape ()
}
function createShape4 (){
  fill (240,230,230)
  initShape ()
  vertex (200 + getRandom(),63 + getRandom())
  vertex (160 + getRandom(),63 + getRandom())
  vertex (160 + getRandom(),220 + getRandom())
  vertex (280 + getRandom(),114 + getRandom())
  finalizeShape ()
}
function createShape5 () {
  fill (199, 192, 191)
  initShape ()
  vertex (160 + getRandom(),220 + getRandom())
  vertex (160 + getRandom(),338 + getRandom())
  vertex (280 + getRandom(),338 + getRandom())
  finalizeShape ()
}
function createShape6 (){
  fill (199, 192, 191)
  initShape ()
  vertex (63 + getRandom(),63 + getRandom())
  vertex (160 + getRandom(),63 + getRandom())
  vertex (63 + getRandom(),180 + getRandom())
  finalizeShape ()
}
function createShape7 (){
  fill (240,230,230)
  initShape ()
  vertex (63 + getRandom(),338 + getRandom())
  vertex (160 + getRandom(),338 + getRandom())
  vertex (116 + getRandom(),285 + getRandom())
  finalizeShape ()
}
function createShape8 (){
  fill (222, 192, 71)
  initShape ()
  vertex (63 + getRandom(),338 + getRandom())
  vertex (116 + getRandom(),285 + getRandom())
  vertex (63 + getRandom(),220 + getRandom())
  finalizeShape ()
}
function sayMousePosition () {
  console.log ("Mouse Position: ")
  console.log (mouseX)
  console.log (mouseY)
}
