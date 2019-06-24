//list prestige names
export function getUserTitle(userLevel) {
let prestige = ["Isca", "Peixe Palhaço", "Sardinha", "Faneca", "Carapau", "Dourada", "Tamboril", "Lula", "Espadarte", "Tubarão"]

let userTitle = prestige[userLevel - 1]

return userTitle
}

//list prestige message
export function getUserTitleMessage(userLevel) {
    let prestige = ["Cheio de Potencial!", "Que comece a Palhaçada!", "Já Pesca Mais!", "Bronze no Pódio!", "Pronto para a Corrida!", "Nº1 dos Cozidos!", "Intimidante!", "Rumo ao Colossal!", "Esgrima o Conhecimento!", "Faminto para Aprender!"]
    
    let userTitleMessage = prestige[userLevel - 1]
    
    return userTitleMessage
}
