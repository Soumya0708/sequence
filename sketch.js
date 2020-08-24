var canvas
var gamestate=0
var form 

function setup(){
    canvas=createCanvas(displayWidth,displayHeight)
    story=new Story()
   form=new Form()
 }
    function draw(){
      if( gamestate===0){
        story.display();
     }
     else if(gamestate===1){
      form.display 
     }
     }