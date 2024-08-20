function executar( n, t){
    const padrao = new RegExp('maria*', 'g'); //expressão regular: tudo após de "maria" será afetado.
    let resp; //g: retorna a primeira ocorrência.
    resp = padrao.exec(n);
    alert("Nome: " + resp);

    resp = padrao.exec(t);
    alert("Texto: " + resp);
}

function testar( n, t){
    const padrao = new RegExp('maria*', 'g');

    let resp = padrao.test(n);
    alert("Nome: " + resp);

    resp = padrao.test(t);
    alert("Texto: " + resp);
}

window.addEventListener("load", function(){
    let btnTestar = document.querySelector("#btnTeste");
    let btnExecutar = document.querySelector("#btnExec");

    //colocar o evento de clicar nos botões.

    let nome, texto;

    btnExecutar.addEventListener("click", function(){ //a ação de selecionar o nome e texto deve ficar dentro do evento de click para a variável sempre ficar com seu contúdo atualizado.
        nome = document.querySelector("#nome");
        texto = document.querySelector("#texto");
        executar(nome.value, texto.value);
    });

    btnTestar.addEventListener("click", function(){
        nome = document.querySelector("#nome");
        texto = document.querySelector("#texto");
        testar(nome.value, texto.value);
    });
})