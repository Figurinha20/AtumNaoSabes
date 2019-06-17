import {getUserData} from "../controllers/controlsNavbar.js"
import {getUserImg} from "../controllers/controlSuggestions.js"
import {getUserCards} from "../controllers/controlsCatalog.js"

//get currentUser
let currentUser = sessionStorage.getItem("currentUser");

//get all the data from the current user into an array
let userDataArray = getUserData(currentUser); 
//data = [user.adminStat, user.experience, user.level, user.profilePicture, user.password, user.cardCollection]


let suggestions = JSON.parse(localStorage.getItem("suggestions"))

//get max number of cards the user can get
let cards = JSON.parse(localStorage.getItem("cards"))
let cardsMAX = cards.length

//get the number of cards the user has
let cardsCollected = getUserCards(userDataArray[5]).length


//find out the users' title (depends on his level)
let currentUserTitle = getUserTitle(userDataArray[2])
let currentUserTitleMessage = getUserTitleMessage(userDataArray[2])

if(userDataArray[2] > 10 ){ //exception for if the user is past max prestige
    currentUserTitle = "Tubarão"
    currentUserTitleMessage = "Faminto para aprender"
} 
else if(userDataArray[0] == true){ //exception for if the user is an admmin
    currentUserTitle = "Atum"
    currentUserTitleMessage = "Conta de Administrador"
}


//adapt profile to current user
let img = document.querySelector("#currentUserImg")
img.src = userDataArray[3]

let userName = document.querySelector("#currentUserName")
userName.innerHTML = currentUser

let userLvl = document.querySelector("#currentUserLvl")
userLvl.innerHTML = "Lvl." + userDataArray[2] 

let userTitle = document.querySelector("#currentUserTitle")
userTitle.innerHTML = currentUserTitle

let userTitleMessage = document.querySelector("#currentUserTitleMessage")
userTitleMessage.innerHTML = currentUserTitleMessage

let userNextLvl = document.querySelector("#currentUserNextLvl")
userNextLvl.innerHTML = "Lvl." + (userDataArray[2] + 1)

//mudar barra de XP é lixado, espero que dê
let userExp = document.querySelector("#currentUserExp")
userExp.innerHTML = userDataArray[1]
userExp.style.width = userDataArray[1] + "%"
userExp.setAttribute("aria-valuenow", userDataArray[1])

let collection = document.querySelector("#txtCollection")
collection.innerHTML = "Peixes Colecionados:<br>" + cardsCollected + "/" + cardsMAX


renderFilteredSuggestions(suggestions)


//form para mudar password
const myForm = document.querySelector("#form")

myForm.addEventListener("submit", function(event){
    let newPass = document.querySelector("#newPasse").value
    let confirmPass = document.querySelector("#currentPasse").value

    if (confirmPass != newPass){
        alert("Passwords não são iguas, tenta outra vez!")
    }
    else{
        let users = JSON.parse(localStorage.getItem("users"))

        for (const user of users){
            if (user.username == currentUser){
                user.password = newPass
            }
        }

        localStorage.setItem("users", JSON.stringify(users))
        
        alert("Sucesso! ")
    }

    newPass.value = ""
    confirmPass.value = ""

    event.preventDefault()
})


//-----------------------------------------------------Functions-------------------------------------------------------------------------------------------------------------
//list prestige names
function getUserTitle(userLevel) {
let prestige = ["Isca", "Peixe Palhaço", "Sardinha", "Faneca", "Carapau", "Dourada", "Tamboril", "Lula", "Espadarte", "Tubarão"]

let userTitle = prestige[userLevel - 1]

return userTitle
}

//list prestige message
function getUserTitleMessage(userLevel) {
    let prestige = ["Cheio de Potencial!", "Que comece a Palhaçada!", "Já Pesca Mais!", "Bronze no Pódio!", "Pronto para a Corrida!", "Nº1 dos Cozidos!", "Intimidante!", "Rumo ao Colossal!", "Esgrima o Conhecimento!", "Faminto para Aprender!"]
    
    let userTitleMessage = prestige[userLevel - 1]
    
    return userTitleMessage
}

function renderFilteredSuggestions(suggestions){
    let suggestIcon = "../img/Star.png"
    const mySuggestions = document.querySelector("#divForSuggestions") 
    let result = ""

    for(const suggestion of suggestions){

        //filter the suggestions to only show the users suggestions
        if (suggestion.username == currentUser){
        // get imagem do utilizador}
        let img =  getUserImg(suggestion.username)

        if (suggestion.approval == true){
            suggestIcon ="../img/Star Colored.png"
        }
        else if (suggestion.disapproval == true){
            suggestIcon = "../img/Downvote Colored.png"
        }

        
        result +=       `<div class="row">
        <div class="col-sm-1">
            <img 
                src= ${img}
                height="60x" width="60px">
        </div>
        <div class="col-sm-3">
            <h6 >${suggestion.username}</h6>
            <p >${suggestion.message}</p>
        </div>
        <div class="col-sm-7">
        </div>
        <div class="col-sm-1">
        <input class="btnStar" id="${suggestion.message}" type="image" src="${suggestIcon}" height="35px" width="35px" disabled>
        <p>${suggestion.date}</p>
        </div>
        
    </div>

    `

    }

    //clickStar()

    if(result != ""){
    mySuggestions.innerHTML = result;
    }
}
}


