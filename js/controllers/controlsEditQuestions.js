
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
    newQuestionCategory,newQuestionType,newQuestionDifficulty, newCorrectOpt, newHint){

    let questions = JSON.parse(localStorage.getItem("questions"))
    for (const question of questions) {
        if (question.question === questionName) {
            question.opt1 = newQuestionOpt1
            question.opt2 = newQuestionOpt2
            question.opt3 = newQuestionOpt3
            question.opt4 = newQuestionOpt4

            question.category = newQuestionCategory
            question.type = newQuestionType
            question.difficulty = newQuestionDifficulty
            question.answer = newCorrectOpt
            question.hint = newHint
            
        }
    }
  
    localStorage.setItem("questions",JSON.stringify(questions))
}







//Função para remover question
export function removeQuestion (){
    let questions = JSON.parse(localStorage.getItem("questions"))
    
    let inputHiddenForQuestion = this.parentNode.parentNode.getElementsByTagName('input')[0];
    console.log(inputHiddenForQuestion.value);
    let questionToRemove = inputHiddenForQuestion.value

    let removalConfirmation = confirm('Tem a certeza que quer remover "' + questionToRemove + '"?')

    if(removalConfirmation==true){
        //reescrever o array sem a question escolhida
        let newQuestionArray = []

        for(const question of questions){
            if(question.question != questionToRemove){
                newQuestionArray.push(question)
            }
        }

        questions = newQuestionArray

        localStorage.setItem("questions", JSON.stringify(questions))
        
        location.reload()
    }
    else{
        Swal.fire({
            type: 'error',
            title: 'Ação Abortada!',
          })
    }
}
