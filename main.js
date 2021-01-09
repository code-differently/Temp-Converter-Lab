// function celsius 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(This is Celsius);
// }

// function fahrenheit 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(This is Fahrenheit);
// } 
// celcius(60);
// fahrenheit(45);

function myfunction() {
    let celsius = (document.getElementById('value').value - 32) * 5/9;
    document.getElementById('celciusformula').innerHTML = celsius;
}
