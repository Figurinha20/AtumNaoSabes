export function updateCard(updatedCard){
    let cards = JSON.parse(localStorage.getItem("cards"))
    for (const card of cards) {
        if (card.name === updatedCard.name) {
            card.comments = updatedCard.comments
            card.rank = updatedCard.rank
        }
    }
  
    localStorage.setItem("cards",JSON.stringify(cards))
}
