function tempConvert() {
    let inputFahrenheit=document.getElementById("f_temp_value").value;
    let answer = (inputFahrenheit - 32) * 5 / 9;
    document.getElementById("outputCelcius").innerHTML = answer;
    console.log(answer);
}