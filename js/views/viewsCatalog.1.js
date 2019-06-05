

import {Card} from "../models/Card.js"
//on load = show all
window.addEventListener("load", function (event){
renderCatalog()
})



//onseacrh ou onclick = refresh
document.querySelector("#formSearch").addEventListener("search", function (event){
renderCatalog()
})




function renderCatalog(filterName = "") {
    let cards = JSON.parse(localStorage.getItem("cards"))
    const myCatalog = document.querySelector("#divForCards")
    let result = ""
    let i = 0
    for (const card of cards) {
        // Aplicação do filtro
        if ((filterName !== "" && !card.name.includes(filterName))) {
            continue;
        }
        // Criação de linha
        if (i % 3 === 0) {
            result += `<div class="row">
                        <div class="col-sm-1">

                        </div>

                        <div class="col-sm-10">
                            <div class="row">`
        }
        // Geração do card
        result += `



        <div class="col-sm-4">
            <div id="card" class="card border-dark mb-3" style="width: 18rem;">
                <h5 id="cardName" class="card-title text-center font-weight-bold">${cards[i].name}</h5>
                <img id="cardImg" class="card-img-top"
                    src="${cards[i].img}"
                    alt="${cards[i].name}">
                <div class="card-body">
                    <p id="cardText" class="card-text">[${cards[i].tags}]</p>
                    <hr>
                    <a id="cardBtn" href="#" class="btn btn-dark">Ver Mais</a>
                </div>
            </div>
        </div>

        



`
        // Criação do fecho da linha
        if (i % 3 === 0) {
            result += `
                        </div>
                    </div>
        
                    <div class="col-sm-1">
        
                    </div>
        
            </div>`
        }
        
        i++
    }

    // Atribuição de todos os cards gerados ao elemento com id myCatalog
    myCatalog.innerHTML = result
}
