//Import the Suggestion Model
import {Suggestion} from "../models/Suggestion.js";
import {getUserImg} from "../controllers/controlSuggestions.js"

let suggestions = JSON.parse(localStorage.getItem("suggestions"))

renderSuggestions(suggestions);


//Renderizar Sugestões
function renderSuggestions(suggestions){
    let approvalStar = ""
    let disapprovalDownvote = ""
    const mySuggestions = document.querySelector("#divForSuggestions") 
    let result = ""
    let counter = 0

    
    for(const suggestion of suggestions){

        
        let img =  getUserImg(suggestion.username)

        //Find out which Star Image and Downvote image to use
        if (suggestion.approval == true){
            approvalStar="../img/Star Colored.png"
        }
        else{
            approvalStar="../img/Star.png"
        }

        if (suggestion.disapproval == true){
            disapprovalDownvote = "../img/Downvote Colored.png"
        }
        else{
            disapprovalDownvote = "../img/Downvote.png"
        }
        
        
        result +=       `<div class="row">
        <div class="col-sm-1">
            <img 
                src= ${img}
                height="60x" width="60px">
        </div>
        <div class="col-sm-3">
            <h6 >${suggestion.username}</h6>
            <p>${suggestion.message}</p>
        </div>
        <div class="col-sm-6">
        </div>
        <div class="col-sm-2">
        <input class="btnStar" id="${suggestion.message}" type="image" src="${approvalStar}" height="35px" width="35px">
        <input class="btnStar" id="downvote-${suggestion.message}" type="image" src="${disapprovalDownvote}" height="35px" width="35px">
        <p>${suggestion.date}</p>
        </div>
            
    </div>

    `

    

    counter ++
    }

    //clickStar()

    mySuggestions.innerHTML = result;
}

//Event Listeners to approve a suggestion
for(const suggestion of suggestions){
    document.getElementById(suggestion.message).addEventListener("click", function (){

        let suggestionToApprove = suggestion.message
    
        for(const suggestion of suggestions){
            if (suggestion.message == suggestionToApprove){
                suggestion.approval = true
                suggestion.disapproval = false

                document.getElementById(suggestion.message).src = "../img/Star Colored.png"
                document.getElementById("downvote-" + suggestion.message).src = "../img/Downvote.png"
            }
        }

        localStorage.setItem("suggestions", JSON.stringify(suggestions))

        
})
}

//Event Listeners to disapprove a suggestion
for(const suggestion of suggestions){
    document.getElementById("downvote-" + suggestion.message).addEventListener("click", function (){

        let suggestionToApprove = suggestion.message
    
        for(const suggestion of suggestions){
            if (suggestion.message == suggestionToApprove){
                suggestion.approval = false
                suggestion.disapproval = true

                document.getElementById(suggestion.message).src = "../img/Star.png"
                document.getElementById("downvote-" + suggestion.message).src = "../img/Downvote Colored.png"
            }
        }

        localStorage.setItem("suggestions", JSON.stringify(suggestions))

        
})
}