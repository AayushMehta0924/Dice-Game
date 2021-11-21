// Left image
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png";

var randomSource1 = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomSource1);


// Right image
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomSource2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomSource2);





