function button() {
  let text;
  //pop up
  let kilometers = prompt("Please enter how many KM:", "xKM");

  //displays answer
  if (kilometers === null || kilometers === "") {
    text = "PLease enter a real number";
  } 
  else {
    //does the math and displays it
    let math = kilometers*0.13;
    text = "It would cost " + math + " dollars to get to your location in a 2010 Honda Civic";
  }
  //creates the button
  document.getElementById("button").innerHTML = text;
}
  
  