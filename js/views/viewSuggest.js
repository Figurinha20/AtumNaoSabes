//Import the Suggestion Model
import {Suggestion} from "../models/Suggestion.js";




const myForm = document.querySelector("#formSuggest")
myForm.addEventListener("submit", function (event) {

    //Import the Current User from Local Storage
    let currentUser = localStorage.getItem("currentUser")

    //Receber dados
    let newMessage = document.querySelector("#txtSuggest").value


    //Buscar array à localStorage
    let suggestions = JSON.parse(localStorage.getItem("suggestions"));


    //push para array
    suggestions.push(new Suggestion(currentUser, newMessage))

    //armazenamento na base de dados
    localStorage.setItem("suggestions", JSON.stringify(suggestions))


    alert("Sugestão Recebida! Obrigado " + currentUser + "!")

    //prevenir que form seja submetido
    event.preventDefault()

})