import newCard from "../models/newCard.js";

//import {newCard} from "../models/newCard.js"

//importar da base de dados(não está a importar)
let cards = []

const myForm = document.querySelector("form")
myForm.addEventListener("submit", function (event) {

    //Receber dados
    let newName = document.querySelector("#txtName").value
    let newImage = document.querySelector("#txtImage").value
    let newTags = document.querySelector("#txtTags").value
    let newDescription = document.querySelector("#txtDescription").value
    let newLinks = document.querySelector("#txtLink").value
    console.log(newName)
    console.log(newImage)
    console.log(newTags)
    console.log(newDescription)
    console.log(newLinks)

    //Verificar se o nome da carta já existe

    if (isUser(newName) == true) {
        alert("Essa carta já existe ")
        return;
    } else {

        alert("Carta criada!")
        //push para array
        users.push(new newCard(newName, newImage, newTags, newDescription, newLinks))

    }
    //armazenamento na base de dados
    localStorage.setItem("cards", JSON.stringify(cards))
})