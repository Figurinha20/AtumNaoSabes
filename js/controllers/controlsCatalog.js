import {Card} from "../models/Card.js"

export function renderCatalog(filterName, search) {
    let cards = JSON.parse(localStorage.getItem("cards"))
    const myCatalog = document.querySelector("#divForCards")
    let result = ""
    let i = 0
    for (const card of cards) {
        // Aplicação do filtro
        if (search != "" && !card.name.includes(search)) {
            //search
            continue;
        } 

        if(filterName != "" && !card.tags.includes(filterName)){
            //filtros
            continue;
        }

        // Criação de linha
        if (i % 3 === 0) {
            console.log("abre");
            result += `<div class="row">
                        <div class="col-sm-1">

                        </div>

                        <div class="col-sm-10">
                            <div class="row">`
        }

        

        // Geração do card
        console.log("gera");
        result += `



        <div class="col-sm-4">
            <div id="card" class="card border-dark mb-3" style="width: 18rem;">
                <h5 id="cardName" class="card-title text-center font-weight-bold">${card.name}</h5>
                <img id="cardImg" class="card-img-top"
                    src="${card.img}"
                    alt="${card.name}">
                <div class="card-body">
                    <p id="cardText" class="card-text">[${card.tags}]</p>
                    <hr>
                    <a id="cardBtn" href="#" class="btn btn-dark">Ver Mais</a>
                </div>
            </div>
        </div>
`

        i++
        // Criação do fecho da linha
        if (i % 3 === 0) {
            console.log("fecho");
            
            result += `
                        </div>
                    </div>
        
                    <div class="col-sm-1">
        
                    </div>
        
            </div>`
        }
        
        
    }

    // Atribuição de todos os cards gerados ao elemento com id myCatalog
    myCatalog.innerHTML = result
}
