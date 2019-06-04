//Import the Suggestion Model
import {Suggestion} from "../models/Suggestion.js";
import {getUserImg} from "../controllers/controlSuggestions.js"

window.addEventListener("load", function (event){

    let suggestions = JSON.parse(localStorage.getItem("suggestions"))
    

    let counter = 0
    let suggestionsHtml

    for (const suggestion of suggestions){

        // get imagem do utilizador
        let img =  getUserImg(suggestion.username)
        // get dados da suggest
        console.log(img + " " + suggestion.username)
        
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
                <h6 >${suggestion.username}</h6>
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
            <p> ${date} </p>
            </div>
            
        </div>`
        }
        

    }

    document.querySelector("#divForSuggestions").innerHTML = suggestionsHtml
    
})