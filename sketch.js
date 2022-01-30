var scene = 0;
document.getElementById("mydiv").style.visibility ="hidden";
document.getElementById("mydiv2").style.visibility ="hidden";
function setup() {
  createCanvas(400, 400);
}

function draw() {
  homepage();
     if (scene === 1) {
    topten();
      
   }
  else if(scene === 2){
    hackathon();
  }
  
}

 function mouseClicked(){
   if(scene===0 && 
    mouseX < 200 &&
    mouseX > 150 &&
    mouseY < 350 && 
    mouseY > 300 )
   {
     scene++;
   }

   else if (scene===1 && 
    mouseX < 380 &&
    mouseX > 330 &&
    mouseY < 390 && 
    mouseY > 360 )
     {
       scene=2;
     }

 
