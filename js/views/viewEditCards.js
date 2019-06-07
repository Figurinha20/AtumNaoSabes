import {Card} from "../models/Card.js";
import {isCard, makeArray, replaceCard} from "../controllers/controlsEditCards.js"


let cards = JSON.parse(localStorage.getItem("cards"))

renderTable(cards)

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
    newLinks = makeArray(newLinks)
    console.log(newLinks)

    //Verificar se o nome da carta já existe

    if (isCard(newName) == true) {
        alert("Essa carta já existe deseja substituir os dados antigos?")
        //CRIAR MODAL PARA SUBSTITUIR CARTA
        //CRIAR FUNÇÃO EM CONTROLSEDITCARD PARA SUBSTITUIR DADOS DA CARTA
        
        replaceCard(newName, newImage, newTags, newDescription, newLinks)

    } else {
        
        
        //push para array
        cards.push(new Card(newName, newImage, newTags, newDescription, newLinks, ""))   
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

function removeCard (cardName){
    let newArray = [];

    for (const card of cards){
        if (card.name == cardName){
            continue
        }

        newArray.push(card)
    }

    cards = newArray;
    console.log(newArray)
}



    function renderTable(cards){
    
    let counter = 0
    let myTable = 
    `
<div class="container">
    <table class="table table-hover">
        <thead class="thead-dark">
            <tr>
                <th scope="col" colspan="3" class="text-center"><h4>Lista de Cartas</h4></th>
            </tr>
        </thead>
        <tbody>`

    for (const card of cards){
        myTable += `        
    <tr>
        <td scope="row" colspan="2">${card.name}</td>
        <td class="text-right"><a id="${card.name}" class="btn btn-warning" onclick="removeCard(${card.name})" role="button">Remover</a></td>
    </tr>`

    counter++
    }

    myTable += `    
    </tbody>
    </table>
    </div>`

    document.querySelector("#tableContainer").innerHTML = myTable
}


