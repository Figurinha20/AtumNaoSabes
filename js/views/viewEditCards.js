import {Card} from "../models/Card.js";
import {isCard, makeArray, replaceCard, removeCard} from "../controllers/controlsEditCards.js"
import {
    getUserData
} from "../controllers/controlsNavbar.js"

//"corta-atalhos"
window.addEventListener("load", function (event) {
    let currentUser = sessionStorage.getItem("currentUser")
    let userDataArray
    if (currentUser != null) {
        userDataArray = getUserData(currentUser)
        if (getUserData[0] == false) {
            location.href = "../html/index.html"
        }
    } else {
        location.href = "../html/index.html"
    }
})

 
let cards = JSON.parse(localStorage.getItem("cards"))
 
renderTable(cards)
 
//listener para salvar/substituir falta criar função para substituir
const myForm = document.querySelector("#cardForm")
myForm.addEventListener("submit", function (event) {
 
    //Receber dados
    let newName = document.querySelector("#txtName").value
    let newImage = document.querySelector("#txtImage").value
    let newCategory = document.querySelector("#txtCategory").value
    let newDescription = document.querySelector("#txtDescription").value
    let newVids = document.querySelector("#txtVids").value
    let newAudios = document.querySelector("#txtAudios").value
    

    newVids = makeArray(newVids)
    newAudios = makeArray(newAudios)
    
 
    //Verificar se o nome da carta já existe
 
    if (isCard(newName) == true) {

        let replaceConfirmation = confirm("Essa carta já existe deseja substituir os dados antigos?")

        if(replaceConfirmation==true){
            
            replaceCard(newName, newImage, newCategory, newDescription, newVids, newAudios)
 
        }
        else{
            Swal.fire({
                type: 'error',
                title: 'Ação Abortada!',
              })
        }
      
    } else {
       
       
        //push para array
        cards.push(new Card(newName, newImage, newCategory, newDescription, newVids, newAudios, ""))  
        //armazenamento na base de dados
        localStorage.setItem("cards", JSON.stringify(cards))
 
        Swal.fire({
            type: 'success',
            title: 'Carta Criada!',
          })

        location.reload();
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
    let previewCategory = document.querySelector("#txtCategory").value
 
    document.querySelector("#cardName1").innerHTML = previewName
    document.querySelector("#cardImg1").src = previewImg
    document.querySelector("#cardText1").innerHTML = previewCategory
 
    document.querySelector("#cardName2").innerHTML = previewName
    document.querySelector("#cardImg2").src = previewImg
    document.querySelector("#cardText2").innerHTML = previewCategory
   
    document.querySelector("#cardName3").innerHTML = previewName
    document.querySelector("#cardImg3").src = previewImg
    document.querySelector("#cardText3").innerHTML = previewCategory
 
})



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

