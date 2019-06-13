import {Card} from "../models/Card.js"

export function getAllCats(){
    let cards = JSON.parse(localStorage.getItem("cards"))
    let categories = [""]
    let alreadyCat;

    for (const card of cards){
        //supoem-se que a categoria ainda não está no array
        alreadyCat = false

        //verifica-se a category no array
        for (const category of categories){
            if(card.category == category){
                //se já existir prevenir que seja adicionada outra vez
                alreadyCat = true 

            }else if(card.category == "Grande Azul"){
                //prevenir que grande azul seja adicionado 2 vezes pk é a categoria default
                alreadyCat = true
            }
        }


        if(!alreadyCat){
            categories.push(card.category)
        }
    }
    return categories
}



export function renderCatalog(filterName, search, cards) {
    

    const myCatalog = document.querySelector("#divForCards")
    let result = ""
    let i = 0
    for (const card of cards) {
        // Aplicação do filtro
       if(search != "" && !card.name.toLowerCase().includes(search)){
            //search
            continue;
       }

       if(filterName != "" && !card.category.toLowerCase().includes(filterName)){
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
                    <p id="cardText" class="card-text">[${card.category}]</p>
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



export function getUserCards(categories){

    let newCards = []

    let cards = JSON.parse(localStorage.getItem("cards"))

    for (const card of cards) {
        
        for (const category of categories){
            if(card.category == category){
                newCards.push(card)
            }
        }
    }
    return newCards
}

export function getUserCollection(username){

    let users = JSON.parse(localStorage.getItem("users"))

    for (const user of users) {
        if(user.username == username){
            console.log(user.cardCollection)
            return user.cardCollection
        }
    }
    
}
