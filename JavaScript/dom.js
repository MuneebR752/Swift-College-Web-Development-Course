let para = document.getElementById("para");

para.innerHTML = "<i> Changed Paragraph </i>";

para.style.color = "blue";
para.style.backgroundColor = "#f30916";

let logo = document.getElementById("logo");

logo.setAttribute("src", "youtube.png");

let x = logo.getAttribute("alt");

console.log(x);

let grapes = document.createElement("li");
grapes.innerHTML = "Grapes";

grapes.setAttribute("id", "grapex");

let ul = document.getElementsByTagName("ul")[0];
ul.appendChild(grapes);

function changeBgToYellow() {
  document.body.style.backgroundColor = "yellow";
}
function changeBgToWhite() {
  document.body.style.backgroundColor = "white";
}

let changeBgBtn = document.getElementById("changeBgBtn");

changeBgBtn.addEventListener("click", function () {
  let body = document.body;
  if (body.style.backgroundColor == "yellow") {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "yellow";
  }
});
