function setup(){
canvas=createCanvas(640,420);
canvas.center();
}
img="";
function preload(){
img=loadImage('dog_cat.jpg');
}
function draw(){
image(img,0,0,640,420);
fill('#FF0000');
text("Dog",150,50);
noFill();
stroke('#FF0000');
rect(50,60,520,350);
}