function tempConvert() {
  let scaleCalc = document.querySelector("#selectScale").value; //Takes the value of scale selector
  let inputNum = parseFloat(document.querySelector("#inputValue").value); //Takes the value of user input

  switch (scaleCalc) {
    case "Fahrenheit": //Takes the value of fahrenheit and converts to other scales
      document.querySelector("#getCelsius").innerHTML =
        Math.round(inputNum * (9 / 5) + 32) + " C";

      document.querySelector("#getFahrenheit").innerHTML =
        Math.round(inputNum) + " F";

      document.querySelector("#getKelvin").innerHTML =
        (inputNum - 32) * (5 / 9) + 273.15 + " K";

      document.querySelector("#getRankine").innerHTML =
        inputNum + 459.67 + " R";
      break;
    //case "Celsius":
  }
}
