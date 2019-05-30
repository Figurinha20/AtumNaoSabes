import {User} from "../models/User.js";
import {isUser} from "../controllers/controlsSignUp.js"

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
        users.push(new User(newUsername, newPassword, false))
        
        //armazenamento na base de dados
        localStorage.setItem("users", JSON.stringify(users))


        alert("Conta criada com sucesso! Bem vindo " + newUsername + "!")

        //LOGIN E FECHAR MODAL    AKA    currentUser = newUsername
    }




   

    //prevenir que form seja submetido
    event.preventDefault()

    console.log(users)

    return;
})
