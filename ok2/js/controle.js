var logado = [];


function validarUsuario() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var formulario = document.getElementById("formulario");
    var menu = document.getElementById("menu");
    var conteudo = document.getElementById("conteudo");

    for (var user of usuarios) {
        
        if (email === user.email && senha === user.senha) {
            formulario.style.display = "none";
            menu.style.display = "flex";
            conteudo.style.display = "flex";


            logado.push({
                email: email,
                senha: senha,

            });

            localStorage.setItem("salvo", JSON.stringify(logado));
            
        }
    }
    
}


function icone() {
    let icone = document.getElementById("logout");
    //logout.style.display = "flex";
    if (logout.style.display == "none") {
        logout.style.display = 'flex';
    } else {
        logout.style.display = 'none';
    }
}


function sair() {
    localStorage.removeItem('salvo', JSON.stringify(logado));
    formulario.style.display = "flex";
    menu.style.display = "none";
    logout.style.display = "none";
    conteudo.style.display = "none";
    document.getElementById("cards").style.display = "none";

    email.value = "";
    senha.value = "";


}

function botaoCarro() {
 document.getElementById("cards").style.display = "flex";
 document.getElementById("conteudo").style.display = "none";

 

}


