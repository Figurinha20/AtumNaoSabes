

export function getUserData(Username){
    
   
    let data = [];
    for (const user of users) {
        
        if (user.username === Username) {
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
    users = JSON.parse(localStorage.users)
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
    cards = JSON.parse(localStorage.cards)
} else {
    const card1 = new Card("Atum", "www.image1.com","Rapido Colorido","Um peixe unico")
    const card2 = new Card("Peixe Palhaço", "www.image2.com","Engraçado,diferente","Um peixe do nemo")
    const card3 = new Card("Faneca", "www.image2.com","Feroz e mau","o rei do oceano")

    users.push(card1, card2, card3)
    localStorage.setItem("cards", JSON.stringify(cards))
}


let questions = []

if (localStorage.questions) {
    questions = JSON.parse(localStorage.questions)
} else {
    const qstn1 = new Question("Qual é o peixe menos inteligente das opções?","Atum","José Pedro","Carpa","Polvo",
    "GeralPrimeiroQuiz","multiple","1","Carpa","José Pedro não é um peixe")
    const qstn2 = new Question(";) bonus",";)",";)",";)",";)",";)",";)",";)",";)",";)")
    const qstn3 = new Question(";) bonus",";)",";)",";)",";)",";)",";)",";)",";)", "não é o mesmo bonus...")


    questions.push(qstn1, qstn2, qstn3)
    localStorage.setItem("questions", JSON.stringify(questions))
}

}

