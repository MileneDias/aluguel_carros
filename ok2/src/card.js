import {Carro} from './carro';

export class Card {
    constructor(carro){
        this.carro = carro;
        

    }
    resumido() {
      return `<li class="list-group-item card-carro3" data-id="${this.carro.id}">
        <a href="#" class="lista">${this.carro.modelo}</a>     
      </li>`
      ;
    }
    pegaCard() {
        return `

        <div class="card col-8 card-carro3" data-id= "${this.carro.id}">
                        <img class="card-img-top" src="${this.carro.imagem}" alt="Imagem de capa do card">
                        <div class="card-body">
                          <h5 class="card-title"> ${this.carro.modelo} </h5>
                          <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">${this.carro.ano}</li>
                          <li class="list-group-item">${this.carro.combustivel}</li>
                          <li class="list-group-item"> R$${this.carro.diaria},00</li>
                        </ul>
                        <div class="card-body">
                           
                            <div class="input-group mb-3">
                                <input type="number" id="dias" class="form-control" placeholder="Quantidade de dias" aria-label="Recipient's username" aria-describedby="button-addon2">
                                <div class="input-group-append">
                                  <button class="btn btn-dark text-warning " type="button" id="calcularDias">Calcular</button>
                                </div>
                              </div>
                          <a href="#" class="card-link">Alugar</a>
                          <a href="#" class="card-link">Sair</a>

                        </div>
                      </div>

        `;
    }

 
}