const canvas = document.querySelector('#game'); // We create a canvas variable and set it the same as the canvas element (javascript treats html elements as objects)
const ctx = canvas.getContext('2d'); // getContext is telling the browser that the canvas that we are gonna draw on is going to be a 2d canvas. ctx is equal to a 2d context of the canvas, after that we could other methods like fillrect or drawimage
let squareX = 20 // creating a var called squareX and gving it a value of 20. We.re going to use this to move the box left or right
let animateid = 0 // creating a var called animateid and giving it a value of 0. Using to keep track of the ID of the animationloop
function jump () {
    player.speed.Y = -2;
}
function animationloop(){ //declared a function and called it animationloop
    animateid = window.requestAnimationFrame(animationloop)//starting animation loop with requestAniamtionFrame, request animationframe returns ID we are setting that id to the animate ID
    ctx.clearRect(0,0, canvas.width, canvas.height) // erasing what we draw on the previous loop. 
    
    console.log(animateid)
    ctx.fillRect(squareX++, 200, 100, 50); // drawing a black square and moving one step to the right after every loop.
    // if (animateid >= 200){
    //     window.cancelAnimationFrame(animateid)
    // }


animationloop()//calling the function so the code inside of the function runs. 
}
document.addEventListener('keydown', onkeydown, false); //adding an event listner to listen for any keys that are pressed
