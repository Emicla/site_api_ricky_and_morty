// https://rickandmortyapi.com/ - Link da API
// https://rickandmortyapi.com/documentation/ - Documentação da API
// https://forum.casadodesenvolvedor.com.br/topic/30285-apis-p%C3%BAblicas-e-gratuitas-que-voc%C3%AA-pode-usar-em-projetos-paralelos-%F0%9F%98%8E/ - APIs intereçantes

"use strict";

let conteinerPrincipal = document.querySelector("#conteiner-principal");

let popUp = document.querySelector(".pop-up");
let msgPopUp = document.querySelector(".msg-pop-up");

let iconAddColecao = document.querySelector("#icon-add-colecao");
let campoAddColecao = document.querySelector(".campo-add-colecao");

let armaPortais = document.querySelector("#arma-portais");

const urlApi = "https://rickandmortyapi.com/api/character";

let colecaoArmazenada;
let retornoApi;
let colecaoAberta;

onload = function conectaApi() {
    fetch(urlApi)
        .then(
            (resposta) => {
                return resposta.json();
            })
        .then(
            (dados) => {
                console.log(dados);
                retornoApi = dados;
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

        conteinerPrincipal.innerHTML = `
                <div class="conteiner-config">
                    <p class="msg-status">No collection stored</p>
                    <img src="img/icon adicionar.png" onclick="removeClasse(campoAddColecao, 'invisivel')">
                </div>
        `;

    } else {
        removeClasse(iconAddColecao, "invisivel");
        mostraColecoes(colecaoArmazenada);
    }
}

function mostraColecoes(colectionArmazenada) {
    conteinerPrincipal.innerHTML = `<div class="conteiner-colecao"></div>`;

    let conteinerColecoes = conteinerPrincipal.querySelector(".conteiner-colecao");

    for (var nomeColecao in colectionArmazenada) {
        conteinerColecoes.innerHTML += `<div class="colecoes">
                                            <p>${nomeColecao}</p>
                                            <button onclick="abrirColecao(this.parentElement.children[0].textContent)">Open</button>
                                            <button onclick="delColecao(this.parentElement)">Delete</button>
                                        </div>`
    }
}

function abrirColecao(nomeColecao) {
    adicionarClasse(iconAddColecao, "invisivel");
    removeClasse(armaPortais, "invisivel");

    conteinerPrincipal.innerHTML = `<div class="section-imagens"></div>`;

    let conteinerImagens = conteinerPrincipal.querySelector(".section-imagens");
    colecaoAberta = nomeColecao;
    
    console.log(colecaoArmazenada[nomeColecao]);

    if (isEmpty(colecaoArmazenada[nomeColecao].personagens)) {
        conteinerImagens.innerHTML += `<p>No Image Found</p>`;

    } else {
        let colecao = colecaoArmazenada[nomeColecao].personagens;

        for (var personagem in colecao) {
            conteinerImagens.innerHTML += `<div class="div-imagem" onclick="abrirDados(this.children[0].dataset.nome)">
                                                <img src="${retornoApi.results[colecao[personagem].indice].image}" class="imagem-personagem" data-nome="${retornoApi.results[colecao[personagem].indice].name}">
                                                <p class="q-imagens">${colecao[personagem].quantidade}</p>
                                            </div>`;
        }
    }
}