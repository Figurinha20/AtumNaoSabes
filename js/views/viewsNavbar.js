import {User} from "../models/User.js"
import {getUserData} from "../controllers/controlsNavbar.js"


// Define um array para guardar os objetos User
export let users = []
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




export let currentUser;



let divNavbar = document.querySelector("#navContainer");





if (localStorage.currentUser != null) {
//caso um utilizador esteja autenticado vai busca-lo da storage para alterar a navbar
currentUser = JSON.parse(localStorage.currentUser)

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
                            <div id="currentUserExp" class="progress-bar" role="progressbar" style="width: 25%;"
                                aria-valuenow="25" aria-valuemin="${userDataArray[1]}" aria-valuemax="100"></div>
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
//quando o site abre pela primeira vez adiciona a veriavel na storage para uso

currentUser = null;
localStorage.setItem("currentUser", JSON.stringify(currentUser))

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



let myBodyIsReggie = document.querySelector("body");


myBodyIsReggie.addEventListener("load", function (event){

//DO I NEED LOAD? PERGUNTAR AO PROFESSOR



})

