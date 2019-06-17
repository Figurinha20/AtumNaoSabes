

//RENDER LIFES ESTÁ A DAR RESET àS PISTAS
export function renderLifes(lifes) {
  let htmlForLifes = ""
  for (let i = 0; i < lifes; i++) {
    htmlForLifes += `<img src="../img/Heart.png" style="width:15%">`
  }

  document.querySelector("#divForLifes").innerHTML = htmlForLifes
  document.querySelector("#divForLifes2").innerHTML = htmlForLifes
}


export function injectQuestionTypeMultiple(question, stage, maxDifEz, maxDifMed, maxDifHrd) {



  document.querySelector("#questionMultiple").innerHTML = `${stage}. ${question.question}`

  let difficultyTitle;
  if (question.difficulty < maxDifEz || question.difficulty == maxDifEz) {
    difficultyTitle = "Fácil"
  } else if (maxDifEz < question.difficulty < maxDifMed || question.difficulty == maxDifMed) {
    difficultyTitle = "Normal"
  } else if (maxDifMed < question.difficulty < maxDifHrd || question.difficulty == maxDifHrd) {
    difficultyTitle = "Dificil"
  } else {
    difficultyTitle = "Desafio Final!"
  }
  document.querySelector("#difficultyMultiple").innerHTML = difficultyTitle

  document.querySelector("#A").value = question.opt1
  document.querySelector("#B").value = question.opt2
  document.querySelector("#C").value = question.opt3
  document.querySelector("#D").value = question.opt4


}


export function injectQuestionTypeComplete(question, stage, maxDifEz, maxDifMed, maxDifHrd) {



  document.querySelector("#questionComplete").innerHTML = `${stage}. ${question.question}`

  let difficultyTitle;
  if (question.difficulty < maxDifEz || question.difficulty == maxDifEz) {
    difficultyTitle = "Fácil"
  } else if (maxDifEz < question.difficulty < maxDifMed || question.difficulty == maxDifMed) {
    difficultyTitle = "Normal"
  } else if (maxDifMed < question.difficulty < maxDifHrd || question.difficulty == maxDifHrd) {
    difficultyTitle = "Dificil"
  } else {
    difficultyTitle = "Desafio Final!"
  }
  document.querySelector("#difficultyComplete").innerHTML = difficultyTitle




}










export function getUserQuestions(categories){

  let newQuestions = []

  let questions = JSON.parse(localStorage.getItem("questions"))

    for (const question of questions) {
        
        for (const category of categories){
            if(question.category == category){
                newQuestions.push(question)
            }
        }
    }
    return newQuestions

}
















export function questionSelector(questions, stage) {

 


  while (1) {

    //função numero aleatorio inteiro entre minimo  0 maximo questions.length ; 
    let random = Math.floor(Math.random() * (questions.length - 0 + 1)) + 0
    if (random == questions.length) {
      random -= 1
    }

    //FAZER CHECK DAS CATEGORIAS DESBLOQUEADAS NO CATÁLOGO questions, stage, currentuser.cardCollection
    // if (questions[random].difficulty == stage && currentUser.cardCollection == questions[random].category) {
    if (questions[random].difficulty == stage) {

      return questions[random];

    }

  }
}




export function gameOver(winCondition, reward){

let currentUser = sessionStorage.getItem("currentUser")
let users = JSON.parse(localStorage.getItem("users"))

//check se ganhou
  if(winCondition){
    alert("Chegaste até ao fim do Quiz parabéns! Ganhaste " + reward + " de experiencia!")
  }else{
    alert("Perdeste desta vez :[ Para a proxima corre melhor! EsTudà-ses. Ganhaste " + reward + " de experiencia!")
  }


//encontrar user
  for (const user of users) {
    if(user.username == currentUser){

      //adicionar experiencia e aumentar nivel se necessario (quando experiencia chega a 100)
      user.experience += reward
      
      
      if(user.experience >= 100){
        user.experience -= 100
        user.level ++
      }
      

    }
  }

  localStorage.setItem("users", JSON.stringify(users))

  location.href = "../html/quiz.html"

}