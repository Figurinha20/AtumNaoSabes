import {newCard} from "../models/Card.js/index.js";
import {cards} from "../controllers/editCards.js/index.js";

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
    users.push(card1, card2, card3)
    localStorage.setItem("cards", JSON.stringify(cards))
}



