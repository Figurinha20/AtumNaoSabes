//Import the Suggestion Model
import {Suggestion} from "../models/Suggestion.js";
import {getUserImg} from "../controllers/controlSuggestions.js"

function renderSuggestions(){

    let suggestions = JSON.parse(localStorage.getItem("suggestions"))
    let currentUser = localStorage.getItem("currentUser")

    counter = 0

    for (const suggestion of suggestions){

        // get imagem do utilizador
        let img =  getUserImg(currentUser)
        // get dados da suggest

        
        let message = suggestion.message
        
         
        let date = suggestion.date
        let approval = suggestion.approval

        //adicionar no modelo
        suggestionsHtml+=`
        <div class="row">
            <div class="col-sm-1">
                <img 
                    src= ${img}
                    height="60x" width="60px">
            </div>
            <div class="col-sm-3">
                <h6 >${currentUser}</h6>
                <p >${message}</p>
            </div>
            <div class="col-sm-7">
            </div>
            <div class="col-sm-1">
        `


        //if como boolean
        if(approval){
            suggestionsHtml+=`
            <input id="btnStar${counter}" type="image" src="../img/Star Colored.png" height="35px" width="35px">
            </div>
            
        </div>`

        }else{
            suggestionsHtml+=`
            <input id="btnStar${counter}" type="image" src="../img/Star.png" height="35px" width="35px">
            </div>
            
        </div>`
        }
        

    }

    document.querySelector("#divForSuggestions").innerHTML = suggestionsHtml
    
}