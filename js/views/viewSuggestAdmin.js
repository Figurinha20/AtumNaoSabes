//Import the Suggestion Model
import {
    getUserImg
} from "../controllers/controlSuggestions.js"
import {
    levelManager
} from "../controllers/controlQuiz.js"
import {
    getUserData
} from "../controllers/controlsNavbar.js"

//"corta-atalhos": Impedir que meninos malandros acedam a esta página sem ter conta necessária (neste caso admin)
window.addEventListener("load", function (event) {
    let currentUser = sessionStorage.getItem("currentUser")
    let userDataArray
    if (currentUser != null) {
        userDataArray = getUserData(currentUser)
        if (getUserData[0] == false) {
            location.href = "../html/index.html"
        }
    } else {
        location.href = "../html/index.html"
    }
})



let suggestions = JSON.parse(localStorage.getItem("suggestions"))
let users = JSON.parse(localStorage.getItem("users"))

renderSuggestions(suggestions);

//Recompensa por ua boa sugestão
let suggestionReward = 50


//Renderizar Sugestões
function renderSuggestions(suggestions) {
    let approvalStar = ""
    let disapprovalDownvote = ""
    const mySuggestions = document.querySelector("#divForSuggestions")
    let result = ""


    for (const suggestion of suggestions) {


        let img = getUserImg(suggestion.username)

        //Find out which Star Image and Downvote image to use
        if (suggestion.approval == true) {
            approvalStar = "../img/Star Colored.png"
        } else {
            approvalStar = "../img/Star.png"
        }

        if (suggestion.disapproval == true) {
            disapprovalDownvote = "../img/Downvote Colored.png"
        } else {
            disapprovalDownvote = "../img/Downvote.png"
        }


        result += `<div class="row">
        <div class="col-sm-1">
            <img 
                src= ${img}
                height="60x" width="60px">
        </div>
        <div class="col-sm-3">
            <h6 >${suggestion.username}</h6>
            <p class="not-Lobster">${suggestion.message}</p>
        </div>
        <div class="col-sm-6">
        </div>
        <div class="col-sm-2">
        <input class="btnStar" id="${suggestion.message}" type="image" src="${approvalStar}" height="35px" width="35px">
        <input class="btnStar" id="downvote-${suggestion.message}" type="image" src="${disapprovalDownvote}" height="35px" width="35px">
        <p>${suggestion.date}</p>
        </div>
            
    </div>

    <hr>

    `

    }

    //clickStar()

    mySuggestions.innerHTML = result;
}

//Event Listeners para aprovar um sugestão
for (const suggestion of suggestions) {
    document.getElementById(suggestion.message).addEventListener("click", function () {

        let suggestionToApprove = suggestion.message
        let userToReward = suggestion.username

        for (const suggestion of suggestions) {
            if (suggestion.message == suggestionToApprove) {
                for (const user of users) {
                    //Dar 50% exp ao utilizador por uma boa sugestão (queremos incentivar sugestões)
                    if (user.username == userToReward && suggestion.approval != true) {
                        levelManager(user, suggestionReward)
                    }
                }

                suggestion.approval = true
                suggestion.disapproval = false

                document.getElementById(suggestion.message).src = "../img/Star Colored.png"
                document.getElementById("downvote-" + suggestion.message).src = "../img/Downvote.png"
            }
        }

        localStorage.setItem("suggestions", JSON.stringify(suggestions))
        localStorage.setItem("users", JSON.stringify(users))


    })
}

//Event Listeners para não aprovar
for (const suggestion of suggestions) {
    document.getElementById("downvote-" + suggestion.message).addEventListener("click", function () {

        let suggestionToApprove = suggestion.message
        let userToReward = suggestion.username

        for (const suggestion of suggestions) {
            if (suggestion.message == suggestionToApprove) {
                //Reward User
                for (const user of users) {
                    //É retirado exp ao utilizador apenas se o admin aprobou a sugestão sem querer e emenda (normalmente o utilizador não é penalizado por uma boa sugestão)
                    if (user.username == userToReward && suggestion.approval == true) {
                        levelManager(user, -suggestionReward)
                    }
                }
                suggestion.approval = false
                suggestion.disapproval = true

                document.getElementById(suggestion.message).src = "../img/Star.png"
                document.getElementById("downvote-" + suggestion.message).src = "../img/Downvote Colored.png"
            }
        }

        localStorage.setItem("suggestions", JSON.stringify(suggestions))
        localStorage.setItem("users", JSON.stringify(users))

    })
}