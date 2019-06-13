
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


//Função para criar tabela com questões existentes
export function renderTable(questions){
   
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





//Função para remover question
export function removeQuestion (){
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
        alert("Abort!")
    }
}
