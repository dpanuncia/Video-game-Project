//canvas.width = window.innerWidth
let squareX = 20; // creating a var called squareX and gving it a value of 20. We.re going to use this to move the box left or right
let animateid = 0; // creating a var called animateid and giving it a value of 0. Using to keep track of the ID of the animationloop
let squareY = 350; // creating a var called squareY and giving it the value of 350. Using it to declare the y quardnent 
let backgroundx = 0; // creating 
let backgrounCount = 0;





function animationloop() {
 
  backgroundx--;
 
  if(backgrounCount < 1200) {
    for (let i = 0; i < 4; i++) {
      ctx.drawImage(background, backgroundx+i*canvas.width, 0, canvas.width, canvas.height);//draws background image 5 times
    }
    backgrounCount++;
  } else {  if(backgrounCount < 3000)
    for (let i = 0; i < 5; i++) {
      ctx.drawImage(background2, backgroundx+i*canvas.width, 0, canvas.width, canvas.height);//draws background image 5 times
       
}
    backgrounCount++;
  }

  boxes.forEach((box, x) => {
    box.x-=3
    if(  x % 2 === 0  ){
      box.y += .2
    }else{
      box.y-=.2
    }
    

  })//it moves all the boxes to the left

}




let i = 0;
let interval = setInterval(createBoxes, 500);

function createBoxes(){
    i++;
    if(i === 500 ) {
      clearInterval(interval)
    }
    let nOrP = Math.round(Math.random());
    let height = Math.random()*canvas.height/2;
    // prev box in the boxes array
    let prevBox = boxes[boxes.length-1];

  // height of the previous box from boxes array
    let heightOfPrevBox = boxes[boxes.length-1].y;
    // height genaration
    if(nOrP === 1) {
      if(height+heightOfPrevBox > canvas.height - 50) {
        height = heightOfPrevBox - height;
      } else {
        height += heightOfPrevBox
      }
    } else {
      if(heightOfPrevBox - height < 50 + player.height) {
        height += heightOfPrevBox;
      } else {
        height = heightOfPrevBox - height;
      }
    }

    let box = {
        // set the beginining of the platform in relation to the the end of the prev platform 
        x: prevBox.x + prevBox.width + 60, //the number of platforms 
        y: height,
        width: 200,
        height: 50
    }
    boxes.push(box)//adds a new platform(box)


    // for (let i = 0; i < 5; i++) {// total number of platforms
    //     let section = canvas.width*i
    //     for (let j = 0; j < 6; j++) {
    //         let nOrP = Math.round(Math.random());
    //         let height = Math.random()*canvas.height/2;
    //         let heightOfPrevBox = boxes[boxes.length-1].y;

    //         if(nOrP === 1) {
    //           if(height+heightOfPrevBox > canvas.height - 50) {
    //             height = heightOfPrevBox - height;
    //           } else {
    //             height += heightOfPrevBox
    //           }
    //         } else {
    //           if(heightOfPrevBox - height < 50 + player.height) {
    //             height += heightOfPrevBox;
    //           } else {
    //             height = heightOfPrevBox - height;
    //           }
    //         }

    //         let box = {
    //             x: section+(section/5)*j, //the number of platforms 
    //             y: height,
    //             width: 200,
    //             height: 50

    //         }
    //         boxes.push(box)//adds a new platform(box)
    //     }

    // }
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
//let background2 = new Image(); // adding second Image to Canvas
let background2 = new Image();
background2.src =
 "./city.jpg"
