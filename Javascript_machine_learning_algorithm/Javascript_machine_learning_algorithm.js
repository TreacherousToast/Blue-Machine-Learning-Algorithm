var highestBlueNumber = 0;
var guess;
var currNum;
var runTimes = 0;

function setup() {
  createCanvas(400, 100);
  frameRate(1);
}

function draw() {
  background(127);
  if (runTimes == 0)
  {
    textSize(12);
    fill(255,255,255);
    text(" This is a machine learning algorithm that makes the bluest colour!", 1,20);
    text("         (That is the way 'colour' is supposed to be spelled. :D )", 1,34);
  }
  else
  {
    while(true)
    {
       guess = int(random(256));
       if (guess > highestBlueNumber)
       {
         break;
       }
    }
    fill(0, 0, guess);
    rect(172, 0, 55, 55);  
    fill(255);
    textSize(12);
    text("  Number of data generations: "+runTimes + ". Current colour value: (0, 0, " + guess +")", 0, 70);
    currNum = guess;
    if (currNum > highestBlueNumber)
    {
      highestBlueNumber = currNum;
    }
  }
    runTimes++;
}