function tempConvert() {
  let celsiusCalc = parseFloat(document.getElementById("degrees").value); //onchange Event can be applied as alternative

  document.getElementById("getCelsius").innerHTML = Math.round(
    celsiusCalc * (9 / 5) + 32
  );
}
