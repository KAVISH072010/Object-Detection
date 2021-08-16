function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Object Detecting...";
    }
    img="";
    status="";
    
    function preload(){
    img=loadImage('images (3).jfif');
    }
    function draw(){
    image(img,0,0,640,420);
    fill('#FF0000');
    text("Bottle",80,50);
    noFill();
    stroke('#FF0000');
    rect(45,30,100,370);
    

    fill('#FF0000');
    text("Bottle",190,50);
    noFill();
    stroke('#FF0000');
    rect(160,30,100,370);

    fill('#FF0000');
    text("Bottle",300,50);
    noFill();
    stroke('#FF0000');
    rect(280,30,100,370);

    fill('#FF0000');
    text("Bottle",410,50);
    noFill();
    stroke('#FF0000');
    rect(390,30,100,370);

    fill('#FF0000');
    text("Bottle",530,50);
    noFill();
    stroke('#FF0000');
    rect(500,30,100,370);
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