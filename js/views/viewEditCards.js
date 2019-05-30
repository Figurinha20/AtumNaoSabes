import {Card} from "../models/Card.js";
import {isCard} from "../controllers/controlsEditCards.js"

//import {newCard} from "../models/newCard.js"


// Define um array para guardar os objetos User
export let cards = []
// Caso já exista uma chave users na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos User inseridos manualmente
if (localStorage.cards) {
    cards = JSON.parse(localStorage.cards)
} else {
    const card1 = new Card("Atum", "www.image1.com","Rapido Colorido","Um peixe unico","www.linkadicional1.com")
    const card2 = new Card("Peixe Palhaço", "www.image2.com","Engraçado,diferente","Um peixe do nemo","www.linkadicional2.com")
    const card3 = new Card("Faneca", "www.image2.com","Feroz e mau","o rei do oceano","www.linkadicional3.com")

    //this.adminStat = adminStat this.experience = 0 this.level = 1 this.profilePicture = "" this.cardCollection = []
    cards.push(card1, card2, card3)
    localStorage.setItem("cards", JSON.stringify(cards))
}
 
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




