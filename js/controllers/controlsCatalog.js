//Função para devolver todas as categorias
export function getAllCats() {
    let cards = JSON.parse(localStorage.getItem("cards"))
    let categories = []
    let alreadyCat;

    for (const card of cards) {
        //supoem-se que a categoria ainda não está no array
        alreadyCat = false

        //verifica-se a category no array
        for (const category of categories) {
            if (card.category == category) {
                //se já existir prevenir que seja adicionada outra vez
                alreadyCat = true

            } else if (card.category == "Grande Azul" || card.category == "Especial") {
                //prevenir que grande azul seja adicionado 2 vezes pk é a categoria default
                //categoria Especial é uma exceção deve ser a ultima categoria no array
                alreadyCat = true
            }
        }


        if (!alreadyCat) {
            categories.push(card.category)
        }
    }
    //adicionar Especial no fim (a especial recebe-se quando já não há qualquer outra categoria para receber)
    categories.push("Especial")

    return categories
}


//Função para renderizar o catálogo com filtros e pesquisa
export function renderCatalog(filterName, search, cards) {


    const myCatalog = document.querySelector("#divForCards")
    let result = ""
    let i = 0
    for (const card of cards) {
        // Aplicação do filtro
        if (search != "" && !card.name.toLowerCase().includes(search)) {
            //search
            continue;
        }

        if (filterName != "" && !card.category.toLowerCase().includes(filterName)) {
            //filtros
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
        let cardRank
        ////quick bug fix, por razões desconhecidas quando alguém adiciona comentário e a carta não tem ratings o rank da carta fica null
        if (card.rank == null) {
            cardRank = "0"

        } else {
            cardRank = card.rank
        }

        result += `



        <div class="col-sm-4">
            <div id="card" class="card border-dark mb-3" style="width: 18rem;">
                <h5 id="cardName" class="card-title text-center font-weight-bold">${card.name}</h5>
                <img id="cardImg" class="card-img-top"
                    src="${card.img}"
                    alt="${card.name}">
                <div class="card-body">
                    <div class="row">
                    <div class="col-sm-4">
                        <img src="../img/Star Colored.png" class="bottom-right" style="width:45%">
                        <text id="cardRank">${cardRank}/5<text>
                    </div>
                    <div class="col-sm-5">
                        <b class="text-center" id="cardText">${card.category}</b>
                    </div>
                    <div class="col-sm-3">
                        <b id="cardComments" class="text-left">${card.comments.length}</b>
                        <img src="../img/Speech Bubble.png" class="bottom-right" style="width:60%">
                    </div>
                </div>

                <hr>
                <a id="${card.name}" href="../html/viewCard.html" class="btn btn-dark" style="width: 100%">Ver Mais</a>
                </div>
            </div>
        </div>
`

        i++
        // Criação do fecho da linha
        if (i % 3 === 0) {
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


    //adição dos listeners em cada uma das cartas para os butões "ver mais"
    for (const card of cards) {
        // Aplicação do filtro
        if (search != "" && !card.name.toLowerCase().includes(search)) {
            //search
            continue;
        }

        if (filterName != "" && !card.category.toLowerCase().includes(filterName)) {
            //filtros
            continue;
        }


        document.getElementById(card.name).addEventListener("click", function () {
            sessionStorage.setItem("displayCard", JSON.stringify(card))
        })

    }

}


//Função que devolve o array de cartas que o utilizador pussui com base nas categorias que desbloquiou
export function getUserCards(categories) {

    let newCards = []

    let cards = JSON.parse(localStorage.getItem("cards"))

    for (const card of cards) {

        for (const category of categories) {
            if (card.category == category) {
                newCards.push(card)
            }
        }
    }
    return newCards
}

//Função que vai buscar as categorias desbloquadas pelo utilizador
export function getUserCollection(username) {

    let users = JSON.parse(localStorage.getItem("users"))

    for (const user of users) {
        if (user.username == username) {
            return user.cardCollection
        }
    }

}