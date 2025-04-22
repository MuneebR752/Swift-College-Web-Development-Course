//Function Definition
function print10to1() {
  for (let i = 10; i >= 1; i--) {
    document.writeln(i + "<br>");
  }
}

function printEvenFrom1to20() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      document.writeln(i + "<br>");
    }
  }
}

function calculateArea(l, w) {
  let area = l * w;
  document.writeln("<br> Your area is " + area);
}

let l = prompt("Enter Length");
let w = prompt("Enter Width");

calculateArea(l, w);
