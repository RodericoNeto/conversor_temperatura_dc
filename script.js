// FUNÇÃO CONVERTER A TEMPERATURA
function convert(){

    let selectOption1 = document.getElementById("selectTemp1").value;
    let tempC = document.getElementById("tempC").value;

    
    if (selectOption1 === "selecione"){
        alert("Por favor, escolha entre Farenheit ou Kelvin")
    } 
    else if (selectOption1 === "farenheit") {
        let tempF = tempC*1.8 + 32;
        document.getElementById("result-F-or-K").innerHTML = `${tempF} ºF`;
    } 
    else {
        let tempK = tempC*1 + 273.15;
        document.getElementById("result-F-or-K").innerHTML = `${tempK} K`;
    }

}


// SELECIONAR E MUDAR O NOME DO BOTÃO PARA A TEMPERATURA DESEJADA
// obs: deixar em caixa alta (toUpperCase())

function changeButton() {
    let tempSelected = document.getElementById("selectTemp1").value;
    document.getElementById("buttonConvert").innerHTML = `CONVERTER PARA ${tempSelected.toUpperCase()}`
}