import {User} from "../models/User.js";
import {validLogin} from "../controllers/controlsLogin.js"



 
const myForm = document.querySelector("#userLog")
myForm.addEventListener("submit", function (event) {


    //Receber dados
    let logUsername = document.querySelector("#logUserName").value
    let logPassword = document.querySelector("#logPassword").value
    
    console.log(logUsername)
    console.log(logPassword)
    


    //Verificar se Utilizador Já existe

    if (validLogin(logUsername, logPassword) == true) {
        
        alert("Biene venido " + logUsername)

        let currentUser = logUsername

        localStorage.setItem("currentUser", JSON.stringify(currentUser))

    //FAZER RELOAD DA PÁGINA
        
       
    } else {

        alert("Acesso negado Login inválido")
        
    }

    //prevenir que form seja submetido
    event.preventDefault()

    
})



