function limpar(){
    let texto = document.querySelector("#conteudo");
    let atividade = document.getElementsByName("atividade");

    texto.value= " ";

    for (at of atividade){
        at.checked = false;
    }

}

function validar(){

}


// é para colocar os eventos click 
// dos botões limpar e validar
// quando a pagina estiver sendo carregada
// pelo navegador de internet

window.addEventListener("load", function(){
    let btnLimpar = document.querySelector("#btnLimpar");
    let btnValidar = document.querySelector('#btnValidar');

    btnLimpar.addEventListener("click", function(){
            limpar();
    });

    btnValidar.addEventListener("click", function(){
            validar();
    });

});