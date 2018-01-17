//function for area  of square
function squares(){
  num1 = Number(document.getElementById("num1square").value);
  area = num1*num1;
  perimeter = 4*num1;
  result = document.getElementById("result1").innerHTML = "Area wide = " + area;
  result = document.getElementById("result2").innerHTML = "Perimeter = " + perimeter;
  }




//getting button class
var button1 = document.getElementById("button1");







//callback while clicking button

button1.addEventListener("click", squares);
