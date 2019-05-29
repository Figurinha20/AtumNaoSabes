import {newCard} from "../models/newCard.js";

//import {newCard} from "../models/newCard.js"


// Define um array para guardar os objetos User
export let cards = []
// Caso já exista uma chave users na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos User inseridos manualmente
if (localStorage.cards) {
    cards = JSON.parse(localStorage.cards)
} else {
    const card1 = new newCard("Atum", "www.image1.com","Rapido Colorido","Um peixe unico","www.linkadicional1.com")
    const card2 = new newCard("Peixe Palhaço", "www.image2.com","Engraçado,diferente","Um peixe do nemo","www.linkadicional2.com")
    const card3 = new newCard("Faneca", "www.image2.com","Feroz e mau","o rei do oceano","www.linkadicional3.com")

    //this.adminStat = adminStat this.experience = 0 this.level = 1 this.profilePicture = "" this.cardCollection = []
    cards.push(card1, card2, card3)
    localStorage.setItem("cards", JSON.stringify(cards))
}
 

const myForm = document.querySelector("form")
myForm.addEventListener("submit", function (event) {

    //Receber dados
    let newName = document.querySelector("#txtName").value
    let newImage = document.querySelector("#txtImage").value
    let newTags = document.querySelector("#txtTags").value
    let newDescription = document.querySelector("#txtDescription").value
    let newLinks = document.querySelector("#txtLink").value
    console.log(newName)
    console.log(newImage)
    console.log(newTags)
    console.log(newDescription)
    console.log(newLinks)

    //Verificar se o nome da carta já existe

    if (isCard(newName) == true) {
        alert("Essa carta já existe ")
        
    } else {

        
        //push para array
        cards.push(new newCard(newName, newImage, newTags, newDescription, newLinks))

    }
    //armazenamento na base de dados
    localStorage.setItem("cards", JSON.stringify(cards))



    alert("Carta criada!")


    //prevenir que form seja subemetido
    
    event.preventDefault()

    console.log(cards)

    return;
})
//Função para verificar se o utilizador já existe
function isCard(newName) {
    for (const card of cards) {
        if (card.name === newName) {
            return true;
        }
    }
    return false;
}
