import newUser from "../models/newUser.js";

//import {newUser} from "../models/newUser.js"

//importar da base de dados
let users = [] 
 
 
const myForm = document.querySelector("#logForm")
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