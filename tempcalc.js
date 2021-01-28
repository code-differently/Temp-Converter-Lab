function calculater() {
    let fvalue = parseInt(document.getElementById("fvalue").value);
    let cels = (fvalue -32)*5/9;
    let celsAn = cels.toFixed(2);
    document.getElementById("demo").innerHTML = celsAn;
}
/* 
function calculater2() {
    let cvalue = parseInt(document.getElementById("cvalue").value);
    let feh = (cvalue *9/5)+32;
    let FehAn = feh.toFixed(2);
    document.getElementById("demo").innerHTML = FehAn;
} */



  