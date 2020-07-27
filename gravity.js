// (function () {
//     var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
//     window.requestAnimationFrame = requestAnimationFrame;
// })();
var canvas = document.getElementById("game"),
    ctx = canvas.getContext("2d"),
    width = window.innerWidth/1.5,
    height = window.innerHeight/1.5,
    player = {
        x: width / 2,
        y: height - 15,
        width: 50,
        height: 50,
        speed: 7,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false,
        image: new Image()
    },
    keys = [],
    friction = 0.8,
    animationId = 0,
    gravity = 0.3;
    player.image.src = "sk.png"
var boxes = [];
// dimensions
// boxes.push({
//     x: 0,
//     y: 0,
//     width: 10,
//     height: height
// });
 boxes.push({
     x: 0,
    y: height - 2,
    width: width,
   height: 50,
});
// boxes.push({
//     x: width - 10,
//     y: 0,
//     width: 50,
//     height: height
// });
// boxes.push({
//     x: 120,
//     y: 10,
//     width: 80,
//     height: 80
// });
// boxes.push({
//     x: 170,
//     y: 50,
//     width: 80,
//     height: 80
// });
// boxes.push({
//     x: 220,
//     y: 100,
//     width: 80,
//     height: 80
// });
// boxes.push({
//     x: 270,
//     y: 150,
//     width: 40,
//     height: 40
// });
canvas.width = width;
canvas.height = height;

function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;
    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}


let songPlaying = false
const audio = new Audio('lofijump.mp3');

document.body.addEventListener("keydown", function (e) {

    if (!songPlaying){// Will play only once. !false is equal to true.  
        songPlaying = true;
      
        audio.crossOrigin =  'anonymous'
var playPromise = audio.play();
// In browsers that don't yet support this functionality,
// playPromise won't be defined.
if (playPromise !== undefined) {
  playPromise.then(function() {
     console.log('success')
    // Automatic playback started!
  }).catch(function(error) {
     console.log(error)
    // Automatic playback failed.
    // Show a UI element to let the user manually start playback.
  });
}
    }

    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
window.addEventListener("load", function () {
    update();
   
});





