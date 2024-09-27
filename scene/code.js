function button() {
  let text;
  let kilometers = prompt("Please enter how many KM:", "xKM");
  if (kilometers === null || kilometers === "") {
    text = "PLease enter a real number";
  } 
  else {
    let math = kilometers*0.13;
    text = "It would cost " + math + " dollars to get to your location in a 2010 Honda Civic";
  }
  document.getElementById("button").innerHTML = text;
}
  
  