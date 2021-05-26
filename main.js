canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=50;
rover_y=10;
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBg;
    background_imgtag.src=background_image;
    rover_imgtag=new Image();
    rover_imgtag.onload=uploadRover;
    rover_imgtag.src=rover_image;
}
function uploadBg(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",key_down);
function key_down(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        Up()
        console.log("Up");
    }
    if(keyPressed=="40"){
        Down()
        console.log("Down");
    } 
    if(keyPressed=="37"){
        Left()
        console.log("Left");
    }  
    if(keyPressed=="39"){
        Right()
        console.log("Right");
    }
}