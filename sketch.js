
function setup() {
  createCanvas(900, 900);
  img = loadImage('image.jpg'); //  let img = createImage(100, 100);
//pic = createImg('https://images.freeimages.com/images/large-previews/a1a/rose-1452862.jpg');
}

function draw() {
  background('#f1f1f1');
  image(img, 0,0,width,height); 
}