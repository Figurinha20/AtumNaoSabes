import {Card} from "../models/Card.js"

export function renderCatalog(){

    let divForCards = document.querySelector("#divForCards");
    let cards = JSON.parse(localStorage.getItem("cards"))

    let cardHtml = `<div class="row">
                        <div class="col-sm-1">

                        </div>
                        <div class="col-sm-10">
`
    let counter = 0

    
    for (const card of cards){
        //conta nº carta
        counter++
        
        
        cardHtml +=`
        <div class="col-sm-4">
        <div id="card" class="card border-dark mb-3" style="width: 18rem;">
            <h5 id="cardName" class="card-title text-center font-weight-bold">${card.name}</h5>
            <img id="cardImg" class="card-img-top"
                src="${card.img}"
                alt="${card.name} ${card.tags}">
            <div class="card-body">
                <p id="cardTags" class="card-text">[${card.tags}]</p>
                <hr>
                <a id="cardBtn" href="/viewCard.hmtl" class="btn btn-dark">Ver Mais</a>
            </div>
        </div>
    </div>

        `
        //se divisivel por 3 => fecha col 10 faz um col 1 fecha row cria hr abre proxima row cria col 1 abre col 10
        if(counter%3 === 0){
            cardHtml +=`
                </div>
                <div class="col-sm-1">

                </div>

            </div>
<div class="row">
<hr>
</div>
            <div class="row">
                <div class="col-sm-1">

                </div>

                <div class="col-sm-10">
            `
        }
    }


    //se acabar em numero par acrescenta um col 4 para finalizar e fecha

    if(counter%2 === 0){
        cardHtml +=`
                    <div class="col-sm-4">

                    </div>
                </div>
                <div class="col-sm-1">

                </div>

            </div>
<div class="row">
<hr>
</div>
            `

            //se acabar num numero não par não divisivel  acrescenta 2 antes de fechar
    }else if(counter%3 != 0){
        cardHtml +=`
                    <div class="col-sm-4">

                    </div>
                    <div class="col-sm-4">

                    </div>
                </div>
                <div class="col-sm-1">

                </div>

            </div>
<div class="row">
<hr>
</div>
            `
            //se acabar em divisivel por 3 fecha
    }else{
        cardHtml +=`
                    
                </div>
                <div class="col-sm-1">

                </div>

            </div>
<div class="row">
<hr>
</div>
            `
    }

    divForCards.innerHTML = cardHtml

}