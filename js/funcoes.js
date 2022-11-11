function adicionarClasse(tag, classe){
    tag.classList.add(classe);
}

function removeClasse(tag, classe){
    tag.classList.remove(classe);
}

function isEmpty(colectionArmazenada){
    for(var i in colectionArmazenada){
        return false;
    }

    return true;
}

function armazenaColecao(){
    localStorage.setItem("colecao-rick-morty", JSON.stringify(colecaoArmazenada));
    buscaColecao();
}

function delColecao(tagPai){
    let nomeColecao = tagPai.querySelector("p").textContent;
    delete colecaoArmazenada[nomeColecao];
    armazenaColecao();
}