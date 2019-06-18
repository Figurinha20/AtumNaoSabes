

export function updateCard(updatedCard){
    let cards = JSON.parse(localStorage.getItem("cards"))
    for (const card of cards) {
        if (card.name === updatedCard.name) {
            card.comments = updatedCard.comments
            
            card.ratings = updateCard.ratings

            let sumOfRatings

            for (const rate of card.ratings) {
                sumOfRatings += rate.ratings 
            }
            

            card.rank = Math.round(sumOfRatings/card.ratings.length)
        }
    }
  
    localStorage.setItem("cards",JSON.stringify(cards))
}
