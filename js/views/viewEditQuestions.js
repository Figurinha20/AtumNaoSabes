import {Question} from "../models/Question.js"
import {isQuestion, replaceQuestion, removeQuestion} from "../controllers/controlsEditQuestions.js"
import {
    getUserData
} from "../controllers/controlsNavbar.js"

//"corta-atalhos"
window.addEventListener("load", function (event) {
    let currentUser = sessionStorage.getItem("currentUser")
    let userDataArray
    if (currentUser != null) {
        userDataArray = getUserData(currentUser)
        if (getUserData[0] == false) {
            location.href = "../html/index.html"
        }
    } else {
        location.href = "../html/index.html"
    }
})

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
            Swal.fire({
                type: 'error',
                title: 'Ação Abortada!',
              })
        }

       
    }
    else{

        let new_question = new Question(newQuestion,newQuestionOpt1,newQuestionOpt2,newQuestionOpt3,newQuestionOpt4,
            newQuestionCategory,newQuestionType,newQuestionDifficulty, newCorrectOpt, newHint)
            Swal.fire({
                type: 'error',
                title: 'Ação Abortada!',
              })
        questions.push(new_question)
        localStorage.setItem("questions", JSON.stringify(questions))
        
    }
    Swal.fire({
        type: 'success',
        title: 'Carta Criada!',
      })
      
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
        tempTr.innerHTML = `<td scope="row" colspan="2">${question.question}</td><input type="hidden" name="question" value="${question.question}"><td class="text-right"><a id="${question.question}" class="btn btn-warning" role="button">Remover</a></td>`
 
        let button = tempTr.getElementsByTagName('a')[0];
 
        
        button.addEventListener('click', removeQuestion);
   
        myTable.appendChild(tempTr)
 
 
 
    counter++
    }
 
    document.querySelector("#tableContainer").appendChild(myTable);
}








    
