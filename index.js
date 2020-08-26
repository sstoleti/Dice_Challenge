 var randomnumber1 = Math.floor(Math.random() * 6) + 1; // returns a random integer from 1 to 10
 var randomdiceImage = "dice" + randomnumber1 + ".png";
 var randomdiceImagesource = "images/" + randomdiceImage;
 var image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src", randomdiceImagesource)

 var randomnumber2 = Math.floor(Math.random() * 6) + 1;
 var randomdiceImage = "dice" + randomnumber2 + ".png";
 var randomdiceImagesource = "images/" + randomdiceImage;
 document.querySelectorAll("img")[1].setAttribute("src", randomdiceImagesource)


 if (randomnumber1 > randomnumber2) {
     document.querySelector("h1").innerHTML = "Player 1 Wins🚩"
 } else if (randomnumber1 === randomnumber2) {
     document.querySelector("h1").innerHTML = "Draw!"
 } else {
     document.querySelector("h1").innerHTML = "🚩Player 2 Wins"
 }