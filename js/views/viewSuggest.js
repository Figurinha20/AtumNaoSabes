//Import the Suggestion Model
import {Suggestion} from "../models/Suggestion.js";

//"corta-atalhos": Impedir que meninos malandros acedam a esta página sem ter conta necessária (neste caso uma qualquer)
window.addEventListener("load", function (event) {
    let currentUser = sessionStorage.getItem("currentUser")
   
    if (currentUser == null) {
        location.href = "../html/index.html"
    } 
 })


const myForm = document.querySelector("#formSuggest")
myForm.addEventListener("submit", function (event) {

    //Import the Current User from Local Storage
    let currentUser = sessionStorage.getItem("currentUser")

    //Receber dados
    let newMessage = document.querySelector("#txtSuggest").value


    //Buscar array à localStorage
    let suggestions = JSON.parse(localStorage.getItem("suggestions"));


    //push para array
    suggestions.push(new Suggestion(currentUser, newMessage))

    //armazenamento na base de dados
    localStorage.setItem("suggestions", JSON.stringify(suggestions))


    Swal.fire({
        type: 'success',
        title: "Sugestão Recebida! Obrigado " + currentUser + "!",
    })   


    // clear da textarea 
    document.querySelector("#txtSuggest").value = ""
    //prevenir que form seja submetido
    event.preventDefault()

})