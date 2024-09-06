var y=Math.random();
if(Math.floor(y*6)<1){
document.querySelector(".img1").setAttribute("src","images/dice1.png");
}
else if(Math.floor(y*6)<2){
document.querySelector(".img1").setAttribute("src","images/dice2.png");
}
else if(Math.floor(y*6)<3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
}
else if(Math.floor(y*6)<4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
}
else if(Math.floor(y*6)<5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
}
else {
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}


var x=Math.random();
if(Math.floor(x*6)<1){
document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(Math.floor(x*6)<2){
document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(Math.floor(x*6)<3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
}
else if(Math.floor(x*6)<4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
}
else if(Math.floor(x*6)<5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
}
else {
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}

if(Math.floor(x*6)>Math.floor(y*6)){
document.querySelector("h1").innerHTML="Player 2 wins!";
}
else if(Math.floor(y*6)>Math.floor(x*6)){
document.querySelector("h1").innerHTML="Player 1 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!!";
}