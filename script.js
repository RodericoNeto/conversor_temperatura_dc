alert("to funcionando")



function convert(){
    let selectOption1 = document.getElementById("selectTemp1").value;
    let tempC = document.getElementById("tempC").value;

    alert(`A temperatura que vc digitou é ${tempC}`)

    
    if (selectOption1 === "selecione"){
        alert("Por favor, escolha entre Farenheit ou Kelvin")
    } else if (selectOption1 === "farenheit") {
        let tempF = tempC*1.8 + 32;
        alert(tempF)
        document.getElementById("result-F-or-K").innerHTML = `${tempF} ºF`;
    } else {
        let tempK = tempC*1 + 273.15;
        alert(tempK);
        document.getElementById("result-F-or-K").innerHTML = `${tempK} K`;
    }

}