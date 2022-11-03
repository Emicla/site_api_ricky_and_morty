// https://rickandmortyapi.com/ - Link da API
// https://rickandmortyapi.com/documentation/ - Documentação da API
// https://forum.casadodesenvolvedor.com.br/topic/30285-apis-p%C3%BAblicas-e-gratuitas-que-voc%C3%AA-pode-usar-em-projetos-paralelos-%F0%9F%98%8E/ - APIs intereçantes

"use strict";

let div_aviso = document.querySelector(".div-avisos");
let aviso = div_aviso.querySelector(".aviso");
let imagens = document.querySelectorAll(".imagem-personagem");
let sectionImagens = document.querySelector(".section-imagens");
let divNovaColecao = document.querySelector(".div-nova-colecao");

let urlApi = "https://rickandmortyapi.com/api/character";

onload = function conectaApi() {
    fetch(urlApi)
        .then(
            (resposta) => {
                return resposta.json();
            })
        .then(
            (dados) => {
                console.log(dados);
                buscaColecao();
            })
        .catch(
            (erro) => {
                console.log("Houve um erro: " + erro);
                aviso.textContent = "Error Connect";
            })
}

function buscaColecao() {
    let colecaoArmazenada = localStorage.getItem("colecao-rick-morty");

    if (colecaoArmazenada == null) {
        console.log("Nenhuma coleção encontrada");
        aviso.textContent = "No collection stored";
        div_aviso.innerHTML += `<img src="img/icon adicionar.png" onclick="removeClasse(divNovaColecao)">`;

    } else {
        console.log(colecaoArmazenada);
    }
}

function adicionarClasse(tag){
    tag.classList.add("invisivel");
}

function removeClasse(tag){
    tag.classList.remove("invisivel");
}

// for(var i = 0; i < 4; i++){
                //     let sorteiaImagem = Math.round(Math.random()*19);

                //     sectionImagens.innerHTML += `<div class="div-imagem imagem-fechada" onclick="abrirDados(this)" situacao="fechado">
                //                                     <img src="${dados.results[sorteiaImagem].image}" class="imagem-personagem">
                //                                     <div class="dados">
                //                                         <p class="nome">Name: ${dados.results[sorteiaImagem].name}</p>
                //                                         <p class="especie">Species: ${dados.results[sorteiaImagem].species}</p>
                //                                         <p class="status">Status: ${dados.results[sorteiaImagem].status}</p>
                //                                         <p class="origin">Origin: ${dados.results[sorteiaImagem].origin.name}</p>
                //                                     </div>
                //                                 </div>`;
                // }