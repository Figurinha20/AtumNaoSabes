import {User} from "../models/User.js";
import {isUser} from "../controllers/controlsSignUp.js"


export function setSignUpListener(){

const myForm = document.querySelector("#userSignUp")
myForm.addEventListener("submit", function (event) {


    //Receber dados
    let newUsername = document.querySelector("#txtUsername").value
    let newPassword = document.querySelector("#txtPassword").value
    let newConfirmPassword = document.querySelector("#txtConfirmPassword").value
    

    //Verificar se Utilizador Já existe
    let users = JSON.parse(localStorage.getItem("users"));

    if (isUser(newUsername) == true) {
        alert("Utilizador já existente")
        
    } else {

        ///Verificar se as duas passwords são iguais
        if (newPassword != newConfirmPassword) {
            alert("As passwords não são iguais")
           
        }else{
             //push para array
            users.push(new User(newUsername, newPassword, false))
        
            //armazenamento na base de dados
            localStorage.setItem("users", JSON.stringify(users))


        
            let currentUser = newUsername

            localStorage.setItem("currentUser", currentUser)

            location.href="../html/index.html"

        }

       

    }




   

    //prevenir que form seja submetido
    event.preventDefault()

    
})
}
