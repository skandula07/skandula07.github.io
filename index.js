// Get the button
let topbtn = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Tooltip captions
var tooltipSpan = document.getElementsByClassName("caption");
window.onmousemove = function(e) {
  var x = e.clientX,
    y = e.clientY;
  for (var i = 0; i < tooltipSpan.length; i++) {
    tooltipSpan[i].style.top = (y - 60) + 'px';
    tooltipSpan[i].style.left = (x + 10) + 'px';
  }

};



 //Make the DIV element draggagle:
 dragElement(document.getElementById("pageicon"));
 dragElement(document.getElementById("headshot"));

 function dragElement(elmnt) {
     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
     if (document.getElementById(elmnt.id + "-header")) {
         /* if present, the header is where you move the DIV from:*/
         document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
     } else {
         /* otherwise, move the DIV from anywhere inside the DIV:*/
         elmnt.onmousedown = dragMouseDown;
     }
     function dragMouseDown(e) {
         e = e || window.event;
         e.preventDefault();
         // get the mouse cursor position at startup:
         pos3 = e.clientX;
         pos4 = e.clientY;
         document.onmouseup = closeDragElement;
         // call a function whenever the cursor moves:
         document.onmousemove = elementDrag;
     }
     function elementDrag(e) {
         e = e || window.event;
         e.preventDefault();
         // calculate the new cursor position:
         pos1 = pos3 - e.clientX;
         pos2 = pos4 - e.clientY;
         pos3 = e.clientX;
         pos4 = e.clientY;
         // set the element's new position:
         elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
     }
     function closeDragElement() {
         /* stop moving when mouse button is released:*/
         document.onmouseup = null;
         document.onmousemove = null;
     }
 }