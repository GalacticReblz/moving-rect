var box1
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,150,30,29,3,1.5);
}

function draw() 
{
  background(220);
  box1.show()
  box1.moveUp()
}

