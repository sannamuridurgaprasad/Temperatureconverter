var cel=document.getElementById("cel");
var fah=document.getElementById("fah");


cel.addEventListener("input",function(){
        //  console.log("welcome to script1")
        let c=this.value;
       
        let fahrenheitValue=(c*1.8)+32;
        // fah.value=parseInt(fahrenheitValue)
        fah.value=(fahrenheitValue).toFixed(2)
        // console.log(fahrenheitValue)
})

fah.addEventListener("input",function(){
   
    let f=this.value;
   
    let celsiusValue=(f-32)/1.8;
    // cel.value=parseInt(celsiusValue)
    cel.value=(celsiusValue).toFixed(2)
    // console.log(celsiusValue)
})
