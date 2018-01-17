function square(s){
  return s**2};

function cube(){
  var num1 = Number(document.getElementById("num1cube").value);
  var area = square(num1);
  var areaAround = area*6;
  volume = area*num1;
  result1 = document.getElementById("result1cube").innerHTML = "Volume = " + volume;
  result2 = document.getElementById("result2cube").innerHTML = "Area Perimeter = " + areaAround;
}

var button3 = document.getElementById("Submit");


button3.addEventListener("click", cube);
