let inputColecao = document.querySelector("#txt-colecao");

let temEspaco = false;
let palavraSemEspaco = "";
let inputIncorreto = true;

inputColecao.addEventListener("keydown", (tecla) => {
    if (tecla.key == " ") {
        temEspaco = true;
        palavraSemEspaco = inputColecao.value;

    } else {
        temEspaco = false;
    }
});

function verificaInput(input) {
    let palavraDigitada = input.value;

    if (temEspaco) {
        input.value = palavraSemEspaco;

    } else if (palavraDigitada.length < 4) {
        input.style.color = "#CCCCCC";
        inputIncorreto = true;

    } else if (palavraDigitada != palavraDigitada.normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
        input.style.color = "#FF0000";
        inputIncorreto = true;

    } else {
        input.style.color = "#00FF00";
        letraAcento = "";
        inputIncorreto = false;
    }
}

function comparaNomes() {
    
}

function criarColecao() {
    
}