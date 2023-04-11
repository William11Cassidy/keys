color = "blue";
width_of_line = 2;
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
width=screen.width
newwidth=width-70
newhight=screen.height-300
if(width<992){
}
var last_position_of_x, last_position_of_y;

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){

}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{



     current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
     current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
}