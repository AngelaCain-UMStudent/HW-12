
//---------------------------Angela Cain
//---------------------------Nov 2022

//---------------------------User X and Y
var userX = 100;
var userY = 100;

//---------------------------Press Key for Movement
var d = 87; 
var s = 83;
var a = 65;


//---------------------------Shape X and Y
var dudeX = 30;
var dudeY = 50;
var dudeXspeed;
var dudeYspeed;

//---------------------------mouse click shape

var mausX;
var mausY;

function createuser(x,y)
{
userX = x;
userY = y;
console.log(userX);
}


function setup()
{
    createCanvas(700, 800);
    //----------------------Random Speed
    dudeXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);
    dudeYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);
    createuser(200, 350)
}


function drawuser()
{
fill (4,49,123);
circle(userX, userY, 25);
}


function draw()
{
    //--------------------------Border/Canvas Code
    background(252, 186, 3);
    stroke(0);
    fill(252, 119, 3);

    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0, height-10,width, 10);
    rect(width-10,0,10,height-50);
}
function exitMess(){
    // exit message
    fill(86, 3, 252)
    textSize(22);
    text("WIN", width-50,height-50)
}
function keyHandlers()
    //------------------------------Key Handlers
    if(keyIsDown(d))
    {
        userY -= 10;   
    }
    if(keyIsDown(s))
    {
        userY += 10;   
    }
    if(keyIsDown(a))
    {
        userX -= 10;   
    }
    //-------------------------------opposition
function opposition(){
    fill(227, 3, 252);
   
    circle(dudeX, dudeY, 66);
    //------------------------------opposition speed
    dudeXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
    dudeYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);

   //-------------------------------opposition movement
   dudeX += dudeXspeed;
   dudeY += dudeYspeed;
}
     

function isWon(){
    //------------------------------Check if game was won
    if(userX > width && userY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Winner!!!", width/2-50, height/2-50);
    }

}
 


function mouseClicked()
{
    mausX = mouseX
    mausY = mouseY
}