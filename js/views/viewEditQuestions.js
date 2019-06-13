import {Question} from "../models/Question.js"
import {isQuestion, replaceQuestion} from "../controllers/controlsEditQuestions.js"

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


//Função para remover Carta
function removeQuestion (){
    let inputHiddenForCard = this.parentNode.parentNode.getElementsByTagName('input')[0];
    console.log(inputHiddenForCard.value);
    let questionToRemove = inputHiddenForCard.value

    let removalConfirmation = confirm('Are you sure you want to remove "' + questionToRemove + '"?')

    if(removalConfirmation==true){
        //reescrever o array sem a carta escolhida
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
        alert("Abort!")
    }
}


//Função para criar tabela com questões existentes
function renderTable(questions){
   
    let counter = 0
 
    let myTable = document.createElement("table");
    myTable.classList.add("table");
    let header = myTable.createTHead();
    var row = header.insertRow(0);    
    var cell = row.insertCell(0);
    cell.innerHTML = "<h4>Lista de Questões/h4>";
 
    myTable.classList.add("table-dark");
    myTable.innerHTML  = `<tr><th scope="col" colspan="3" class="text-center"><h4>Lista de Questões</h4></th></tr>`;
 
    for (const question of questions){
 
        let tempTr = document.createElement("tr");
        tempTr.innerHTML = `<td scope="row" colspan="2">${question.question}</td><input type="hidden" name="cardName" value="${question.question}"><td class="text-right"><a id="${question.question}" class="btn btn-warning" role="button">Remover</a></td>`
 
        let button = tempTr.getElementsByTagName('a')[0];
 
        
        button.addEventListener('click', removeQuestion);
   
        myTable.appendChild(tempTr)
 
 
 
    counter++
    }
 
    document.querySelector("#tableContainer").appendChild(myTable);
}

    
