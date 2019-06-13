import {Question} from "../models/Question.js"
import {isQuestion, replaceQuestion, renderTable, removeQuestion} from "../controllers/controlsEditQuestions.js"

let questions = JSON.parse(localStorage.getItem("questions"));

renderTable(questions);


const myForm = document.querySelector("form")
myForm.addEventListener("submit", function (event) {

    //Receber dados
    let newQuestion = document.querySelector("#txtQuestion").value

    let newQuestionOpt1 = document.querySelector("#txtOption1").value
    let newQuestionOpt2 = document.querySelector("#txtOption2").value
    let newQuestionOpt3 = document.querySelector("#txtOption3").value
    let newQuestionOpt4 = document.querySelector("#txtOption4").value

    let newQuestionCategory = document.querySelector("#txtCategory").value

    let newQuestionType = document.querySelector("#sltType").value

    let newQuestionDifficulty = document.querySelector("#sltDificulty").value

    let newCorrectOpt = document.querySelector("#sltCorrect").value
    newCorrectOpt = document.querySelector("#txtOption" + newCorrectOpt).value

    let newHint = document.querySelector("#txtHint").value

    
    
    //Verificar se pergunta já existe
    const result = isQuestion(newQuestion)
    if (result == true){
        

        let replaceConfirmation = confirm("Pergunta já existente deseja alterar os dados?")

        if(replaceConfirmation==true){
            
            replaceQuestion(newQuestion,newQuestionOpt1,newQuestionOpt2,newQuestionOpt3,newQuestionOpt4,
                newQuestionCategory,newQuestionType,newQuestionDifficulty, newCorrectOpt, newHint)

        }
        else{
            alert("Abort!")
        }

       
    }
    else{

        let new_question = new Question(newQuestion,newQuestionOpt1,newQuestionOpt2,newQuestionOpt3,newQuestionOpt4,
            newQuestionCategory,newQuestionType,newQuestionDifficulty, newCorrectOpt, newHint)
        alert("success")
        questions.push(new_question)
        alert(questions)
        localStorage.setItem("questions", JSON.stringify(questions))
        
    }
    
    
    event.preventDefault()
})












    
