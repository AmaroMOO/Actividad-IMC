function imc(peso, altura) {
    const valor = peso / (altura * altura);
    if (valor < 18.5) return "Bajo de peso";
    if (valor >= 18.5 && valor <= 24.9) return "Normal";
    if (valor >= 25 && valor <= 29.9) return "Sobrepeso";
    return "Obeso";
  }
  
  function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultado.textContent = "Por favor, introduce valores válidos.";
      resultado.style.color = "red";
      return;
    }
  
    const clasificacion = imc(peso, altura);
    resultado.textContent = `Tu IMC indica: ${clasificacion}`;
    resultado.style.color = "black";
  }
  



  