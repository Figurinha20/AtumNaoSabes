
//classes para checkLocalStorage
import {User} from "../models/User.js"
import {Card} from "../models/Card.js"
import {Question} from "../models/Question.js"
import {Suggestion} from "../models/Suggestion.js"

export function getUserData(username){
    let users = JSON.parse(localStorage.getItem("users"))
   
    let data = [];
    for (const user of users) {
        console.log(user.username)
        console.log(username)
        if (user.username == username) {
            //quando encontrar user
            data = [user.adminStat, user.experience, user.level, user.profilePicture ]
            return data;
        }
        
    }
    alert("Something is very wrong")

}





export function checkLocalStorage(){

    
    
// Define um array para guardar os objetos User
let users = []
// Caso já exista uma chave users na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos User inseridos manualmente
if (localStorage.users) {
    users = JSON.parse(localStorage.getItem("users"))
} else {
    const user1 = new User("Ricardo", "atum", false)
    const user2 = new User("Maria", "atum", false)
    const user3 = new User("Gandatum", "atum", true)

    //this.adminStat = adminStat this.experience = 0 this.level = 1 this.profilePicture = "" this.cardCollection = []
    users.push(user1, user2, user3)
    localStorage.setItem("users", JSON.stringify(users))
}



// Define um array para guardar os objetos Card
let cards = []
// Caso já exista uma chave cards na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos Card inseridos manualmente
if (localStorage.cards) {
    cards = JSON.parse(localStorage.getItem("cards"))
} else {
    const card1 = new Card("Atum", "https://i.imgur.com/X5GQjyT.jpg","Rapido Colorido","Um peixe unico","" ,"")
    const card2 = new Card("Peixe Palhaço", "https://i.imgur.com/X5GQjyT.jpg","Engraçado,diferente","Um peixe do nemo", "", "")
    const card3 = new Card("Faneca", "https://i.imgur.com/X5GQjyT.jpg","Feroz e mau","o rei do oceano", "", "")
    const card4 = new Card("Fanhéca", "https://i.imgur.com/X5GQjyT.jpg","Ferox e meow","o lei du uceanu","","")

    cards.push(card1, card2, card3,card4)
    localStorage.setItem("cards", JSON.stringify(cards))
}


let questions = []

if (localStorage.questions) {
    questions = JSON.parse(localStorage.getItem("questions"))
} else {
    const qstn1 = new Question("Qual é o peixe menos inteligente das opções?","Atum","José Pedro","Carpa","Polvo",
    "GeralPrimeiroQuiz","multiple","1","Carpa","José Pedro não é um peixe")
    const qstn2 = new Question(";) bonus",";)",";)",";)",";)",";)",";)",";)",";)",";)")
    const qstn3 = new Question(";) bonus",";)",";)",";)",";)",";)",";)",";)",";)", "não é o mesmo bonus...")


    questions.push(qstn1, qstn2, qstn3)
    localStorage.setItem("questions", JSON.stringify(questions))
}

let suggestions = []

if (localStorage.suggestions) {
    suggestions = JSON.parse(localStorage.getItem("suggestions"))
} else {
    const suggest1 = new Suggestion("Gandatum", " Adicionem a Lapis please. :^)")
    const suggest2 = new Suggestion("Ricardo", " Adicionem a Lapis please. :^)")

    suggestions.push(suggest1 , suggest2)
    localStorage.setItem("suggestions", JSON.stringify(suggestions))
}

}

