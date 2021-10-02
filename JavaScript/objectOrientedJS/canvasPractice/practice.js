document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext('2d');

    // rectangle
    // ctx.rect(10,20, 500,500);
    // ctx.fill();

    // circle
    ctx.beginPath();
    ctx.arc(100,75, 50, 0, 360)
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 5;
    ctx.stroke()

    // circle filled
    ctx.fillStyle = "pink";
    ctx.fill()
});
