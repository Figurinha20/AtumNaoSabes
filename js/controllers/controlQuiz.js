
// PRECISO DE AJUDA NÃO ESTOU A CONSEGUIR SIMPLIFICAR AS COISAS PONDO-AS AQUI

export function renderLifes(lifes){
    let htmlForLifes = ""
    for (let i = 0; i < lifes; i++) {
        htmlForLifes += `<img src="../img/Heart.png" style="width:15%">`
    }

    document.querySelector("#divForLifes").innerHTML = htmlForLifes
}


export function injectQuestionTypeMultiple(question, stage, maxDifEz, maxDifMed, maxDifHrd){

    

    document.querySelector("#questionMultiple").innerHTML = `${stage}. ${question.question}`

    let difficultyTitle;
    if(question.difficulty < maxDifEz || question.difficulty == maxDifEz){
      difficultyTitle = "Fácil"
    }else if(maxDifEz < question.difficulty<maxDifMed || question.difficulty == maxDifMed){
      difficultyTitle = "Normal"
    }else if(maxDifMed < question.difficulty<maxDifHrd || question.difficulty == maxDifHrd){
      difficultyTitle = "Dificil"
    }else{
      difficultyTitle = "Desafio Final!"
    }
    document.querySelector("#difficultyMultiple").innerHTML = difficultyTitle

    document.querySelector("#A").value = question.opt1
    document.querySelector("#B").value = question.opt2
    document.querySelector("#C").value = question.opt3
    document.querySelector("#D").value = question.opt4

    
 }

 
 export function injectQuestionTypeComplete(question, stage, maxDifEz, maxDifMed, maxDifHrd){

    

    document.querySelector("#questionComplete").innerHTML = `${stage}. ${question.question}`

    let difficultyTitle;
    if(question.difficulty < maxDifEz || question.difficulty == maxDifEz){
      difficultyTitle = "Fácil"
    }else if(maxDifEz < question.difficulty<maxDifMed || question.difficulty == maxDifMed){
      difficultyTitle = "Normal"
    }else if(maxDifMed < question.difficulty<maxDifHrd || question.difficulty == maxDifHrd){
      difficultyTitle = "Dificil"
    }else{
      difficultyTitle = "Desafio Final!"
    }
    document.querySelector("#difficultyComplete").innerHTML = difficultyTitle

    

    
 }


 






















