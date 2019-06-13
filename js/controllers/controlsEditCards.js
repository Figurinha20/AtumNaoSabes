
//Função para verificar se a carta já existe
export function isCard(newName) {
    let cards = JSON.parse(localStorage.getItem("cards"))
    for (const card of cards) {
        if (card.name === newName) {
            return true;
        }
    }
    return false;
}

export function makeArray(string){
    let array = []
    array = string.split(" ")
    return array;
}

export function replaceCard(cardName, newImage, newCategory, newDescription, newLinks){
    let cards = JSON.parse(localStorage.getItem("cards"))
    for (const card of cards) {
        if (card.name === cardName) {
            card.description = newDescription
            card.img = newImage
            card.category = newCategory
            card.etc = newLinks
        }
    }
  
    localStorage.setItem("cards",JSON.stringify(cards))
}


//Função para remover Carta
export function removeCard (){
    let inputHiddenForCard = this.parentNode.parentNode.getElementsByTagName('input')[0];
    console.log(inputHiddenForCard.value);
    let cardToRemove = inputHiddenForCard.value

    let removalConfirmation = confirm('Tem a certeza que quer remover a carta "' + cardToRemove + '"?')

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
export function renderTable(cards){
   
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