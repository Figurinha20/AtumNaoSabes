
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

export function replaceCard(cardName, newImage, newCategory, newDescription, newVids, newAudios){
    let cards = JSON.parse(localStorage.getItem("cards"))
    for (const card of cards) {
        if (card.name === cardName) {
            card.description = newDescription
            card.img = newImage
            card.category = newCategory
            card.videos = newVids
            card.audios = newAudios
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
        Swal.fire({
            type: 'error',
            title: 'Ação Abortada!',
          })
    }
}
 
 
