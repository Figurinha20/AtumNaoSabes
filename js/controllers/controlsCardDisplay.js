export function updateCard(updatedCard) {
    let cards = JSON.parse(localStorage.getItem("cards"))
    let updatedRatingsArray = updatedCard.ratings

    for (const card of cards) {
        if (card.name === updatedCard.name) {
            card.comments = updatedCard.comments

            card.ratings = updatedRatingsArray

            if (card.ratings != []) {

                let sumOfRatings = 0

                for (const rate of updatedRatingsArray) {
                    sumOfRatings += rate.rating
                }


                card.rank = Math.round(sumOfRatings / updatedRatingsArray.length)

            }

            sessionStorage.setItem("displayCard", JSON.stringify(card))


        }
    }

    localStorage.setItem("cards", JSON.stringify(cards))

}