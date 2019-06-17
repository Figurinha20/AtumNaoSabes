import {renderCatalog,  getAllCats, getUserCollection, getUserCards} from "../controllers/controlsCatalog.js"
import {getUserData} from "../controllers/controlsNavbar.js";

let cards = []
let currentUser 
console.log(sessionStorage.getItem("currentUser") === null);

//se não há user autenticado skip do GET e mostra apenas cartas da categoria default "Grande Azul" utilizando o array de cards inalterado
if (sessionStorage.getItem("currentUser") === null) {

    cards = JSON.parse(localStorage.getItem("cards"))

    //Quando não se está autenticado apenas uma categoria está disponivel por isso a combo box fica obsoleta
    document.querySelector("#sltFilter").value = "Grande Azul"
    document.querySelector("#divForFilter").className = "hidden"

    //"grande azul" em vez de "Grande Azul" pk a função compara valores sempre em lower case
    renderCatalog("grande azul", "", cards)


}else{
  
    let categories
    currentUser = sessionStorage.getItem("currentUser")
    let userDataArray = getUserData(currentUser)
    //[user.adminStat, user.experience, user.level, user.profilePicture ]

    //se for admin GET all categories com todas as cartas existentes
    if (userDataArray[0]) {
        cards = JSON.parse(localStorage.getItem("cards"))
        categories = getAllCats()
       //meow cats uwu
    }else{
        //else getUserCollection
        categories = getUserCollection(currentUser)
        
        cards = getUserCards(categories)
        
    }

     //injetar categorias na combo box
     for (const category of categories) {
        document.querySelector("#sltFilter").innerHTML += `
        <option value="${category}">${category}</option>`
    }

    renderCatalog("", "", cards)

}








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