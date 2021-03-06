import {getUserData} from "../controllers/controlsNavbar.js"
import {getUserImg} from "../controllers/controlSuggestions.js"
import {getUserCards} from "../controllers/controlsCatalog.js"
import {getUserTitle, getUserTitleMessage} from "../controllers/controlsProfile.js"



//"corta-atalhos": Impedir que meninos malandros acedam a esta página sem ter conta necessária (neste caso uma qualquer)
window.addEventListener("load", function (event) {
    let currentUser = sessionStorage.getItem("currentUser")
   
    if (currentUser == null) {
        location.href = "../html/index.html"
    } 
})



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

//If the user is an admmin, give him a way to change other´s user permissions, if not render the user's suggestions
if (userDataArray[0] == true){
    userManager()
}
else{
    renderFilteredSuggestions(suggestions)
}



//form para mudar password
const myForm = document.querySelector("#form")

myForm.addEventListener("submit", function(event){
    let newPass = document.querySelector("#renewPass").value
    let confirmPass = document.querySelector("#renewPassConfirm").value

    if (confirmPass != newPass){
        Swal.fire({
            type: 'warning',
            title: "Passwords não são iguas, tenta outra vez!",
          })   
    }
    else{
        let users = JSON.parse(localStorage.getItem("users"))

        for (const user of users){
            if (user.username == currentUser){
                user.password = newPass
            }
        }

        localStorage.setItem("users", JSON.stringify(users))
        
        Swal.fire({
            type: 'success',
            title: "Sucesso!",
          })   
    }

    newPass.value = ""
    confirmPass.value = ""

    event.preventDefault()
})



//-----------------------------------------------------Functions-------------------------------------------------------------------------------------------------------------

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

    if(result != ""){
    mySuggestions.innerHTML = result;
    }
}
}


//function to give user admin permissions
function userManager(){

    const mySuggestions = document.querySelector("#divForSuggestions") 
    let result = ""

    let users = JSON.parse(localStorage.getItem("users"))

    for(const user of users){
        let name = user.username
        let img = user.profilePicture
        let adminStat  = user.adminStat

        //You can only see non admin users
        if(adminStat == false){
        result +=       
        `<div class="row">
        <div class="col-sm-1">
            <img 
                src= ${img}
                height="60x" width="60px">
        </div>
        <div class="col-sm-3">
            <h6 >${name}</h6>
        </div>
        <div class="col-sm-6">
        </div>
        <div class="col-sm-2">
        <input class="btn" id="${name}" type="button" value="Tornar Admin">
        </div>
        
    </div>

    <hr>

    `}

    }

    mySuggestions.innerHTML = result;

    document.getElementById("txtUserSuggestions").innerHTML = "Gestão de Utilizadores"

    //Adicionar event listeners
    for(const user of users){
        if(user.adminStat == false){
        let name = user.username
        document.getElementById(name).addEventListener("click", function(){

            //Pensamos em tornar este processo reversivel, mas um mau admin podia tirar o adminStat a outros admins sem razão logo achamos que não era boa idea
            let confirmation = confirm("De certeza que quer tornar o utilizador " + name + " um administrador? Este processo é irreversivel!")

            if(confirmation == true){
            for (const user of users){
                if (user.username == name){
                    user.adminStat = true
                }
            }

            localStorage.setItem("users", JSON.stringify(users))
            location.reload()
        }
        })
    }
}
}
