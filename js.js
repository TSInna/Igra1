var canvas = document.getElementById("myCanvas");//ссылка на элемент
var ctx = canvas.getContext("2d");//контекст 2d
const random = (max, min = 0) => (Math.random() * (max - min + 1) + min) | 0;
var color="#CD5C5C";
const colors=["#CD5C5C","#CDB38B","#9FB6CD","#EEDC82"];
var x=canvas.width/2;
var y = canvas.height-30;
var dx=2;
var dy=-2;
var ballRadius = 10;
var paddleWidth=100;
var paddleHeight=15;
var paddleX=(canvas.width-paddleWidth)/2;
var paddleXA=(canvas.width-paddleWidth)/2;
var rigth=false;
var left=false;
var livesA=3;
var livesB=3;


setInterval(draw, 10);


function Ball(color){
ctx.beginPath();
ctx.arc(x,y,ballRadius,0,Math.PI*2);
ctx.fillStyle=color;
ctx.fill();
ctx.closePath();}

function PaddleA(){
    ctx.beginPath();
    ctx.rect(paddleXA,0,paddleWidth,paddleHeight);
    ctx.fiilStyle="#CDB38B";
    ctx.fill();
    ctx.closePath();
}

function Paddle(){
	ctx.beginPath();
	ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
	ctx.fiilStyle="#CDB38B";
	ctx.fill();
	ctx.closePath();
}
function TextA(){
 ctx.font = "16px Arial";
    ctx.fillStyle = "#DEB887";
    ctx.fillText("lives: "+livesA, canvas.width-60, 20);
}
function TextB(){
     ctx.font = "16px Arial";
    ctx.fillStyle = "#DEB887";
    ctx.fillText("lives: "+livesB, 8,canvas.height-10);
}
function draw() {	
ctx.clearRect(0, 0, canvas.width, canvas.height);
Ball(color);
TextA();
TextB();
PaddleA();
Paddle();

x+=dx;
y+=dy;// body...

if(livesA&&livesB){
    if(y+dy<=0){dy=-dy;livesA-=1;}
if(y+dy>=canvas.height){dy=-dy;livesB-=1;}
}
else{
    alert(" Oбщий счет:  "+livesA+":"+livesB);
    document.location.reload();
}

  


if(x+dx<=ballRadius||x+dx>canvas.width-ballRadius){dx=-dx;color=colors[random(colors.length-1)];}

if(rigth&&paddleX>canvas.width-paddleWidth){paddleX-=10};
if(rigth&&paddleXA>canvas.width-paddleWidth){paddleXA-=10};
if(left&&paddleX<0){paddleX+=10};
if(left&&paddleXA<0){paddleXA+=10};


 if( y+dy>canvas.height-ballRadius ){
if(x>paddleX && x<paddleX+paddleWidth){dy=-dy;color=colors[random(colors.length-1)];}}
if( y+dy<0+ballRadius ){
if(x>paddleXA && x<paddleXA+paddleWidth){dy=-dy;color=colors[random(colors.length-1)];}
}}


document.addEventListener('keydown', (event)=>{
if(event.keyCode==39){rigth=true;paddleX+=10;}
if(event.keyCode==68){rigth=true;paddleXA+=10;}
if(event.keyCode==37){left=true;paddleX-=10;}
if(event.keyCode==65){left=true;paddleXA-=10;}
})
document.addEventListener('keyup', (event)=>{
if(event.keyCode==39){rigth=false;}
if(event.keyCode==37){left=false;}})