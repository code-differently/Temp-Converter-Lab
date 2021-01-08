function tempConvert() {
  let scaleCalc = document.getElementById("selectScale").value; //Grabs the value of 
  let inputNum = parseFloat(document.getElementById("inputValue").value);

  switch (scaleCalc) {
    case "Fahrenheit":
      document.getElementById("getCelsius").innerHTML = Math.round(
        inputNum * (9 / 5) + 32
      );
      break;
    case "Celsius":

      
      );
      break;
    case "Kelvin":

      
      
      break;
    case "Rankine":
  }
}
