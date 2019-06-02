import {Card} from "../models/Card.js";
import {isCard} from "../controllers/controlsEditCards.js"



let cards = JSON.parse(localStorage.getItem("cards"))

//listener para salvar/substituir falta criar função para substituir
const myForm = document.querySelector("#cardForm")
myForm.addEventListener("submit", function (event) {

    //Receber dados
    let newName = document.querySelector("#txtName").value
    let newImage = document.querySelector("#txtImage").value
    let newTags = document.querySelector("#txtTags").value
    let newDescription = document.querySelector("#txtDescription").value
    let newLinks = document.querySelector("#txtLinks").value
    console.log(newName)
    console.log(newImage)
    console.log(newTags)
    console.log(newDescription)
    console.log(newLinks)

    //Verificar se o nome da carta já existe

    if (isCard(newName) == true) {
        alert("Essa carta já existe deseja substituir os dados antigos?")
        //CRIAR MODAL PARA SUBSTITUIR CARTA
        //CRIAR FUNÇÃO EM CONTROLSEDITCARD PARA SUBSTITUIR DADOS DA CARTA

    } else {

        
        //push para array
        cards.push(new Card(newName, newImage, newTags, newDescription, newLinks))   
        //armazenamento na base de dados
        localStorage.setItem("cards", JSON.stringify(cards))

        alert("Carta criada!")
    }








    //prevenir que form seja subemetido
    
    event.preventDefault()

    console.log(cards)

    return;
})

//função e listener para remover


// listener para preview
myForm.addEventListener("keyup", function (event){

    

    let previewName = document.querySelector("#txtName").value
    let previewImg = document.querySelector("#txtImage").value
    let previewTag = document.querySelector("#txtTags").value

    document.querySelector("#cardName1").innerHTML = previewName
    document.querySelector("#cardImg1").src = previewImg
    document.querySelector("#cardText1").innerHTML = previewTag

    document.querySelector("#cardName2").innerHTML = previewName
    document.querySelector("#cardImg2").src = previewImg
    document.querySelector("#cardText2").innerHTML = previewTag
    
    document.querySelector("#cardName3").innerHTML = previewName
    document.querySelector("#cardImg3").src = previewImg
    document.querySelector("#cardText3").innerHTML = previewTag

})




