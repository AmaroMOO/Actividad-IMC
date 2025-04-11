document.getElementById("btnCalcular").addEventListener("click", calcularIMC());

function calcularIMC(){
    let peso = document.getElementById("campoPeso").value;
    let altura = document.getElementById("campoAltura").value;
    console.log(peso);
    console.log(altura);
}