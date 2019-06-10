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

//Função para remover Carta
function removeCard (){
    let inputHiddenForCard = this.parentNode.parentNode.getElementsByTagName('input')[0];
    console.log(inputHiddenForCard.value);
    let cardToRemove = inputHiddenForCard.value

    let removalConfirmation = confirm('Are you sure you want to remove "' + cardToRemove + '"?')

    if(removalConfirmation==true){
        //reescrever o array sem a carta escolhida
        let newCardArray = []

        for(const card of cards){
            if(card.name != cardToRemove){
                newCardArray.push(card)
            }
        }

        cards = newCardArray

        localStorage.setItem("cards", JSON.stringify(cards))
        
        location.reload()
    }
    else{
        alert("Abort!")
    }
}
 
 
//Função para criar tabela com cartas existentes
function renderTable(cards){
   
    let counter = 0
 
    let myTable = document.createElement("table");
    myTable.classList.add("table");
    let header = myTable.createTHead();
    var row = header.insertRow(0);    
    var cell = row.insertCell(0);
    cell.innerHTML = "<h4>Lista de Cartas</h4>";
 
    myTable.classList.add("table-dark");
    myTable.innerHTML  = `<tr><th scope="col" colspan="3" class="text-center"><h4>Lista de Cartas</h4></th></tr>`;
 
    for (const card of cards){
 
        let tempTr = document.createElement("tr");
        tempTr.innerHTML = `<td scope="row" colspan="2">${card.name}</td><input type="hidden" name="cardName" value="${card.name}"><td class="text-right"><a id="${card.name}" class="btn btn-warning" role="button">Remover</a></td>`
 
        let button = tempTr.getElementsByTagName('a')[0];
 
        console.log(button);
        button.addEventListener('click', removeCard);
   
        myTable.appendChild(tempTr)
 
 
 
    counter++
    }
 
    document.querySelector("#tableContainer").appendChild(myTable);
}