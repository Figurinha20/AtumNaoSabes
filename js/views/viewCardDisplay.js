import {
    getUserData
} from "../controllers/controlsNavbar.js"
import {
    Comment
} from "../models/Comment.js"
import {
    updateCard
} from "../controllers/controlsCardDisplay.js"
import {
    Rating
} from "../models/Rating.js"

//get dados do utilizador a partir de currentUser
let currentUser = sessionStorage.getItem("currentUser")
if (currentUser != null) {
    let userDataArray = getUserData(currentUser)
}


//get da carta da session storage + array de comentários
let comments = []
let ratings = []
let mediasAudio = []
let mediasVideo = []
let displayedCard = JSON.parse(sessionStorage.getItem("displayCard"))
comments = displayedCard.comments
ratings = displayedCard.ratings
mediasAudio = displayedCard.audios
mediasVideo = displayedCard.videos


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


loadDisplay()

loadMedia()

loadComments()

setRatingListeners()



//Função para adicionar um comentário
document.querySelector("#commentForm").addEventListener("submit", function (event) {
    if (currentUser == null) {
        alert("Precisas de fazer Login para comentares!")
        event.preventDefault()
        return;

    }

    if (!commentTextArea.value == "") {
        let newComment = new Comment(currentUser, userDataArray[3], commentTextArea.value)


        comments.push(newComment)
        displayedCard.comments = comments
        sessionStorage.setItem("displayCard", JSON.stringify(displayedCard))

        loadComments()

        commentTextArea.value = ""

        updateCard(displayedCard)
    }
    event.preventDefault()
})








function loadDisplay() {

    //load dos dados a partir da displayedCard
    cardName.innerHTML = displayedCard.name
    displayedCategory.innerHTML = displayedCard.category
    cardImg.src = displayedCard.img
    cardRank.innerHTML = displayedCard.rank + "/5"
    displayedDescription.innerHTML = displayedCard.description
    cardComments.innerHTML = displayedCard.comments.length

    //se utilizador já deu uma rating as estrelinhas mudam
}




function loadComments() {

    //load comentários

    if (currentUser == null) {
        commentContainer.innerHTML = "Cria uma conta e junta-te aos comentários! Com uma conta podes ler e fazer comentários em cartas!"
        return;
    }

    //variavel que define se o butão para remover se mostra ou não (isto é determinado com o adminStat)
    let btnClass
    if (userDataArray[0]) {
        btnClass = "btn-remove"
    } else {
        btnClass = "hidden"
    }

    //counter para definir ids únicos
    let counter = 0

    //variavel para html
    let result

    for (const comment of comments) {

        result += `
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
            <div class="col-sm-6">
            </div>
            <div class="col-sm-2">
            <p>${comment.date}</p>
            </div>
        </div>
        
        <div class="row">
            <hr>
        </div>
    `
        counter++

    }

    //injetar
    if (result != undefined) {
        commentContainer.innerHTML = result


        let i = 0
        let uniqueId

        for (const comment of comments) {

            uniqueId = comment.commentText + "-" + i

            document.getElementById(uniqueId).addEventListener("click", function () {


                let commentTextToRemove = uniqueId

                let j = 0
                let newComments = []

                for (const comment of comments) {
                    if (comment.commentText + "-" + j == commentTextToRemove) {
                        j++
                    } else {

                        newComments.push(comment)
                        j++
                    }


                }


                displayedCard.comments = newComments
                sessionStorage.setItem("displayCard", JSON.stringify(displayedCard))

                updateCard(displayedCard)

                location.reload()


            })

            i++
        }

    } else {
        result = "Esta carta ainda não tem comentários!"
        commentContainer.innerHTML = result
    }



}




function loadMedia() {

    let result = ""

    if (mediasAudio != []) {
        for (const audio of mediasAudio) {
            result += `
            <div class="row">
            <hr>
            </div>
            <div class="row">
                <audio controls>
                <source src="${audio}" type="url">
                </audio>
            </div>`
        }
    }


    if (mediasVideo != []) {
        for (const video of mediasVideo) {
            result += `
            <div class="row">
            <hr>
            </div>
            <div class="row">
            <iframe width="560" height="315" src="${video}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>`
        }
    }


    displayedMedia.innerHTML = result

}


//Function for setting the rating of the card
function setRatingListeners() {
    let coloredStar = "../img/Star Colored.png"
    let emptyStar = "../img/Star.png"

    for (let i = 0; i < 5; i++) {

        document.getElementById(i).addEventListener("click", function () {

            if (currentUser == null) {
                alert("Não podes deixar uma classificação numa carta sem estares ligado com uma conta!")
                return;
            }


            //Color in the star
            for (let j = 0; j < i + 1; j++) {
                document.getElementById(j).src = coloredStar
            }

            //numero de estrelas na rating
            let starNumber = i + 1

            //Take away the stars' color
            for (let k = starNumber; k < 5; k++) {
                document.getElementById(k).src = emptyStar
            }

            //testar se utilizador já deu uma rating se deu altera se sim adiciona ao array
            let firstTimeRating = true
            for (const rate of ratings) {
                if (rate.username == currentUser) {

                    rate.rating = starNumber
                    firstTimeRating = false
                }
            }

            if (firstTimeRating) {
                ratings.push(new Rating(currentUser, starNumber))
            }


            sessionStorage.setItem("displayCard", JSON.stringify(displayedCard))

            updateCard(displayedCard)

            location.reload()

        })

    }
}