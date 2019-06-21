import {
    renderCatalog,
    getAllCats,
    getUserCollection,
    getUserCards
} from "../controllers/controlsCatalog.js"
import {
    getUserData
} from "../controllers/controlsNavbar.js";

let cards = []
let currentUser

//se não há user autenticado skip do GET e mostra apenas cartas da categoria default "Grande Azul" utilizando o array de cards inalterado
if (sessionStorage.getItem("currentUser") === null) {

    cards = JSON.parse(localStorage.getItem("cards"))

    //Quando não se está autenticado apenas uma categoria está disponivel por isso a combo box fica obsoleta
    document.querySelector("#sltFilter").value = "Grande Azul"
    document.querySelector("#divForFilter").className = "hidden"

    //"grande azul" em vez de "Grande Azul" pk a função compara valores sempre em lower case
    renderCatalog("grande azul", "", cards)


} else {

    let categories
    currentUser = sessionStorage.getItem("currentUser")
    let userDataArray = getUserData(currentUser)
    //[user.adminStat, user.experience, user.level, user.profilePicture ]

    //se for admin GET all categories com todas as cartas existentes
    if (userDataArray[0]) {
        cards = JSON.parse(localStorage.getItem("cards"))
        categories = getAllCats()
        //meow cats uwu
    } else {
        //else getUserCollection
        categories = getUserCollection(currentUser)

        cards = getUserCards(categories)

    }

    //injetar categorias na combo box
    for (const category of categories) {
        //impedir que Grande Azul seja adicionado 2 vezes
        if(category != "Grande Azul"){
            document.querySelector("#sltFilter").innerHTML += `
            <option value="${category}">${category}</option>`
        }
       
    }

    renderCatalog("", "", cards)

}




//reorganizar alfabeticamente
let btnAZ = document.querySelector("#myCatalogOrder")
btnAZ.addEventListener("click", function () {
    let search = document.querySelector("#txtSearch").value.toLowerCase()
    let filterName = document.querySelector("#sltFilter").value.toLowerCase()

    if (btnAZ.value == "A - Z") {
        btnAZ.value = "Z - A"

        //function usa sort + função comparadora para ordenar cards alfabeticamente por card.name
        cards.sort(function (a, b) {
            if (a.name < b.name) { //return -1 para a ser colocada antes de b
                return -1;
            }
            if (a.name > b.name) { //return 1 para a ser colocada depois de b
                return 1;
            }
            return 0; // return 0 não ordena

       
        })

        renderCatalog(filterName, search, cards)

    }else if ( btnAZ.value == "Z - A") {
        btnAZ.value = "A - Z"

        cards.reverse()

        renderCatalog(filterName, search, cards)
    }

})







//eventlisteners => onseacrh ou onclick = refresh
document.querySelector("#formSearch").addEventListener("submit", function (event) {
    let search = document.querySelector("#txtSearch").value.toLowerCase()
    let filterName = document.querySelector("#sltFilter").value.toLowerCase()


    event.preventDefault()

    renderCatalog(filterName, search, cards)

})


document.querySelector("#sltFilter").addEventListener("click", function (event) {
    let search = document.querySelector("#txtSearch").value.toLowerCase()
    let filterName = document.querySelector("#sltFilter").value.toLowerCase()


    event.preventDefault()

    renderCatalog(filterName, search, cards)

})