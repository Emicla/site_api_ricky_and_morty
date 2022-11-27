"use strict";

let fundoEscuro = document.querySelector(".fundo-escuro");

function sortearPersonagem() {
    removeClasse(fundoEscuro, "invisivel");

    fundoEscuro.innerHTML = `
        <img src="img/Portal.png" class="portal">

        <div class="div-imagem div-img-sorteado">
            <img class="imagem-personagem" id="img-sorteada">
        </div>
    `;

    let imgSorteada = document.querySelector("#img-sorteada");
    
    let numSorteado = Math.round(Math.random() * 19);
    let personagens = colecaoArmazenada[colecaoAberta].personagens;
    
    imgSorteada.src = retornoApi.results[numSorteado].image;

    if (personagens[retornoApi.results[numSorteado].name] == undefined) {
        personagens[retornoApi.results[numSorteado].name] = {
            indice: numSorteado,
            quantidade: 1,
        }
        
    } else {
        personagens[retornoApi.results[numSorteado].name].quantidade += 1;
    }

    setTimeout(()=>{
        adicionarClasse(fundoEscuro, "invisivel");
        armazenaColecao();
        abrirColecao(colecaoAberta);
    }, 5000);
}

function abrirDados(nomePersonagem){
    removeClasse(fundoEscuro, "invisivel");

    let infPersonagem = retornoApi.results[colecaoArmazenada[colecaoAberta].personagens[nomePersonagem].indice];

    fundoEscuro.innerHTML = `
        <div class="infs">
            <div class="div-imagem div-img-inf">
                <img class="imagem-personagem" src="${infPersonagem.image}">
            </div>

            <div class="inf-personagem">
                <p class="nome">${infPersonagem.name}</p>
                <p class="genero">Gender: ${infPersonagem.gender}</p>
                <p class="especie">Species: ${infPersonagem.species}</p>
                <p class="origem">Origin: ${infPersonagem.origin.name}</p>
                <p class="status">Status: ${infPersonagem.status}</p>
            </div>
        </div>
    `;

    console.log(infPersonagem);
}