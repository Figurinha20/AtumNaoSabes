import {newUser} from "../models/newUser.js"

const users = []

const myForm = document.querySelector("form")
myForm.addEventListener("submit", function (event) {
    //Receber dados
    newUsername = document.querySelector("#txtUsername").value
    newPassword = document.querySelector("#txtPassword").value
    newConfirmPassword = document.querySelector("#txtConfirmPassword").value

    //Verificar se as duas passwords são iguais
    if (newPassword != newConfirmPassword) {
        alert("As passwords não são iguais")
        return
    }

    //Verificar se Utilizador Já existe
    const result = isUser(newUsername)
    if (result == true){
        alert("Utilizador já existente")
    }
    else{
        const new_user = new newUser(newUsername, newPassword)
    }
    
    users.push(new_user)
    alert("Sucesso! Bem vindo " + newUsername + "!")

    //prevenir que form seja submetido
    event.preventDefault()

    alert(users)
})



//Função para verificar se o utilizador já existe
function isUser(newUsername) {
    for (const user of users) {
        if (user.username === newUsername) {
            return true;
        }
    }
    return false;
}