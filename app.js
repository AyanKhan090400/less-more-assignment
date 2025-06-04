let message = "Yeh hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai h hai vga.";
let word = message.slice(0, 150);

let showMoreButton = "<button onclick='showMore()'>Show More</button>";
let showLessButton = "<button onclick='showLess()'>Show Less</button>";

document.getElementById("message").innerHTML = word + showMoreButton;
if (message.length <= 100) {
  document.getElementById("message").innerHTML = message; 
}else {
  document.getElementById("message").innerHTML =  word + showMoreButton;
}

function showMore() {
  document.getElementById("message").innerHTML = message + showLessButton;
  
}

function showLess() {
  document.getElementById("message").innerHTML =  word + showMoreButton;
 
}
