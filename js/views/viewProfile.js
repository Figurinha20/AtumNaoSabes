import {getUserData} from "../controllers/controlsNavbar.js"
import {getUserImg} from "../controllers/controlSuggestions.js"

//get currentUser
let currentUser = localStorage.getItem("currentUser");

//get all the data from the current user into an array
let userDataArray = getUserData(currentUser);

let suggestions = JSON.parse(localStorage.getItem("suggestions"))


//find out the users' title (depends on his level)
let currentUserTitle = getUserTitle(userDataArray[2])
let currentUserTitleMessage = getUserTitleMessage(userDataArray[2])
if(userDataArray[0] == true){
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


renderFilteredSuggestions(suggestions)


///-----------------------------------------------------Functions-----------------------------------------------
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
    let approvalStar = ""
    const mySuggestions = document.querySelector("#divForSuggestions") 
    let result = ""
    let counter = 0

    for(const suggestion of suggestions){

        //filter the suggestions to only show the users suggestions
        if (suggestion.username == currentUser){
        // get imagem do utilizador}
        let img =  getUserImg(suggestion.username)

        if (suggestion.approval == true){
            approvalStar="../img/Star Colored.png"
        }
        else{
            approvalStar="../img/Star.png"
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
        <input class="btnStar" id="${suggestion.message}" type="image" src="${approvalStar}" height="35px" width="35px">
        <p>${suggestion.date}</p>
        </div>
        
    </div>

    `

    
    counter ++
    }

    //clickStar()

    mySuggestions.innerHTML = result;
}
}


//data = [user.adminStat, user.experience, user.level, user.profilePicture, user.password, user.cardCollection]