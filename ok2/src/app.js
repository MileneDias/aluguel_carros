import { Card } from './card';
import { Login } from './login';
import { Usuarios } from './user';
import { ListaCarros } from './listaCarros';




const logado = []; 

class App {
    constructor() {

        this.ListaCarros = ListaCarros;
        this.card = new Card();
        this.login = new Login();
        this.botaoCalcular = document.getElementById("calcularDias");
        this.botaoEnviar = document.getElementById("botao");
        this.clicarIcone = document.getElementById("menu");
        this.logout = document.getElementById("logout");
        this.registrarEventos();
        this.listarCarros();
        this.registrarBotoes();
        this.encontarClick();
       
       
        
    }

    listarCarros() {
        const novo = document.getElementById("listaDeCarros");
        let cards = "";
        this.ListaCarros.forEach(carro => {
            const c = new Card(carro);
            cards += c.resumido();
        });
        novo.innerHTML = cards;
    }

   

  



    registrarEventos() {
        this.botaoEnviar.onclick = () => {
            this.validarUsuario();
        }

        this.clicarIcone.onclick = () => {
            this.icone();
        }

        this.logout.onclick = () => {
            this.sair();
        }
        

 
    }





    validarUsuario() {
        let email = document.getElementById("email").value;
        let senha = document.getElementById("senha").value;
        let formulario = document.getElementById("formulario");
        let menu = document.getElementById("menu");
        let conteudo = document.getElementById("conteudo");

        for (let user of Usuarios) {

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

    icone() {
        let icone = document.getElementById("logout");
     
        if (logout.style.display == "none") {
            logout.style.display = 'flex';
        } else {
            logout.style.display = 'none';
        }
    }


    sair() {
        localStorage.removeItem('salvo', JSON.stringify(logado));
        formulario.style.display = "flex";
        menu.style.display = "none";
        logout.style.display = "none";
        conteudo.style.display = "none";
        document.getElementById("cards").style.display = "none";

        email.value = "";
        senha.value = "";


    }

    encontarClick() {
        

    }


    registrarBotoes() {
        const lista = document.querySelectorAll(".card-carro3");
        lista.forEach((el) => {
            el.onclick = (event) => this.editar(event);
        });
    }

    encontrar() {
        const novaLista = this.ListaCarros.find(carro =>
            carro.id == this.encontarClick());

        return novaLista;
    }



    editar(event) {
       const cartaoEditado = event.path[1];
       const idEditado = cartaoEditado.dataset.id;
      
  
        const recado = this.ListaCarros.find(f => f.id === +idEditado);

        
        let cartoes = "";

     
        const car = new Card(recado);
        cartoes = car.pegaCard();
       

        document.getElementById("cards").style.display = "flex";
        document.getElementById("conteudo").style.display = "none";
        document.getElementById("cards").innerHTML = cartoes;


        
    }

   



}




new App();
