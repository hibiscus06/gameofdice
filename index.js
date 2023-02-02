var r1 = Math.floor(Math.random()*6+1);
var r2 = Math.floor(Math.random()*6)+1;

var image1="images/dice" + r1 + ".png";
var image2="images/dice" + r2 + ".png";

document.querySelector(".dice .img1").setAttribute("src",image1);

document.querySelector(".dice .img2").setAttribute("src",image2);

// var image = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
 
// // FIRST DICE
 
// var randomNumber1 = Math.floor(Math.random() * 6);
 
// var firstImage = image[randomNumber1];
 
// document.querySelector(".img1").setAttribute("src", firstImage);
 
 
// // SECOND DICE
 
// var randomNumber2 = Math.floor(Math.random() * 6);
 
// var secondImage = image[randomNumber2];
 
// document.querySelector(".img2").setAttribute("src", secondImage);

if(r1>r2)
{
    document.querySelector(".container h1").innerHTML="Player 1 wins! 🚩"
}
else if(r1<r2)
{
    document.querySelector(".container h1").innerHTML="🚩 Player 2 wins!" 
}
else
{
    document.querySelector(".container h1").innerHTML="Draw!" 
}