window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

function mouseOver1(){
    document.getElementById("hey").innerHTML = "AboutMe";
}  
function mouseLeave1(){
    document.getElementById("hey").innerHTML = "Hey! I'm";
}  
function mouseOver2(){
    document.getElementById("first").innerHTML = "Work";
}
function mouseLeave2(){
    document.getElementById("first").innerHTML = "Yagnik";
}
function mouseOver3(){
    document.getElementById("second").innerHTML = "Contact";
}
function mouseLeave3(){
    document.getElementById("second").innerHTML = "Vamja";
}


