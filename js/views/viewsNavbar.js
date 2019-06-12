
//funções da navbar
import {getUserData, checkLocalStorage} from "../controllers/controlsNavbar.js";
//necessários para login
import {setLoginListener,setLogoutListener} from "../views/viewLogin.js";
//necessários para o sign up
import {setSignUpListener} from "../views/viewSignUp.js";




window.addEventListener("load", function (event){
    //Como a views é usada em quase todas as páginas ela verifica se a storage tem as chaves necessárias para o funcionamento
    //do resto do js, caso isto não se verifique cria valores para teste

    checkLocalStorage();






let currentUser;

if(localStorage.currentUser){
    //caso um utilizador esteja autenticado vai busca-lo da storage para alterar a navbar

    currentUser = localStorage.getItem("currentUser")
    
}



let divNavbar = document.querySelector("#navContainer");

if (currentUser != null) {


//tirar da local storage dados do utilizadorS
let userDataArray = []

console.log("-" + currentUser + "-");

userDataArray = getUserData(currentUser);
//[user.adminStat, user.experience, user.level, user.profilePicture ]
console.log(userDataArray);

//array para as hiperligações entre as páginas
let pageLinkArray = []


//testar se é admin ou não
if(userDataArray[0]){
    pageLinkArray = ["../html/newCard.html","../html/newQuestion.html","../html/adminSuggest.html"]
}else{
    pageLinkArray = ["../html/catalog.html","../html/quiz.html","../html/suggest.html"]
}

//injetar navbar nohtml com esses dados loged in

divNavbar.innerHTML = `
<div class="row">
            <div class="col-sm-1">
                <div class="row">
                    <div class="col-sm-12">
                        <img id="profilePicture" src="${userDataArray[3]}" class="rounded-circle mt-1" height="165">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                    </div>
                    <div class="col-sm-5">
                        <a class="mt-2 btn btn-primary" href="#" id="btnLogout" role="button">Logout</a>
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
                                <a href="${pageLinkArray[0]}" id="navCatalog" class="nav-link"><text>Catálogo</text> </a>
                            </li>
                            <li class="nav-item">
                                <a id="navQuiz" class="nav-link" href="${pageLinkArray[1]}"><text>Quiz</text></a>
                            </li>
                            <li class="nav-item">
                                <a id="navSuggest" class="nav-link" href="${pageLinkArray[2]}"><text>Sugestões</text></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
` ;

setLogoutListener()


} else {

//injetar navbar default

divNavbar.innerHTML= `

<div class="row">
<div class="col-sm-1">

</div>
<div  class="col-sm-3 pb-2 pt-1 mt-2 ">
    <form id="userLog">
    <div class="form-group">
        <label for="logUserName">Nome</label>
        <input type="text" id="logUserName" class="form-control">
    </div>
    <div class="form-group">
        <label for="logPassword">Password</label>
        <input type="password" id="logPassword" class="form-control">
    </div>
    <input type="submit" class="btn btn-dark" value="Login">

   
    <button  class="btn btn-dark" data-toggle="modal" data-target="#modalSignUpForm">Sign Up</button>
      
    </form>


   
       
</div>

<div class="modal fade" id="modalSignUpForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true">

    <form id="userSignUp">
        
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header text-center">
                <h4 class="modal-title w-100 font-weight-bold">Sign Up</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body mx-3">
                <div class="md-form mb-3">
                    <i class="fas fa-envelope prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="txtUsername">
                            Username</label>
                    <input type="text" id="txtUsername" class="form-control validate">
                    
                </div>

                <div class="md-form mb-3">
                    <i class="fas fa-lock prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="txtPassword">
                            Password</label>
                    <input type="password" id="txtPassword" class="form-control validate">
                    
                        
                </div>
                <div class="md-form mb-3">
                    <i class="fas fa-lock prefix grey-text"></i>
                    <label data-error="wrong" data-success="right" for="txtConfirmPassword">Confirm
                            password</label>
                    <input type="password" id="txtConfirmPassword" class="form-control validate">
                    
                    
                </div>
                <div class="row">
                    
                </div>
                <button id="btnsubmit" type="submit" class="btn btn-primary">Registar</button>   
            </div>
                
        </div>
    </div>
    </form>
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
   
`

setLoginListener()
setSignUpListener()
}


})

