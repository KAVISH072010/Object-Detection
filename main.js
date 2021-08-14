function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status : Object Detecting...";
}
img="";
status="";

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

fill('#FF0000');
text("Cat",370,50);
noFill();
stroke('#FF0000');
rect(300,70,250,330);
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
console.log(error);
    }else{
        console.log(results);
    }
}