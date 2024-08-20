function validarExtensao(arquivo,extensao){

}

function validarSenha(senha){

}

function validarDatanasc(dtNasc){

}

function validarUsuario(usuario){

}

function validarNome(nome){

}

window.addEventListener("load", function(){
    let btnValidar = document.querySelector("#btnValidar");
    
    let nome, nasc, arq, usu, senha;

    btnValidar.addEventListener("click",function(){
        nome = document.querySelector("#nome").value;
        nasc = document.querySelector("#nasc").value;
        arq = document.querySelector("#arq");
        usu = document.querySelector("#usu").value;
        senha = document.querySelector("#senha");
    });
});