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

//função que muda o CSS conforme o tipo de questão
myForm.addEventListener("click", function(event){

    
    if(document.querySelector("#sltType").value == "complete"){

        document.querySelector("#labelA").innerHTML = "Resposta correta"

        document.querySelector("#divB").className = "hidden"
        document.querySelector("#divC").className = "hidden"
        document.querySelector("#divD").className = "hidden"

        document.querySelector("#divForSlt").className = "hidden"
        document.querySelector("#sltCorrect").value = 1
    }else{

        document.querySelector("#labelA").innerHTML = "A."

        document.querySelector("#divB").className = "col-sm-4"
        document.querySelector("#divC").className = "col-sm-4"
        document.querySelector("#divD").className = "col-sm-4"

        document.querySelector("#divForSlt").className = "col-sm-2"
    }
})







    
