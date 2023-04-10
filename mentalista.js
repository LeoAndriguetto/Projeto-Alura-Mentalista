var input = document.querySelector("input");
document.getElementById("reinicia").disabled = true;
input.focus();
function Chutar() {
    var numeroSecreto = parseInt(Math.random() * 11);
    var chute = parseInt(document.querySelector("input").value);
    var resultado;
    if (chute == numeroSecreto) {
      resultado = "Você acertou";
    } else if (chute > 10 || chute < 0) {
      resultado = "Tente um número de 0 a 10";
    } else {
      resultado = "Você errou, o número secreto era " + numeroSecreto;
     
    }
    var elementoResultado = document.getElementById("resultado");
  
    elementoResultado.innerHTML = resultado;
    document.getElementById("chute").disabled = true;
    document.getElementById("reinicia").disabled = false;
  
  
  }

  function reiniciar () {
    document.getElementById("chute").disabled = false;
    document.getElementById("reinicia").disabled = true;
    input.focus();
    input.value = "";


  }
  