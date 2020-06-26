
function update() {
    // check keys
    if (keys[38] || keys[32] || keys[87]) {
        // up arrow or space
        
        
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed * 2;
        }
    }
    if (keys[39] || keys[68]) {
        // right arrow
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
    if (keys[37] || keys[65]) {
        // left arrow
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }
    player.velX *= friction;
    player.velY += gravity;
    ctx.clearRect(0, 0, width, height);


    animationloop()


    ctx.fillStyle = "black";
    ctx.beginPath();
    player.grounded = false;
    for (var i = 0; i < boxes.length; i++) {
        if(backgrounCount < 1200) {
            ctx.fillStyle='black'
        } else {
            ctx.fillStyle='purple'
        }
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
        var dir = colCheck(player, boxes[i]);
        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {
            player.velY *= -1;
        }
    }
    if(player.grounded){
         player.velY = 0;
    }
    player.x += player.velX;
    player.y += player.velY;
    ctx.fill();
    //ctx.fillStyle = "transparent";
   // ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.drawImage(player.image, 0, 0, 160, 160, player.x, player.y, player.width, player.height) 
    //if the Y of the charector is greter then the y of the canvas alert "GAME OVER"
if(canvas.height<player.y){
    cancelAnimationFrame(animationId)
    alert("GAME OVER")
    location.reload()
}
    animationId = requestAnimationFrame(update);
}
