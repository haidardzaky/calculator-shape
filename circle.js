//function for area  of circle
function circle(){
  radius = Number(document.getElementById("radius").value);
  area = radius*radius*22/7;
  perimeter = 2*radius*22/7;
  result = document.getElementById("result1").innerHTML = "Area wide = " + area;
  result = document.getElementById("result2").innerHTML = "Perimeter = " + perimeter;
  }




//getting button class
var button1 = document.getElementById("button1");







//callback while clicking button

button1.addEventListener("click", circle);
