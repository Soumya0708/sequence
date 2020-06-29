var canvas
var gamestate=0

function setup(){
    canvas=createCanvas(400,400)
    if( gamestate===0){
      story=new Story()
      story.display();
   }
 }
    function draw(){
     
     }