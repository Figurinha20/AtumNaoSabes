
//Função para verificar se o utilizador já existe
export function isQuestion(newQuestion) {
    let questions = JSON.parse(localStorage.getItem("questions"))
    for (const question of questions) {
        if (question.question === newQuestion) {
            return true;
        }
    }
    return false;
}

export function replaceQuestion(questionName,newQuestionOpt1,newQuestionOpt2,newQuestionOpt3,newQuestionOpt4,
    newQuestionCatalog,newQuestionType,newQuestionDifficulty, newCorrectOpt, newHint){

    let questions = JSON.parse(localStorage.getItem("questions"))
    for (const question of questions) {
        if (question.question === questionName) {
            question.opt1 = newQuestionOpt1
            question.opt2 = newQuestionOpt2
            question.opt3 = newQuestionOpt3
            question.opt4 = newQuestionOpt4

            question.tags = newQuestionCatalog
            question.type = newQuestionType
            question.difficulty = newQuestionDifficulty
            question.answer = newCorrectOpt
            question.hint = newHint
            

            //AQUI NÃO ESTÁ A SUBSTITUIR
            cards.etc = newLinks
        }
    }
  
    localStorage.setItem("cards",JSON.stringify(cards))
}