
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(260, 205, 0)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
let MainBubble_Y = 640;


stroke(60, 90, 250)
strokeWeight(120)
line(10, 640, 480, 0)

stroke(60, 90, 250)
strokeWeight(120)
line(20, 640, 480, 130)

//Bottom Right Bubble
fill(260, 230, 5);
strokeWeight(0)
stroke(260, 165, 0)
ellipse(0, MainBubble_Y, other * 7)

fill(0, 225, 255);
strokeWeight(5.4)
stroke(255, 165, 0)
ellipse(0, MainBubble_Y, other * 6.6)

fill(150, 0, 170);
strokeWeight(10)
stroke(280, 20, 0)
ellipse(0, MainBubble_Y, other * 6)

fill(0);
strokeWeight(25)
stroke(280, 240, 0)
ellipse(0, MainBubble_Y, other * 5);

fill(0);
strokeWeight(10)
stroke(90, 188, 5)
ellipse(0, MainBubble_Y, other * 4.8);

//rect(0, 50, 120 + other * 4.5, 0, 8);


console.log(mouseX, mouseY);





























//fill(60, 60, 800);
//ellipse(Y_location, 300, 40 + drum * 4);

//fill(10, 10, 10);
//ellipse(Y_location, 300, 10 + vocal * 4);


//fill(250, 80, 0);
//rect(Y_location, 50, 120 + bass * 4.5, 30, 8);

//for(let i = 0; i < 5; i++){
//let circleheight = 110 * i -bass;
//fill(50, 50, 50)
//ellipse(100, 150 + circleheight, 70, 70)


}
