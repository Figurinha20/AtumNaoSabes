

//get da carta from session storage
let displayedCard = JSON.parse(sessionStorage.getItem("displayCard"))
console.log(displayedCard.name)

//elementos fora da carta
let displayedDescription = document.querySelector("#displayedCardDiscription")
let displayedMedia = document.querySelector("#displayedCardMedia")
let commentContainer = document.querySelector("#commentContainer")

//elementos da carta
let cardName = document.querySelector("#cardName")
let displayedCategory = document.querySelector("#cardText")
let cardImg = document.querySelector("#cardImg")
let cardRank = document.querySelector("#cardRank")
let cardComments = document.querySelector("#cardComments")

// butão like
let likeBtn= document.querySelector("#likeBtn")

loadDisplay()

function loadDisplay(){

cardName.innerHTML = displayedCard.name
displayedCategory.innerHTML = displayedCard.category
cardImg.src = displayedCard.img
cardRank.innerHTML = displayedCard.rank + "/5"
displayedDescription.innerHTML = displayedCard.description
cardComments.innerHTML = displayedCard.comments.length

}
