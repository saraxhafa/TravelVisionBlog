// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByClassName("navbar").style.padding = "30px 10px";
    document.getElementsByClassName("logo").style.fontSize = "25px";
  } else {
    document.getElementsByClassName("navbar").style.padding = "80px 10px";
    document.getElementsByClassName("logo").style.fontSize = "35px";
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}