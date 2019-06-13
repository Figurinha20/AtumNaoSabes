import {renderCatalog,  getAllCats} from "../controllers/controlsCatalog.js"
import {getUserData} from "../controllers/controlsNavbar.js";

let cards = []
let currentUser = localStorage.getItem("currentUser")

//se não há user autenticado skip deste GET e mostra apenas cartas da categoria default Grande Azul
if (currentUser != "") {


    userDataArray = getUserData(currentUser)
    //[user.adminStat, user.experience, user.level, user.profilePicture ]

    //se for admin GET all categories 
    if (userDataArray[0]) {
        cards = JSON.parse(localStorage.getItem("cards"))
        let categories = getAllCats()
        //meow
        console.log(categories)


        //injetar categorias na combo box
        for (const category of categories) {
            document.querySelector("#sltFilter").innerHTML += `
            <option value="${category}">${category}</option>`
        }

    }else{
        //else getUserCollection
    }


}else{
    cards = JSON.parse(localStorage.getItem("cards"))

    //Quando não se está autenticado apenas uma categoria está disponivel por isso a combo box fica obsoleta
    document.querySelector("#sltFilter").value = "Grande Azul"
    document.querySelector("#divForFilter").className = "hidden"


    renderCatalog("Grande Azul", "")
}








//eventlisteners => onseacrh ou onclick = refresh
document.querySelector("#formSearch").addEventListener("submit", function (event) {
    let search = document.querySelector("#txtSearch").value.toLowerCase()
    let filterName = document.querySelector("#sltFilter").value.toLowerCase()


    event.preventDefault()

    renderCatalog(filterName, search)

})


document.querySelector("#sltFilter").addEventListener("click", function (event) {
    let search = document.querySelector("#txtSearch").value.toLowerCase()
    let filterName = document.querySelector("#sltFilter").value.toLowerCase()


    event.preventDefault()

    renderCatalog(filterName, search)

})