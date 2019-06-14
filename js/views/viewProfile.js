import {getUserData} from "../controllers/controlsNavbar.js"
//get all users
let users = JSON.parse(localStorage.getItem("users"));
//get currentUser
let currentUser = localStorage.getItem("currentUser");

let userDataArray = getUserData(currentUser);

//find out the users' title (depends on his level)
let currentUserTitle = getUserTitle(userDataArray[2])
//if the user is an admin, his title is "Atum"
if(userDataArray[0] = true){
    currentUserTitle = "Atum"
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

let userNextLvl = document.querySelector("#currentUserNextLvl")
userNextLvl.innerHTML = "Lvl." + (userDataArray[2] + 1)

//mudar barra de XP é lixado
let userExp = document.querySelector("#currentUserExp")
userExp.innerHTML = userDataArray[1]
userExp.style.width = userDataArray[1] + "%"
userExp.setAttribute("aria-valuenow", userDataArray[1])

//list prestige names
function getUserTitle(userLevel) {
let prestige = ["Isca", "Peixe Palhaço", "Sardinha", "Faneca", "Carapau", "Dourada", "Tamboril", "Lula", "Espadarte", "Tubarão"]

let userTitle = prestige[userLevel - 1]

return userTitle
}

function getUserTitleMessage(userLevel) {
    let prestige = ["Cheio de Potencial!", "Que comece a Palhaçada!", "Já Pesca Mais!", "Bronze no Pódio!", "Pronto para a Corrida!", "Nº1 dos Cozidos!", "Intimidante!", "Rumo ao Colossal!", "Esgrima o Conhecimento!", "Faminto para Aprender!"]
    
    let userTitleMessage = prestige[userLevel - 1]
    
    return userTitleMessage
}


//data = [user.adminStat, user.experience, user.level, user.profilePicture, user.password, user.cardCollection]