function myfunction() {
    let celcius = (document.getElementById('value').value - 32) * 5/9;
    document.getElementById('celciusformula').innerHTML = celcius;
}