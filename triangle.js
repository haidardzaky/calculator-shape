//function for area  of triangle
function triangle(){
  pedestal = Number(document.getElementById("pedestal").value);
  height = Number(document.getElementById("height").value);
  side_a = Number(document.getElementById("side_a").value);
  side_b = Number(document.getElementById("side_b").value);
  area = (pedestal*height)/2;
  perimeter = pedestal + side_a + side_b;
  result = document.getElementById("result1").innerHTML = "Area wide = " + area;
  result = document.getElementById("result2").innerHTML = "Perimeter = " + perimeter;
  }




//getting button class
var button1 = document.getElementById("button1");







//callback while clicking button

button1.addEventListener("click", triangle);
