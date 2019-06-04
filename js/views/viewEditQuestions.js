import {Question} from "../models/Question.js"
import {isQuestion, replaceQuestion} from "../controllers/controlsEditQuestions.js"




const myForm = document.querySelector("form")
myForm.addEventListener("submit", function (event) {

    let questions = JSON.parse(localStorage.getItem("questions"));

    //Receber dados
    let newQuestion = document.querySelector("#txtQuestion").value
    let newQuestionOpt1 = document.querySelector("#txtOption1").value
    let newQuestionOpt2 = document.querySelector("#txtOption2").value
    let newQuestionOpt3 = document.querySelector("#txtOption3").value
    let newQuestionOpt4 = document.querySelector("#txtOption4").value
    let newQuestionCatalog = document.querySelector("#sltTags").value
    let newQuestionType = document.querySelector("#sltType").value
    let newQuestionDifficulty = document.querySelector("#sltDificulty").value
    let newCorrectOpt = document.querySelector("#sltCorrect").value
    let newHint = document.querySelector("#txtHint").value

    alert(newQuestion)
    
    //Verificar se pergunta já existe
    const result = isQuestion(newQuestion)
    if (result == true){
        alert("Pergunta já existente deseja alterar os dados?")

        //CRIAR MODAL COMO PARA AS CARTAS

        replaceQuestion(newQuestion,newQuestionOpt1,newQuestionOpt2,newQuestionOpt3,newQuestionOpt4,
            newQuestionCatalog,newQuestionType,newQuestionDifficulty, newCorrectOpt, newHint)
    }
    else{
        let new_question = new Question(newQuestion,newQuestionOpt1,newQuestionOpt2,newQuestionOpt3,newQuestionOpt4,
            newQuestionCatalog,newQuestionType,newQuestionDifficulty, newCorrectOpt, newHint)
        alert("success")
        questions.push(new_question)
        alert(questions)
        localStorage.setItem("questions", JSON.stringify(questions))
    }
    
    event.preventDefault()
})

    
