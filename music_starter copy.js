
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(10)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
let Y_location = 260;


fill(60, 60, 800);
ellipse(Y_location, 300, 40 + drum * 4);

fill(10, 10, 10);
ellipse(Y_location, 300, 10 + vocal * 4);


fill(250, 80, 0);
rect(Y_location, 50, 120 + bass * 4.5, 30, 8);

for(let i = 0; i < 5; i++){
let circleheight = 110 * i -bass;
fill(50, 50, 50)
ellipse(100, 150 + circleheight, 70, 70)


}

}