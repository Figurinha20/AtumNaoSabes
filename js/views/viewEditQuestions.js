import {Question} from "../models/Question.js"
import {isQuestion} from "../controllers/controlsEditQuestions.js"

export let questions = []

if (localStorage.questions) {
    questions = JSON.parse(localStorage.questions)
} else {
    const qstn1 = new Question("Qual é o peixe menos inteligente das opções?","Atum","José Pedro","Carpa","Polvo",
    "GeralPrimeiroQuiz","multiple",1,"Carpa","José Pedro não é um peixe")
    const qstn2 = new Question(";) bonus",";)",";)",";)",";)",";)",";)",";)",";)",";)")
    const qstn3 = new Question(";) bonus",";)",";)",";)",";)",";)",";)",";)",";)", "não é o mesmo bonus...")


    questions.push(qstn1, qstn2, qstn3)
    localStorage.setItem("questions", JSON.stringify(questions))
}



const myForm = document.querySelector("form")
myForm.addEventListener("submit", function (event) {
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
    }
    else{
        let new_question = new Question(newQuestion,newQuestionOpt1,newQuestionOpt2,newQuestionOpt3,newQuestionOpt4,
            newQuestionCatalog,newQuestionType,newQuestionDifficulty, newCorrectOpt, newHint)
        alert("SUCC")
        questions.push(new_question)
        alert(questions)
    }
    
    event.preventDefault()
})

    
