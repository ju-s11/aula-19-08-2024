function substituir(entrada, altera){
    let resp =entrada.replace(altera,"*******");
   alert(resp);

   // exemplo com expressão regular
   resp = entrada.replace(/\w/," removido ");
   alert("Expressao Regular"+resp);
}

function cortar(entrada, corte){
    
}

window.addEventListener("load", function() {
    let btnSplit, btnReplace;

    let entrada, alterar;

    btnSplit = document.querySelector("#btnSplit");
    btnReplace = document.querySelector("#btnReplace");

    btnReplace.addEventListener("click", function() {
        entrada = document.querySelector("#entrada");
        alterar = document.querySelector("#alterar");
        substituir(entrada.value, alterar.value);
    });

    btnSplit.addEventListener("click", function() {
        entrada = document.querySelector("#entrada");
        alterar = document.querySelector("#alterar");
        cortar(entrada.value, alterar.value);
    });
});