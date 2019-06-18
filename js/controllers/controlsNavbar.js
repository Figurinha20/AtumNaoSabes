
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
            data = [user.adminStat, user.experience, user.level, user.profilePicture, user.password, user.cardCollection]
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
    const card1 = new Card("Atum", "https://i.imgur.com/X5GQjyT.jpg","Grande Azul","Grandalhão, brilhante prateado os atums crescem muito! Vive em regiões tropicais e subtropicais de todos os oceanos e é um dos peixes mais importantes para a pesca, sendo também um dos mais pescados por tod o mundo!","" ,"")
    const card2 = new Card("Peixe Palhaço", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzl3wBhC8EAhixi3-O9Pp_HSUQfhKIti67bq8nV9lOrdnPuG-B","Grande Azul","Um peixe colorido e engraçado! Ele usa anemonas como sua casa porque os seus predadores magoam-se nelas. A personagem principal do filme 'À procura de Nemo' é um peixe palhaço", "", "")
    const card3 = new Card("Faneca", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkj1ZrEdy598dZcrpi48W3qkDoBqLiK1mEpGMuweQuAXQQIpiK","Grande Azul","A Faneca é um peixe ósseo, isto significa que tem ossos em vez de espinhas. Tem escamas com coloração bronze pálida e um barbilho no queixo (barbilho é como se fosse a barba de um peixe :] )", "", "")
    const card4 = new Card("Peixe Cão", "http://siaram.azores.gov.pt/fauna/peixes/5/1.jpg","Grande Azul","Laranjas e avermelhados os peixes cão vivem em recifes de corais, por isto são uma especie vulneravel à poluição e à destruição das suas casa por causa do Homem.","","","")
    const card5 = new Card("Inácio Bonito", "../img/Inácio MaiNada PNG.png","Especial","A mascote do site ´AtumNãoSabes?'. Esta carta é um recompensa pelo teu trabalho! Seja por jogar o Quiz ou por dar-nos sugestões esta carta prova que consegues sempre saber mais explorando e divertindo-te!","","")
    const card6 = new Card("Dolor","../img/pain.png","Especial","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices ipsum quis eros porta pretium. Nullam elementum lobortis faucibus. Curabitur rhoncus malesuada molestie. Nullam congue nec ipsum eget molestie. Fusce ornare lectus interdum ultricies ornare. Maecenas aliquet turpis ac ante dapibus ultrices. Cras imperdiet est justo.Sed at vehicula metus, in aliquet risus. Vivamus nec ultrices nisl, ut tristique purus. Nam egestas turpis a ullamcorper imperdiet. Mauris quis tellus auctor, vehicula eros euismod, imperdiet massa. Morbi sollicitudin, leo vel vehicula feugiat, metus risus faucibus libero, sed consectetur dui tellus a odio. Duis lacinia porttitor lectus sit amet efficitur. Praesent egestas sagittis quam, vitae eleifend sem molestie ac. Cras laoreet mi mi, ac consectetur tortor placerat sit amet. Ut eu arcu ultricies, tempus mi a, viverra quam. Suspendisse dolor nisl, tempor a gravida non, faucibus ut libero.Nunc molestie elit eu sapien dictum, quis facilisis enim vehicula. In enim orci, interdum quis pretium ut, vestibulum in ante. Donec sit amet ornare erat. Praesent a dolor id felis posuere lobortis. Vivamus maximus neque lectus, id rhoncus quam efficitur eget. Sed convallis nibh in velit tincidunt porttitor. Curabitur non nibh egestas, porttitor libero vel, posuere erat. Donec at dolor mauris. Pellentesque ultrices massa justo, id condimentum ipsum iaculis sit amet. Sed ut augue vel nisi pellentesque consequat nec at mauris. Nullam facilisis ligula ex, id semper tortor varius vel.",
    "","")
    const card7 = new Card("Sardinha", "http://4.bp.blogspot.com/-uzuZTYsX9ng/TjGzFAlKc7I/AAAAAAAAAWM/1SieW5_6XMQ/s1600/cardume_sardinha.jpg","Grande Azul","As sardinhas formam grupos grandes e coordenados para se protegerem de predadores. São pequenas mas velozes e dificeis de apanhar quando de põem muito juntinhas e se preparam para esquivar.",["https://www.youtube.com/embed/U16N1NXsifk"],["https://www.youtube.com/embed/U16N1NXsifk"])
    

    cards.push(card1, card2, card3,card4, card5, card6, card7)
    localStorage.setItem("cards", JSON.stringify(cards))
}


