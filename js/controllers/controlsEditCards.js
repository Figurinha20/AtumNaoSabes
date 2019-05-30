

//Função para verificar se a carta já existe
export function isCard(newName) {
    for (const card of cards) {
        if (card.name === newName) {
            return true;
        }
    }
    return false;
}