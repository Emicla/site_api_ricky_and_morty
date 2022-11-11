// https://rickandmortyapi.com/ - Link da API
// https://rickandmortyapi.com/documentation/ - Documentação da API
// https://forum.casadodesenvolvedor.com.br/topic/30285-apis-p%C3%BAblicas-e-gratuitas-que-voc%C3%AA-pode-usar-em-projetos-paralelos-%F0%9F%98%8E/ - APIs intereçantes

"use strict";

let conteinerPrincipal = document.querySelector("#conteiner-principal");

let popUp = document.querySelector(".pop-up");
let msgPopUp = document.querySelector(".msg-pop-up");

let iconAddColecao = document.querySelector("#icon-add-colecao");
let campoAddColecao = document.querySelector(".campo-add-colecao");

let imagens = document.querySelectorAll(".imagem-personagem");

let urlApi = "https://rickandmortyapi.com/api/character";
let colecaoArmazenada;

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
                let aviso = conteinerPrincipal.querySelector(".msg-status");
                console.log("Houve um erro: " + erro);
                aviso.textContent = "Error Connect";
            })
}

function buscaColecao() {
    colecaoArmazenada = JSON.parse(localStorage.getItem("colecao-rick-morty"));

    if (colecaoArmazenada == null || isEmpty(colecaoArmazenada)) {
        console.log("Nenhuma coleção encontrada");
        colecaoArmazenada = {};

        adicionarClasse(iconAddColecao, "invisivel");
        removeClasse(conteinerPrincipal, "conteiner-colecao");
        adicionarClasse(conteinerPrincipal, "conteiner-config");

        conteinerPrincipal.innerHTML = `
            <p class="msg-status">No collection stored</p>
            <img src="img/icon adicionar.png" onclick="removeClasse(campoAddColecao, 'invisivel')">
        `;

    } else {
        removeClasse(iconAddColecao, "invisivel");
        removeClasse(conteinerPrincipal, "conteiner-config");
        adicionarClasse(conteinerPrincipal, "conteiner-colecao");
        mostraColecoes(colecaoArmazenada);
    }
}

function mostraColecoes(colectionArmazenada){
    conteinerPrincipal.innerHTML = "";
    
    for(var nomeColecao in colectionArmazenada){
        conteinerPrincipal.innerHTML += `<div class="colecoes">
                                            <p>${nomeColecao}</p>
                                            <button onclick="delColecao(this.parentElement)">Apagar</button>
                                        </div>`
    }    
}