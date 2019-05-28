import newUser from "../models/newUser.js";

//import {newUser} from "../models/newUser.js"

//importar da base de dados
let users = []

const myForm = document.querySelector("form")
myForm.addEventListener("submit", function (event) {


    //Receber dados
    let newUsername = document.querySelector("#txtUsername").value
    let newPassword = document.querySelector("#txtPassword").value
    let newConfirmPassword = document.querySelector("#txtConfirmPassword").value
    console.log(newUsername)
    console.log(newPassword)
    console.log(newConfirmPassword)


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
        users.push(new newUser(newUsername, newPassword))
        
        //armazenamento na base de dados
        localStorage.setItem("users", JSON.stringify(users))
    }




    alert("Sucesso! Bem vindo " + newUsername + "!")

    //prevenir que form seja submetido
    event.preventDefault()

    console.log(users)

    return;
})



//Função para verificar se o utilizador já existe
function isUser(newUsername) {
    for (const user of users) {
        if (newUser.username === newUsername) {
            return true;
        }
    }
    return false;
}