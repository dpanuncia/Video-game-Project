//canvas.width = window.innerWidth
let squareX = 20; // creating a var called squareX and gving it a value of 20. We.re going to use this to move the box left or right
let animateid = 0; // creating a var called animateid and giving it a value of 0. Using to keep track of the ID of the animationloop
let squareY = 350; // creating a var called squareY and giving it the value of 350. Using it to declare the y quardnent 
let backgroundx = 0; // creating 






function animationloop() {
 
  backgroundx--;
 

  for (let i = 0; i < 5; i++) {
    ctx.drawImage(background, backgroundx+i*canvas.width, 0, canvas.width, canvas.height);//draws background image 5 times
  }
  boxes.forEach(box => box.x-=3)//it moves all the boxes to the left
}
function createBoxes(){
    for (let i = 0; i < 5; i++) {// total number of platforms
        let section = canvas.width*i
        for (let j = 0; j < 2; j++) {

            let box = {
                x: section+(section/5)*j, //the number of platforms 
                y: Math.random()*canvas.height,
                width: 200,
                height: 50

            }
            boxes.push(box)//adds a new platform(box)
        }

    }
}
var images = "https://opengameart.org/sites/default/files/background1-720.png";

// boxes.push({
//     x: 0,
//     y: 0,
//     width: 10,
//     height: height
// });

let background = new Image(); //adding an image to the Canvas
background.src =
  "https://opengameart.org/sites/default/files/background1-720.png";

createBoxes()