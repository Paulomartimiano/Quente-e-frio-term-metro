let x;
let y;

function setup() {
  createCanvas(400, 420);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}


function draw() {
  background(220);
  x = x + random(-3, 3);
  y = y + random(-3, 3);
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);
  let distancia;
  //circle(x, y, 10);
  
  distancia = dist(mouseX, mouseY, x, y);
  menos = map(distancia, 0, 560, 0, 380)
  porcento = map(distancia, 0, 560, 1, 0)
  fill('#03A9F4')
  rect(10,400,390-menos, 25);
  
  
  if(distancia < 5){
    background('rgb(48,48,198)');
    textSize(60);
    fill('red');
    stroke('white');
    strokeWeight(7);
    textAlign(CENTER, CENTER);
    text('Encontrei!',200 , 200);
    noLoop();
  }
}