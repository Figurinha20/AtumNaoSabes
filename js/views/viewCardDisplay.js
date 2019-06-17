import {getUserData} from "../controllers/controlsNavbar.js"
import {Comment} from "../models/Comment.js"
import {updateCard} from "../controllers/controlsCardDisplay.js"

//get admin stat a partir de currentUser
let currentUser = sessionStorage.getItem("currentUser")
let userDataArray = getUserData(currentUser)

//get da carta da session storage + array de comentários
let comments = []
let displayedCard = JSON.parse(sessionStorage.getItem("displayCard"))
comments = displayedCard.comments


//elementos fora da carta
let displayedDescription = document.querySelector("#displayedCardDiscription")
let displayedMedia = document.querySelector("#displayedCardMedia")
let commentContainer = document.querySelector("#commentContainer")
let commentTextArea = document.querySelector("#commentArea")
commentTextArea.value = ""

//elementos da carta
let cardName = document.querySelector("#cardName")
let displayedCategory = document.querySelector("#cardText")
let cardImg = document.querySelector("#cardImg")
let cardRank = document.querySelector("#cardRank")
let cardComments = document.querySelector("#cardComments")

// butão like
let likeBtn= document.querySelector("#likeBtn")

loadDisplay()

//Função para adicionar um comentário
document.querySelector("#commentForm").addEventListener("submit", function(event){
    if(!commentTextArea.value == ""){
        let newComment = new Comment(currentUser, userDataArray[3], commentTextArea.value)

        alert(commentTextArea.value)

        comments.push(newComment)
        displayedCard.comments = comments
        sessionStorage.setItem("displayCard", JSON.stringify(displayedCard))

        loadDisplay()

        commentTextArea.value = ""

        updateCard(displayedCard)
    }
    event.preventDefault()
})







function loadDisplay(){

cardName.innerHTML = displayedCard.name
displayedCategory.innerHTML = displayedCard.category
cardImg.src = displayedCard.img
cardRank.innerHTML = displayedCard.rank + "/5"
displayedDescription.innerHTML = displayedCard.description
cardComments.innerHTML = displayedCard.comments.length

//variavel que define se o butão para remover se mostra ou não (isto é determinado com o adminStat)
let btnClass
if(userDataArray[0]){
    btnClass = "btn-remove"
}else{
    btnClass = "hidden"
}

//counter para definir ids únicos
let counter = 0

for (const comment of comments) {

    //ONDE FICA A DATE??? comment.date
    commentContainer.innerHTML +=`
    <div class="row">
            <div class="col-sm-1">
                <img id="imgComment"
                    src="${comment.userImg}"
                    height="60x" width="60px">
                    <input class="${btnClass}" id="${comment.commentText}-${counter}" type="button" value="Remover">
            </div>
            <div class="col-sm-3">
                <h6 id="userComment">${comment.userName}</h6>
                <p id="txtComment">${comment.commentText}</p>
            </div>
            <div class="col-sm-8">
            </div>
        </div>
        <div class="row">
            <hr>
        </div>
    `
    counter++
    
}


counter = 0

for(const comment of comments){
    document.getElementById(comment.commentText + "-" + counter).addEventListener("click", function (){

        let suggestionToApprove = suggestion.message
    
        for(const comment of comments){
            if (suggestion.message == suggestionToApprove){
                suggestion.approval = true

                document.getElementById(suggestion.message).src = "../img/Star Colored.png"
            }
        }

        localStorage.setItem("suggestions", JSON.stringify(suggestions))

        
})

counter++
}


}


