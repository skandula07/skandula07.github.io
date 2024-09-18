// TABLE OF CONTENTS!!!!!!!!!!!!!!

var frame = document.getElementById("projectframe");

var bottles = document.getElementById("bottles");
var travel = document.getElementById("travel");
var airbnb = document.getElementById("airbnb");
var mbta = document.getElementById("mbta");

bottles.addEventListener("click", link1);
travel.addEventListener("click", link2);
airbnb.addEventListener("click", link3);
mbta.addEventListener("click", link4);
pencil.addEventListener("click", link5);


function link1() {
  frame.src = "ux/mrbottles/MrBottles.html";
}
function link2() {
  frame.src = "ux/Travel Note/TravelNote.html";
}
function link3() {
  frame.src = "ux/airbnb/AirbnbRedesignCaseStudy.html";
}
function link4() {
  frame.src = "ux/MBTRIVIA/MBTriviAweb.html";
}

