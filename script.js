"use strict";

// https://rickandmortyapi.com/ - Link da API
// https://rickandmortyapi.com/documentation/ - Documentação da API
// https://forum.casadodesenvolvedor.com.br/topic/30285-apis-p%C3%BAblicas-e-gratuitas-que-voc%C3%AA-pode-usar-em-projetos-paralelos-%F0%9F%98%8E/ - APIs intereçantes

let urlApi = "https://rickandmortyapi.com/api/character";
let imagens = document.querySelectorAll(".imagem-personagem");
let sectionImagens = document.querySelector(".section-imagens");

fetch(urlApi)
    .then(
        (resposta)=>{
            return resposta.json();
        })
    .then(
        (dados)=>{
            console.log(dados);
            for(var i = 0; i < 3; i++){
                let sorteiaImagem = Math.round(Math.random()*19);

                sectionImagens.innerHTML += `<div class="div-imagem imagem-fechada" onclick="abrirDados(this)" situacao="fechado">
                                                <img src="${dados.results[sorteiaImagem].image}" class="imagem-personagem">
                                                <div class="dados">
                                                    <p class="nome">Name: ${dados.results[sorteiaImagem].name}</p>
                                                    <p class="especie">Species: ${dados.results[sorteiaImagem].species}</p>
                                                    <p class="status">Status: ${dados.results[sorteiaImagem].status}</p>
                                                    <p class="origin">Origin: ${dados.results[sorteiaImagem].origin.name}</p>
                                                </div>
                                            </div>`;
            }
            // for(var tagImg of imagens){
            //     tagImg.src = dados.results[Math.round(Math.random()*19)].image;
            // }
        })
    .catch(
        (erro)=>{
            console.log("Houve um erro: " + erro);
        })

function abrirDados(tag){
    if (tag.getAttribute("situacao") == "fechado") {
        tag.style.height = "316px";
        tag.setAttribute("situacao", "aberto");
        tag.classList.add("imagem-aberta");
        tag.classList.remove("imagem-fechada");

    } else if (tag.getAttribute("situacao") == "aberto") {
        tag.style.height = "208px";
        tag.setAttribute("situacao", "fechado");
        tag.classList.add("imagem-fechada");
        tag.classList.remove("imagem-aberta");
    }
}