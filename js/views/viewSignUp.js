import {User} from "../models/User.js";
import {isUser} from "../controllers/controlsSignUp.js"
import {users} from "../models/User.js"



const myForm = document.querySelector("form")
myForm.addEventListener("submit", function (event) {


    //Receber dados
    let newUsername = document.querySelector("#txtUsername").value
    let newPassword = document.querySelector("#txtPassword").value
    let newConfirmPassword = document.querySelector("#txtConfirmPassword").value
    

    //Verificar se Utilizador Já existe

    if (isUser(newUsername) == true) {
        alert("Utilizador já existente")
        return;
    } else {

        ///Verificar se as duas passwords são iguais
        if (newPassword != newConfirmPassword) {
            alert("As passwords não são iguais")
            return;
        }

        //push para array
        users.push(new User(newUsername, newPassword, false))
        
        //armazenamento na base de dados
        localStorage.setItem("users", JSON.stringify(users))


        
        currentUser = logUsername

        localStorage.setItem("currentUser", JSON.stringify(currentUser))

    
        alert("Conta criada com sucesso! Bem vindo " + newUsername + "!")

        //FECHAR MODAL    AKA    currentUser = newUsername
        
    }




   

    //prevenir que form seja submetido
    event.preventDefault()

    
    return;
})
