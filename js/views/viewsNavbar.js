import {User} from "../models/User.js"
import {Card} from "../models/Card.js"
import {Question} from "../models/Question.js"
import {getUserData} from "../controllers/controlsNavbar.js"




window.addEventListener("load", function (event){
    //Como a views é usada em quase todas as páginas ela verifica se a storage tem as chaves necessárias para o funcionamento
    //do resto do js, caso isto não se verifique cria valores para teste

    
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

    //this.adminStat = adminStat this.experience = 0 this.level = 1 this.profilePicture = "" this.cardCollection = []
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














let currentUser;

if(localStorage.currentUser){
    //caso um utilizador esteja autenticado vai busca-lo da storage para alterar a navbar

    currentUser = JSON.stringify(currentUser)
}
else{
//quando o site abre pela primeira vez adiciona a veriavel na storage para uso

currentUser = null;
localStorage.setItem("currentUser", JSON.stringify(currentUser))


}


let divNavbar = document.querySelector("#navContainer");

if (currentUser != null) {


//tirar da local storage dados do utilizadorS
let userDataArray = []

userDataArray = getUserData(currentUser);
//[user.adminStat, user.experience, user.level, user.profilePicture ]
console.log(userDataArray);

//injetar navbar nohtml com esses dados loged in

divNavbar.innerHTML = `
<div class="row">
            <div id="userLog" class="col-sm-1">
                <div class="row">
                    <div class="col-sm-12">
                        <img id="profilePicture" src="${userDataArray[3]}" class="rounded-circle mt-1" height="165">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                    </div>
                    <div class="col-sm-4">
                        <a class="mt-2 btn btn-primary" href="#" role="button">Logout</a>
                    </div>
                    <div class="col-sm-4">
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class=row>
                    <hr>
                </div>
                <div class="row">
                    <div class="col-sm-1">

                    </div>
                    <div class="col-sm-11">
                        <h2 id="currentUserName">${currentUser}</h2>
                    </div>
                </div>

                <div class="row">
                    <hr>
                </div>

                <div class="row">
                    <div class="col-sm-1">

                    </div>
                    <div class="col-sm-11">
                        <h4 id="currentUserLevel" class="mb-1">Lvl. ${userDataArray[2]}</h4>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-1">

                    </div>
                    <div class="col-sm-11">
                        <div class="progress">
                            <div id="currentUserExp" class="progress-bar" role="progressbar" style="width: ${userDataArray[1]}%;"
                                aria-valuenow="${userDataArray[1]}" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-1">

            </div>
            <div class="col-sm-7">
                <nav id="navbar" class="navbar navbar-expand-sm navbar navbar-light" style="background-color: #fff;">
                    <a class="navbar-brand" href="/index.html">
                        <img src="../img/Home page icon-1.png" width="115" height="115" class="d-inline-block align-top"
                            alt="Home">
                    </a>
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId" style="justify-content: center">
                        <ul class="navbar-nav nav-fill w-100">
                            <li class="nav-item active">
                                <a href="catalog.html" id="navCatalog" class="nav-link"><text>Catálogo</text> </a>
                            </li>
                            <li class="nav-item">
                                <a id="navQuiz" class="nav-link" href="quiz.html"><text>Quiz</text></a>
                            </li>
                            <li class="nav-item">
                                <a id="navSuggest" class="nav-link" href="suggest.html"><text>Sugestões</text></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
` ;


} else {

//injetar navbar default

divNavbar.innerHTML= `
<div class="row">
                <div class="col-sm-1">
            
                    </div>
                      <div id="userLog" class="col-sm-3 pb-2 pt-1 mt-2 " >
                <div class="form-group">
                    <label for="logUserName">Nome</label>
                    <input type="text" id="logUserName" class="form-control">
                </div>
                <div class="form-group">
                    <label for="logPassword">Password</label>
                    <input type="text" id="logPassword" class="form-control">
                </div>
                <button type="submit" class="btn btn-dark">Login</button>
                <a name="" id="signUp" class="btn btn-dark" href="/html/signUp.html" role="button">Sign Up</a>
            </div>
            <div class="col-sm-1">

            </div>
            <div class="col-sm-7">
                <nav id="navbar" class="navbar navbar-expand-sm navbar navbar-light" style="background-color: #fff;">
                    <a class="navbar-brand" href="/index.html">
                        <img src="../img/Home page icon-1.png" width="115" height="115" class="d-inline-block align-top"
                            alt="Home">
                    </a>
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId" style="justify-content: center">
                        <ul class="navbar-nav nav-fill w-100">
                            <li class="nav-item active">
                                <a id="navCatalog" class="nav-link" href="/html/catalog.html"><text>Catálogo</text> </a>
                            </li>
                            <li class="nav-item">
                                <a id="navQuiz" class="nav-link" href="/html/quiz.html"><text>Quiz</text></a>
                            </li>
                            <li class="nav-item">
                                <a id="navSuggest" class="nav-link" href="/html/suggest.html"><text>Sugestões</text></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
`
}
})

