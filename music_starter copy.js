
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(260, 205, 0)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);



//UTILITY VARIABLES
let BackBubbleX = 840;
let MainBubble_Y = 720;
let MainBubbleMap = map(420 + vocal * 5, 0, 100, 10, 100);
let BackgroundBubble = map(240 + vocal * 4, 0, 100, 25, 110);
let MiniBubblesBass = map(40-bass, 0, 100, 40, 90)
let MiniBubblesOther = map(70 +other, 0, 100, 20, 90)
//UTILITY VARIABLES

//COLOR VARIABLES
let Yellow = color(260, 205, 0)
let LightYellow = color(260, 230, 5)
let DarkYellow = color(255, 187, 0)
let Purple = color(194, 0, 224)
let LightPurple = color(255, 117, 230)
let DarkRed = color(209, 24, 0)
let FireOrange = color(255, 68, 0)
let LightOrange = color(255, 165, 0)
let DarkOrange = color(227, 117, 0)
let Cyan = color(0, 225, 255)
let Blue = color(0, 145, 255)
let Green = color(53, 227, 0)
let DarkGreen = color(59, 179, 0)
//COLOR VARIABLES

//BACKGROUND BUBBLES
fill(DarkYellow);
strokeWeight(25)
stroke(DarkYellow)
ellipse(360, 350, 170 + drum)
fill(Yellow);
strokeWeight(10)
stroke(DarkYellow)
ellipse(790, 40, 400 + drum)
fill(DarkYellow);
strokeWeight(25)
stroke(DarkYellow)
ellipse(790, 40, 170 + drum)
fill(Yellow);
strokeWeight(25)
stroke(DarkYellow)
ellipse(950, 750, 730 + drum)
fill(DarkYellow);
strokeWeight(0)
stroke(0)
ellipse(950, 750, 600 + drum)
fill(Yellow);
strokeWeight(9)
stroke(DarkYellow)
ellipse(0, 0, 230 + drum)
fill(Yellow);
strokeWeight(15)
stroke(DarkYellow)
ellipse(0, 0, 180 + drum)
fill(DarkYellow);
strokeWeight(0)
stroke(0)
ellipse(0, 0, 130 + drum)
//BACKGROUND BUBBLES

//BACKGROUND STREAK
stroke(LightYellow)
strokeWeight(80)
line(0,257,1280,720)
stroke(LightYellow)
strokeWeight(80)
line(0,335,1280,720)
//BACKGROUND STREAK

//STREAK COLORS
stroke(LightYellow)
strokeWeight(30)
line(0,375,1280,770)
stroke(Cyan)
strokeWeight(15)
line(0,369,1280,760)
stroke(LightOrange)
strokeWeight(8)
line(0,358,1280,755)
stroke(FireOrange)
strokeWeight(12)
line(0,347,1280,745)
stroke(Blue)
strokeWeight(20)
line(0,270,1300,720)
stroke(LightPurple)
strokeWeight(10)
line(0,255,1300,705)
stroke(Purple)
strokeWeight(10)
line(0,245,1300,695)
stroke(DarkGreen)
strokeWeight(10)
line(0,235,1300,685)
stroke(Green)
strokeWeight(13)
line(0,223,1300,676)
//STREAK COLORS

//CENTRE BACKGROUND BUBBLE
fill(Purple);
strokeWeight(14)
stroke(LightYellow)
ellipse(BackBubbleX, 310, BackgroundBubble);
fill(LightYellow);
strokeWeight(6)
stroke(LightPurple)
ellipse(BackBubbleX, 310, BackgroundBubble-50);
fill(DarkRed);
strokeWeight(10)
stroke(FireOrange)
ellipse(BackBubbleX, 310, BackgroundBubble-100);
fill(0);
strokeWeight(10)
stroke(Cyan)
ellipse(BackBubbleX, 310, BackgroundBubble-140);
//CENTRE BACKGROUND BUBBLE

//RAINBOW STREAK BACKGROUND
stroke(LightYellow)
strokeWeight(100)
line(0,640, 1400, -300)
stroke(LightYellow)
strokeWeight(100)
line(0,640, 1200, -30)
stroke(LightYellow)
strokeWeight(80)
line(0, 740, 1280, 0)
stroke(LightYellow)
strokeWeight(80)
line(-140, 720, 1280, -260)
//RAINBOW STREAK BACKGROUND

//RAINBOW STREAK COLOURS
stroke(DarkGreen)
strokeWeight(25)
line(90, 720, 1300, 20)
stroke(Green)
strokeWeight(12)
line(80, 720, 1290, 20)
stroke(LightOrange)
strokeWeight(25)
line(70, 710, 1270, 10)
stroke(DarkOrange)
strokeWeight(25)
line(60, 700, 1270, -10)
stroke(Cyan)
strokeWeight(19)
line(30, 650, 1170, -80)
stroke(Blue)
strokeWeight(10)
line(30, 640, 1130, -72)
stroke(DarkRed)
strokeWeight(10)
line(30, 630, 1100, -65)
stroke(FireOrange)
strokeWeight(18)
line(30, 620, 1070, -60)
stroke(Purple)
strokeWeight(23)
line(0, 620, 1040, -65)
stroke(LightPurple)
strokeWeight(12)
line(0, 615, 1040, -78)
//RAINBOW STREAK COLORS

//BOTTOM LEFT BUBBLE
fill(LightYellow);
strokeWeight(0)
stroke(0)
ellipse(0, MainBubble_Y, MainBubbleMap)
fill(Cyan);
strokeWeight(5.4)
stroke(LightOrange)
ellipse(0, MainBubble_Y, MainBubbleMap-60)
fill(Purple);
strokeWeight(10)
stroke(FireOrange)
ellipse(0, MainBubble_Y, MainBubbleMap-105)
fill(0);
strokeWeight(25)
stroke(LightYellow)
ellipse(0, MainBubble_Y, MainBubbleMap-160);
fill(0);
strokeWeight(10)
stroke(Green)
ellipse(0, MainBubble_Y, MainBubbleMap-170);
//BOTTOM LEFT BUBBLE

//SMALL BUBBLES
fill(0)
strokeWeight(6)
stroke(LightOrange)
ellipse(450,380,MiniBubblesOther)
fill(0)
strokeWeight(3)
stroke(LightOrange)
ellipse(540,270,MiniBubblesOther -50)
fill(Yellow)
strokeWeight(9)
stroke(Blue)
ellipse(400,120,70 +bass)
fill(0)
strokeWeight(6)
stroke(0)
ellipse(400,120,10 +bass)
fill(Yellow)
strokeWeight(5)
stroke(Blue)
ellipse(290,45,15 +bass)
fill(Yellow)
strokeWeight(14)
stroke(Green)
ellipse(1150,108,50 +bass)
fill(Yellow)
strokeWeight(2.5)
stroke(Green)
ellipse(1150,108,5 +bass)
fill(Yellow)
strokeWeight(5)
stroke(LightPurple)
ellipse(140,210,MiniBubblesBass)
fill(Yellow)
strokeWeight(7)
stroke(LightPurple)
ellipse(980,620,MiniBubblesBass +110)
fill(DarkYellow)
strokeWeight(12)
stroke(Purple)
ellipse(980,620,MiniBubblesBass +90)
//SMALL BUBBLES
}

