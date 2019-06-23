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
let userDataArray = []
if (currentUser != null) {
    userDataArray = getUserData(currentUser)
    // [user.adminStat, user.experience, user.level, user.profilePicture, user.password, user.cardCollection]
}

//carta em display
let displayedCard


//arrays a retirar da carta e reutilizar
let comments = []
let ratings = []
let mediasAudio = []
let mediasVideo = []

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

setRatingListeners()



//Função para adicionar um comentário
document.querySelector("#commentForm").addEventListener("submit", function (event) {
    if (currentUser == null) {
        Swal.fire({
            type: 'warning',
            title: 'Precisas de fazer Login para comentares!',
        })

        event.preventDefault()
        return;

    }

    if (!commentTextArea.value == "") {
        let newComment = new Comment(currentUser, userDataArray[3], commentTextArea.value)


        comments.push(newComment)
        displayedCard.comments = comments
        sessionStorage.setItem("displayCard", JSON.stringify(displayedCard))

        loadDisplay()

        commentTextArea.value = ""

        updateCard(displayedCard)
    }
    event.preventDefault()
})




//Função para mudar imagem de perfil
document.querySelector("#btnMakeProfilePic").addEventListener("click", function () {
    if (currentUser == null) {
        Swal.fire({
            type: 'warning',
            title: 'Não estás logado! Inscreve-te na página inicial',
        })
    } else {
        let users = JSON.parse(localStorage.getItem("users"))
        for (const user of users) {
            if (user.username == currentUser) {
                user.profilePicture = displayedCard.img
            }
        }

        //atualizar tudo
        localStorage.setItem("users", JSON.stringify(users))
        document.querySelector("#profilePicture").src = displayedCard.img
        userDataArray[3] = displayedCard.img
    }
})


function loadDisplay() {

    //get da carta da session storage 
    //"corta-atalhos"
    displayedCard = JSON.parse(sessionStorage.getItem("displayCard"))
    if(displayedCard == null){
        location.href = "../html/catalog.html"
    }
    comments = displayedCard.comments
    ratings = displayedCard.ratings
    mediasAudio = displayedCard.audios
    mediasVideo = displayedCard.videos

    //load dos dados a partir da displayedCard
    cardName.innerHTML = displayedCard.name
    displayedCategory.innerHTML = displayedCard.category
    cardImg.src = displayedCard.img

    //quick bug fix, por razões desconhecidas quando alguém adiciona comentário e a carta não tem ratings o rank da carta fica null
    if(displayedCard.rank == null){
        cardRank.innerHTML = "0/5"

    }else{
        cardRank.innerHTML = displayedCard.rank + "/5"

    }
    
    displayedDescription.innerHTML = displayedCard.description
    cardComments.innerHTML = displayedCard.comments.length

    //se utilizador já deu uma rating as estrelinhas mudam
    let coloredStar = "../img/Star Colored.png"

    for (const rate of ratings) {
        if (rate.rating) {
            if (rate.username == currentUser) {
                //rating deixada define quantas estrelinhas estão coloridas
                for (let i = 0; i < rate.rating; i++) {
                    document.getElementById(i).src = coloredStar

                }
            }
        }
    }


    loadComments()
}



//Função para dar load aos comentários
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
    let result = ""

    for (const comment of comments) {

        result += `
    <div class="row">
            <div class="col-sm-1">
                <img id="imgComment"
                    src="${comment.userImg}"
                    height="60x" width="60px">
                    <input class="${btnClass}" id="${comment.commentText}@${counter}" type="button" value="Remover">
            </div>
            <div class="col-sm-3">
                <h6 id="userComment">${comment.userName}</h6>
                <p id="txtComment" class="not-Lobster">${comment.commentText}</p>
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

    //injetar se não for vazio e adicionar event listeners aos botoes
    if (result != "") {
        commentContainer.innerHTML = result


        let i = 0


        for (const comment of comments) {


            //função
            document.getElementById(comment.commentText + "@" + i).addEventListener("click", function () {

                let commentToRemove = this.id

                //refazer array de comentarios não adicionando comentário a remover
                let newComments = []
                let k = 0

                for (const comment of comments) {
                    if ((comment.commentText + "@" + k) != commentToRemove) {
                        newComments.push(comment)
                    } 
                    else {
                        Swal.fire({
                            type: 'success',
                            title: 'Comentário Removido!',
                        })
                    }
                    k++
                }

                displayedCard.comments = newComments

                updateCard(displayedCard)

                loadDisplay()

            })

            i++
        }

    } else {
        result = "Esta carta ainda não tem comentários!"
        commentContainer.innerHTML = result
    }



}



//Função caso a carta tenha videos ou audios para dar load
function loadMedia() {

    let result = ""



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

    if (mediasAudio != []) {

        for (const audio of mediasAudio) {
            result += `
            <div class="row">
            <hr>
            </div>
            <div class="row">
            <iframe width="100%" height="300" scrolling="no" frameborder="no"  src="${audio}">
            </iframe>
            </div>`
            counter++
        }

    }

    result += `<div class="row"><hr></div>`
    displayedMedia.innerHTML = result

}


//Função para deixar rating numa carta
function setRatingListeners() {
    let coloredStar = "../img/Star Colored.png"
    let emptyStar = "../img/Star.png"

    for (let i = 0; i < 5; i++) {

        document.getElementById(i).addEventListener("click", function () {

            if (currentUser == null) {
                Swal.fire({
                    type: 'warning',
                    title: 'Não podes deixar uma classificação numa carta sem estares ligado com uma conta!',
                })
                return;
            }


            //Colorir a estrela
            for (let j = 0; j < i + 1; j++) {
                document.getElementById(j).src = coloredStar
            }

            //numero de estrelas na rating
            let starNumber = i + 1

            //Tirar a cor da estrela
            for (let k = starNumber; k < 5; k++) {
                document.getElementById(k).src = emptyStar
            }

            //testar se utilizador já deu uma rating se deu altera se não adiciona ao array
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

            loadDisplay()
        })

    }
}