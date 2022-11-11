let inputColecao = document.querySelector("#txt-colecao");

let digitouErrado = false;
let palavraCorreta = "";
let inputIncorreto = true;

inputColecao.addEventListener("keydown", (tecla) => {
    if (tecla.key == " ") {
        digitouErrado = true;
        palavraCorreta = inputColecao.value;

    } else {
        digitouErrado = false;
    }
});

function verificaInput(input) {
    let palavraDigitada = input.value;

    if (digitouErrado) {
        input.value = palavraCorreta;

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
    if (inputIncorreto || colecaoArmazenada[inputColecao.value] != undefined) {
        console.log("Nome Inválido");
        popUp.classList.remove("invisivel");
        msgPopUp.textContent = "Nome Inválido";
        
    } else {
        criarColecao(inputColecao.value);
        inputColecao.value = "";
        adicionarClasse(inputColecao.parentElement, 'invisivel');
    }
}

function criarColecao(novaColecao) {
    colecaoArmazenada[novaColecao] = {};
    armazenaColecao();
}