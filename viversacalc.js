function covFtoC() {
    let fvalue = parseInt(document.getElementById("fvalue").value);
    let cels = (fvalue -32)*5/9;
    let celsAn = cels.toFixed(2);
    document.getElementById("demo").innerHTML = celsAn;
}
 
function covCtoF() {
    let fvalue = parseInt(document.getElementById("fvalue").value);
    let feh = (fvalue *9/5)+32;
    let FehAn = feh.toFixed(2);
   document.getElementById("demo1").innerHTML = FehAn;
} 

 function calculater(){
   
     if (document.getElementById("tempF").checked){

        covFtoC();

     } else if (document.getElementById("tempC").checked){
    
        covCtoF(); 
        
     } else {
         console.log("please refresh screen");
     }

   
    
  }