let questions = []

if (localStorage.questions) {
    questions = JSON.parse(localStorage.getItem("questions"))
} else {
    const qstn1 = new Question("Qual é o peixe que serve de ícone e mascote para este site?","Atum","José Pedro","Carpa","Polvo",
    "Grande Azul","multiple","1","Atum","José Pedro não é um peixe")
    const qstn2 = new Question("Qual destes peixes aparece num filme famoso?", "Peixe Palhaço", "Ouriço do Mar", "Coral", "Anêmona", "Grande Azul",
    "multiple","2","Peixe Palhaço","O filme chama-se 'À procura de Nemo'")
    const qstn3 = new Question("Completa a frase: A comida favorita do tubarão são ________.", "", "", "", "", "Grande Azul",
    "complete","3","focas","O tubarão come muitas coisas mas estranhamente não gosta muito de peixe")
    const qstn4 = new Question("Qual é a comida preferida do tubarão?", "Focas", "Big Macs", "Pessoas", "Peixes", "Grande Azul",
    "multiple","3","Focas","O tubarão come muitas coisas mas estranhamente não gosta muito de peixe")
    const qstn5 = new Question("Das opções, qual delas não faz parte do corpo da faneca?","Ossos","Espinhas","Olhos","Cauda",
    "Grande Azul","multiple","5","Espinhas","A faneca é conhecida por ser um peixe ósseo sabes o que significa?")
    const qstn6 = new Question("Como se chama o peixe com nariz em forma de espada?", "Atum", "Faneca", "Pterodactilo", "Espadarte", "Grande Azul",
    "multiple","4","Espadarte","A palavra espada está no nome!")
    const qstn7 = new Question("Qual destes peixes é laranja e vive em recifes de corais?", "Tubarão", "Peixe Gato", "Caxalote", "Peixe Cão", "Grande Azul",
    "multiple","7","Peixe Cão","É um peixe com o nome de outro animal")
    const qstn8 = new Question("Qual destes peixes não existe?", "Peixe Galo", "Peixe Gato", "Peixe Vaca", "Peixe Cão", "Grande Azul",
    "multiple","6","Peixe Vaca","Peixe Vaca é uma alcunha dada aos manatins!")
    const qstn9 = new Question("Porque é que as sardinhas andam em grandes cardumes?", "Para grandes FESTAS", "Para se protegerem", "Têm medo", "Para caçar melhor", "Grande Azul",
    "multiple","8","Para se protegerem","As sardinhas mexem-se tão depressa e tão juntinhas que é dificil apanhá-las")
    const qstn10 = new Question("Qual destes peixes é o mais pequeno?", "Peixe Cão", "Peixe Palhaço", "Sardinha", "Atum", "Grande Azul",
    "multiple","9","Sardinha","É um peixe que gosta de andar em grupos grandes!")
    const qstn11 = new Question("Qual o nome da mascote do nosso website?", "", "", "", "", "Grande Azul",
    "complete","10","Inácio Bonito","O segundo nome é Bonito (significa atum) e o primeiro acaba em 'nácio'")
    

    questions.push(qstn1, qstn2, qstn3, qstn4, qstn5, qstn6, qstn7, qstn8, qstn9, qstn10, qstn11)
        
    
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

