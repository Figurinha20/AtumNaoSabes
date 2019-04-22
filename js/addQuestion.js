import {newQuestion} from "./models/newQuestion.js"

const myForm = document.querySelector("form")
myForm.addEventListener("submit", function (event) {
    //Receber dados
    newQuestion = document.querySelector("#txtQuestion").value
    newQuestionOpt1 = document.querySelector("#txtOption1").value
    newQuestionOpt2 = document.querySelector("#txtOption2").value
    newQuestionOpt3 = document.querySelector("#txtOption3").value
    newQuestionOpt4 = document.querySelector("#txtOption4").value
    newQuestionCatalog = document.querySelector("#sltCatalog").value
    newQuestionType = document.querySelector("#sltType").value
    newQuestionDifficulty = document.querySelector("#sltDificulty").value
    newCorrectOpt = document.querySelector("#sltCorrect").value

    
    //Verificar se pergunta já existe
    const result = isQuestion(newQuestion)
    if (result == true){
        alert("Pergunta já existente")
    }
    else{
        const new_question = new newQuestion(newQuestion,newQuestionOpt1,newQuestionOpt2,newQuestionOpt3,newQuestionOpt4,
            newQuestionCatalog,newQuestionType,newQuestionDifficulty, newCorrectOpt)
    }

})

    
//Função para verificar se o utilizador já existe
function isQuestion(newQuestion) {
    for (const question of questiond) {
        if (question.question === newQuestion) {
            return true;
        }
    }
    return false;
}