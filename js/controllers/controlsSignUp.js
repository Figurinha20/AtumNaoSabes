//Função para verificar se o utilizador já existe
export function isUser(newUsername) {
    for (const user of users) {
        if (user.username === newUsername) {
            return true;
        }
    }
    return false;
}