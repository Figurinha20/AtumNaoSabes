
//classes para checkLocalStorage
import {User} from "../models/User.js"
import {Card} from "../models/Card.js"
import {Question} from "../models/Question.js"
import {Suggestion} from "../models/Suggestion.js"

export function getUserData(username){
    let users = JSON.parse(localStorage.getItem("users"))
   
    let data = [];
    for (const user of users) {
        
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
    const card1 = new Card("Atum", "https://i.imgur.com/X5GQjyT.jpg","Grande Azul","Grandalhão, brilhante prateado é o Icon do nosso website!","" ,"","")
    const card2 = new Card("Peixe Palhaço", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzl3wBhC8EAhixi3-O9Pp_HSUQfhKIti67bq8nV9lOrdnPuG-B","Grande Azul","Um peixe do nemo", "", "","")
    const card3 = new Card("Faneca", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkj1ZrEdy598dZcrpi48W3qkDoBqLiK1mEpGMuweQuAXQQIpiK","Grande Azul","o rei do oceano", "", "","")
    const card4 = new Card("Peixe Cão", "http://siaram.azores.gov.pt/fauna/peixes/5/1.jpg","Grande Azul","o lei du uceanu","","","")
    const card5 = new Card("Inácio Bonito", "../img/A continuação do peixe-11.png","Especial","A mascote do site ´AtumNãoSabes?'","","","")

    cards.push(card1, card2, card3,card4, card5)
    localStorage.setItem("cards", JSON.stringify(cards))
}


let questions = []

if (localStorage.questions) {
    questions = JSON.parse(localStorage.getItem("questions"))
} else {
    const qstn1 = new Question("Qual é o peixe que serve de ícone e mascote para este site?","Atum","José Pedro","Carpa","Polvo",
    "Grande Azul","multiple","1","Atum","José Pedro não é um peixe")
    const qstn2 = new Question("Qual destes peixes aparece num filme famoso?", "Peixe Palhaço", "2", "3", "4", "Grande Azul",
    "multiple","2","Peixe Palhaço","O filme chama-se 'À procura de Nemo'")
    const qstn3 = new Question("Completa a frase: A comida favorita do tubarão são ________.", "", "", "", "", "Grande Azul",
    "complete","3","focas","pista")
    const qstn4 = new Question("Qual é a comida preferida do tubarão?", "Focas", "Big Macs", "Pessoas", "Peixes", "Grande Azul",
    "multiple","3","Focas","pista")
    const qstn5 = new Question("Das opções, qual delas não faz parte do corpo da faneca?","Ossos","Espinhas","Olhos","Cauda",
    "Grande Azul","multiple","5","Espinhas","A faneca é conhecida por ser um peixe ósseo sabes o que significa?")
    const qstn6 = new Question("Como se chama o peixe com nariz em forma de espada?", "Atum", "Faneca", "Pterodactilo", "Espadarte", "Grande Azul",
    "multiple","4","Espadarte","pista")
    const qstn7 = new Question("Qual destes peixes não existe?", "Peixe Galo", "Peixe Gato", "Peixe Vaca", "Peixe Cão", "Grande Azul",
    "multiple","6","Peixe Vaca","pista")
    

    questions.push(qstn1, qstn2, qstn3, qstn4, qstn5, qstn6, qstn7)
        
    
    localStorage.setItem("questions", JSON.stringify(questions))
}

let suggestions = []

if (localStorage.suggestions) {
    suggestions = JSON.parse(localStorage.getItem("suggestions"))
} else {
    const suggest1 = new Suggestion("Gandatum", " Adicionem a Lapis please. :^)")
    const suggest2 = new Suggestion("Ricardo", "Acho que peixe palhaço está mal escrito não é peiche palhásso?")

    suggestions.push(suggest1 , suggest2)
    localStorage.setItem("suggestions", JSON.stringify(suggestions))
}

}

