import newUser from "../models/newUser.js";

//import {newUser} from "../models/newUser.js"



// Define um array para guardar os objetos User
export let users = []
// Caso já exista uma chave users na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos User inseridos manualmente
if (localStorage.users) {
    users = JSON.parse(localStorage.users)
} else {
    const user1 = new newUser("Ricardo", "atum", false)
    const user2 = new newUser("Maria", "atum", false)
    const user3 = new newUser("Gandatum", "atum", true)

    //this.adminStat = adminStat this.experience = 0 this.level = 1 this.profilePicture = "" this.cardCollection = []
    users.push(user1, user2, user3)
    localStorage.setItem("users", JSON.stringify(users))
}
 
const myForm = document.querySelector("#userLog")
myForm.addEventListener("submit", function (event) {


    //Receber dados
    let logUsername = document.querySelector("#txtUsername").value
    let logPassword = document.querySelector("#txtPassword").value
    
    console.log(logUsername)
    console.log(logPassword)
    


    //Verificar se Utilizador Já existe

    if (validLogin(logUsername, logPassword) == true) {
        
        alert("Biene venido " + logUsername)


    //alterar userController para alterar NavBar

        return;
       
    } else {

        alert("Acesso negado Login inválido")
        
    }

    //prevenir que form seja submetido
    event.preventDefault()

    console.log(users)

    return;
})



//Função para verificar se o utilizador já existe
function validLogin(logUsername, logPassword) {
    for (const user of users) {
        if (user.username === logUsername && user.password === logPassword) {
            //caso informação esteja correta
            return true;
        }else if (user.username === logUsername && user.password != logPassword){
            //caso password errada
            alert("Password incorreta");
            return false;
        }
    }
    alert("User não encontrado")
    return false;
}