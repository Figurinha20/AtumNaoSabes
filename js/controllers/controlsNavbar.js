
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

    Swal.fire({
        type: 'error',
        title: 'Erro: Utilizador não existente!',
      })
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

    //Categoria "Grande Azul"
    const card1 = new Card("Atum", "https://www.anglersjournal.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTQ2OTAxMTA0NjYwNzE5NDE0/yellowfin-tuna.jpg","Grande Azul","Grandalhão, brilhante prateado os atums crescem muito!<br> Vive em regiões tropicais e subtropicais de todos os oceanos e é um dos peixes mais importantes para a pesca, sendo também um dos mais pescados por tod o mundo!","" ,"")
    const card2 = new Card("Peixe Palhaço", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzl3wBhC8EAhixi3-O9Pp_HSUQfhKIti67bq8nV9lOrdnPuG-B","Grande Azul","Um peixe colorido e engraçado! Ele usa anemonas como sua casa porque os seus predadores magoam-se nelas. A personagem principal do filme 'À procura de Nemo' é um peixe palhaço", "", "")
    const card3 = new Card("Faneca", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkj1ZrEdy598dZcrpi48W3qkDoBqLiK1mEpGMuweQuAXQQIpiK","Grande Azul","A Faneca é um peixe ósseo, isto significa que tem ossos em vez de espinhas.<br> Tem escamas com coloração bronze pálida e um barbilho no queixo (barbilho é como se fosse a barba de um peixe :] )", "", "")
    const card4 = new Card("Peixe Cão", "http://siaram.azores.gov.pt/fauna/peixes/5/1.jpg","Grande Azul","Laranjas e avermelhados os peixes cão vivem em recifes de corais, por isto são uma especie vulneravel à poluição e à destruição das suas casa por causa do Homem.","","","")
    const card5 = new Card("Sardinha", "http://4.bp.blogspot.com/-uzuZTYsX9ng/TjGzFAlKc7I/AAAAAAAAAWM/1SieW5_6XMQ/s1600/cardume_sardinha.jpg","Grande Azul","As sardinhas formam grupos grandes e coordenados para se protegerem de predadores.<br> São pequenas mas velozes e dificeis de apanhar quando se põem muito juntinhas e se preparam para esquivar.",["https://www.youtube.com/embed/U16N1NXsifk"],["https://www.youtube.com/embed/U16N1NXsifk"])
    const card7 = new Card("Peixe Gato", "https://media-manager.noticiasaominuto.com/1920/1531767751/naom_5b4cea5863ad7.jpg", "Grande Azul", "O nomes destes gatos aquaticos vem dos grandes barbilhos que têm nos cantos da boca, que fazem lembrar os bigodes dos gatos.","","")
    
    //Categoria "Especial" (Coleção expecial que se recebe no fim de todas as outras coleções)
    const card6 = new Card("Inácio Bonito", "../img/Inácio MaiNada PNG.png","Especial","A mascote do site ´AtumNãoSabes?'. Esta carta é um recompensa pelo teu trabalho!<br> Seja por jogar o Quiz ou por dar-nos sugestões esta carta prova que consegues sempre saber mais explorando e divertindo-te!","","")

    //Categoria "Tubarões"
    const card8 = new Card("Tubarão Branco", "https://www.mundodosanimais.pt/wp-media/imagens/fotos-tubaroes-1-585x438.jpg", "Grande Azul", `O Tubarão Branco é a espécie de tubarão mais conhecida.<br> A sua comida favorita são focas, só ataca humanos raramente quando os confunde com focas.`,"","")
    const card9 = new Card("Tubarão Martelo", "https://www.mundodosanimais.pt/wp-media/imagens/fotos-tubaroes-3.jpg", "Tubarões", "Adora pequenos peixe, o Tubarão Martelo é na verda muito agressiva, especialmente quando provocado.<br> A cara dele parece um martelo, mas não a usa para martelar nada!","","")
    const card10 = new Card("Tubarão Frade", "https://toranja.com/wp-content/uploads/2017/05/01_Oasis_Tubar%C3%A3oFrade.jpg", "Tubarões", "É o segundo maior tubarão, como é guloso, abre a boca e come enquanto anda, normalmente plâncton.<br> Podes encontrá-lo nas costas dos açores!", "", "")
    const card11 = new Card("Tubarão Baleia", "https://www.mundodosanimais.pt/wp-media/imagens/fotos-tubaroes-9.jpg", "Tubarões", "O maior tubarão do mundo, o maior peixe do mundo!<br> O tubarão baleia é muito simpático e alimenta-se de plâncton e pequenos peixes.", "", "")
    const card12 = new Card("Tubarão Cobra", "https://media.mnn.com/assets/images/2017/11/FrilledSHarkFullBody.jpg.838x0_q80.jpg", "Tubarões", "Parece uma cobra, mexe-se como uma cobra!<br> Este tubarão é do tempo dos dinossauros e pensava-se estar extinto até à muito pouco.", "", "")
    const card13 = new Card("Tubarão Tigre", "https://secureservercdn.net/166.62.113.120/y06.a21.myftpupload.com/wp-content/uploads/2017/12/Tubarao-Tigre-696x459.jpg", "Tubarões", "O felino do Oceno, o nomes deste tubarão vem das litras que tem ao longo do corpo.<br> O padrão não é a unica semelhança que tem aos tigres, este tubarão é um veloz predador!", "", "")

    //Categoria "Profundezas"
    const card14 = new Card("Peixe Víbora", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTC9Jx3t_LB2u07ZX8N0yaEAU0Y9R8IBvauxGLf0AunayD_l5J", "Profundezas", "O veloz caçador das profundezas! <br> Este peixe ganhou o nome víbora por atacar as presas como um víbora morde! <br> Nas Profundezas do Oceano onde não há luz, o peixe víbora orienta-se com as pequenas bolinhas que tem ao longo do corpo, elas brilham no escuro e piscam! >:]", "", "")
    const card15 = new Card("Medusa Pente", "https://scontent-sea1-1.cdninstagram.com/vp/4cec7882c00adb3a1261d5c16e1ed42b/5D1DCFE7/t51.2885-15/e35/s480x480/13658326_1819427241610872_1474606775_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com", "Profundezas", "Esta estranha criatura vive a profundidades incriveis onde não há luz nenhuma! <br> As linhas que definem a sua forma variável brilham e piscam várias cores diferentes! <br> Por causa da estranheza desta criatura e por ser dificil de observar, os cientistas que a descobriram achavam que era uma nave extraterrestre! <br> 'Medusa pente' é um nome dado a um tipo de alforrecas.", ["https://www.youtube.com/embed/LbcnRVkzy8A"],"")
    const card16 = new Card("Tubarão Lanterna","https://pbs.twimg.com/media/C23QqXZVIAAVFEQ.jpg","Profundezas","Um mini tubarão!  Ele esconde-se no escuro! <br> Este pequeno caçador não cresce mais de 45cm! <br> A pele da barriga absorve a luz de outros animais, sendo dificil de vê-lo aproximar-se. <br> Quando se sente perdido, a barriga acende-se como uma lanterna para iluminar o caminho.", "", "")
    const card17 = new Card("Peixe Machado","http://animal.memozee.com/animal/a3/Deepsea-Hatchetfish_J01-closeup.jpg","Profundezas","Este peixe ganhou o seu nome pela forma do seu corpo e o brilho prateado das suas escamas. <br> As suas barbatanas são transparentes e brilham suavemente como todo o seu corpo na escuridão", "", "")
    const card18 = new Card("Peixe Lanterna","https://i.pinimg.com/originals/06/a5/bd/06a5bd02a8afbdcd97adf5c3cb42b9a0.jpg","Profundezas","O peixe lanterna ganhou o seu nome não só por brilhar suavemente no escuro mas também por iluminar o que está à sua frente como uma lanterna. Os peixe lanterna são os peixes mais comuns do fundo do mar. <br> Constituem mais de metade de toda a população de peixes das profundezas!", "", "")



    cards.push(card1, card2, card3,card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16,
        card17, card18)
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

