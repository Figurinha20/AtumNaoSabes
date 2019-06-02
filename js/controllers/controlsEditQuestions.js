
//Função para verificar se o utilizador já existe
export function isQuestion(newQuestion) {
    for (const question of questions) {
        if (question.question === newQuestion) {
            return true;
        }
    }
    return false;
}