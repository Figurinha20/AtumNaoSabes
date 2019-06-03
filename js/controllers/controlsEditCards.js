
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

export function replaceCard(cardName, newImage, newTags, newDescription, newLinks){
    let cards = JSON.parse(localStorage.getItem("cards"))
    for (const card of cards) {
        if (card.name === cardName) {
            card.description = newDescription
            card.img = newImage
            card.tags = newTags
            cards.etc = newLinks
        }
    }
  
    localStorage.setItem("cards",JSON.stringify(cards))
}