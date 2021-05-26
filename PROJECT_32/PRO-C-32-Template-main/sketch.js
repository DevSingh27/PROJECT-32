const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;
var hour;

var bg ="sunrise1.png" ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(bgImg){
        background(bgImg)
    }
    Engine.update(engine);
    
    textSize(20);
    fill("yellow")
    text("Time : "+hour+" hrs",100,100);
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    
    if(hour>=5 && hour<=7){
       bg = "sunrise1.png";
    } else if(hour>=04 && hour<=06){
       bg = "sunrise2.png";
    } else if(hour>=06 && hour<=07){
        bg = "sunrise3.png";
    } else if(hour>=08 && hour<=09){
        bg = "sunrise4.png";
    } else if(hour>=10 && hour<=11){
        bg = "sunrise5.png";
    } else if(hour>=12 && hour<=13){
        bg = "sunrise6.png";
    } else if(hour>=14 && hour<=15){
        bg = "sunset7.png";
    } else if(hour>=16 && hour<=17){
        bg = "sunset8.png";
    } else if(hour>=18 && hour<=19){
        bg = "sunset10.png";
    } else if(hour>=20 && hour<=23){
        bg = "sunset11.png";
    } else if(hour>=00 && hour<=03){
        bg = "sunset12.png";
     }

    bgImg = loadImage(bg);
}
