//Import the Suggestion Model
import {Suggestion} from "../models/Suggestion.js";
import {getUserImg} from "../controllers/controlSuggestions.js"

let suggestions = JSON.parse(localStorage.getItem("suggestions"))

renderSuggestions(suggestions);

/* Esta bosta não dá
function clickStar(){
    const btnStars = document.getElementsByClassName("btnStar")
    console.log(btnStars);
    console.log("desisto")
    
    for (const elem of btnStars) {
        console.log(elem)
        elem.addEventListener("click", function () {
            approved(this.id)
            console.log("ola")
        })

    }

}

function approved(messages){
    for (const suggestion of suggestions) {
        if (suggestion.message == messages) {
            alert(messages)
        }
    }
}
´*/


//Renderizar Sugestões
function renderSuggestions(suggestions){
    let approvalStar = ""
    const mySuggestions = document.querySelector("#divForSuggestions") 
    let result = ""
    let counter = 0

    //Escolher qual estrela usar
    for(const suggestion of suggestions){

        // get imagem do utilizador
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

    document.getElementById(suggestion.message).addEventListener("click", approval(suggestion.message))

    counter ++
    }

    //clickStar()

    mySuggestions.innerHTML = result;
}



function approval(suggestionToApprove){
    for(suggestion of suggestions){
        if (suggestion == suggestionToApprove){
            suggestion.approval = true
        }
    }
    
    location.reload()
}

