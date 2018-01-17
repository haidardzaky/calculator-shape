function circleArea(r){
  return 22/7*(r**2)};

function calculateTube(){
  var radian = Number(document.getElementById("radian").value);
  var height = Number(document.getElementById("height").value);
  var area = circleArea(radian);
  var areaAround = (2*22/7*radian*radian) + (2*22/7*radian*height);
  volume = area*height;
  result1 = document.getElementById("result1cube").innerHTML = "Volume = " + volume;
  result2 = document.getElementById("result2cube").innerHTML = "Area Perimeter = " + areaAround;
}

var button3 = document.getElementById("Submit");


button3.addEventListener("click", calculateTube);
