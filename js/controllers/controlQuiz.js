import {
  getAllCats,
  getUserCollection
} from "../controllers/controlsCatalog.js"



export function renderLifes(lifes) {
  let htmlForLifes = ""
  for (let i = 0; i < lifes; i++) {
    htmlForLifes += `<img src="../img/Heart.png" style="width:15%">`
  }

  document.querySelector("#divForLifes").innerHTML = htmlForLifes
  document.querySelector("#divForLifes2").innerHTML = htmlForLifes
}


export function injectQuestionTypeMultiple(question, stage, maxDifEz, maxDifMed, maxDifHrd, difficultyLimit) {



  document.querySelector("#questionMultiple").innerHTML = `${stage}. ${question.question}`

  let difficultyTitle;
  if (question.difficulty < maxDifEz || question.difficulty == maxDifEz) {
    difficultyTitle = "Fácil"
  } else if (question.difficulty < maxDifMed || question.difficulty == maxDifMed) {
    difficultyTitle = "Normal"
  } else if (question.difficulty < maxDifHrd || question.difficulty == maxDifHrd) {
    difficultyTitle = "Dificil"
  } else if (question.difficulty == difficultyLimit) {
    difficultyTitle = "Desafio Final!"
  }
  document.querySelector("#difficultyMultiple").innerHTML = difficultyTitle

  document.querySelector("#A").value = question.opt1
  document.querySelector("#B").value = question.opt2
  document.querySelector("#C").value = question.opt3
  document.querySelector("#D").value = question.opt4


}


export function injectQuestionTypeComplete(question, stage, maxDifEz, maxDifMed, maxDifHrd, difficultyLimit) {



  document.querySelector("#questionComplete").innerHTML = `${stage}. ${question.question}`

  let difficultyTitle;
  if (question.difficulty < maxDifEz || question.difficulty == maxDifEz) {
    difficultyTitle = "Fácil"
  } else if (question.difficulty < maxDifMed || question.difficulty == maxDifMed) {
    difficultyTitle = "Normal"
  } else if (question.difficulty < maxDifHrd || question.difficulty == maxDifHrd) {
    difficultyTitle = "Dificil"
  } else if (question.difficulty == difficultyLimit) {
    difficultyTitle = "Desafio Final!"
  }
  document.querySelector("#difficultyComplete").innerHTML = difficultyTitle




}










export function getUserQuestions(categories) {

  let newQuestions = []

  let questions = JSON.parse(localStorage.getItem("questions"))

  for (const question of questions) {

    for (const category of categories) {
      if (question.category == category) {
        newQuestions.push(question)
      }
    }
  }
  return newQuestions

}






//Função para selecionar uma questão apropriada
export function questionSelector(questions, stage) {

  while (1) {

    //função numero aleatorio inteiro entre minimo  0 maximo questions.length ; perigoso,
    let random = Math.floor(Math.random() * (questions.length - 0 + 1)) + 0
    if (random == questions.length) {
      random -= 1
    }




    if (questions[random].difficulty == stage) {

      return questions[random];

    }

  }
}




export function gameOver(winCondition, reward) {

  let currentUser = sessionStorage.getItem("currentUser")
  let users = JSON.parse(localStorage.getItem("users"))

  let modalHtml = ""

  //check se ganhou
  if (winCondition) {

    modalHtml += `    
    <hr>

    <div class="row">
    <div class="col-sm-12">
    <h3 class="text-center" >Waow estás um craque! Chegaste até ao fim do Quiz parabéns!</h3>
    </div>
    </div>  
    
    <div class="row">
    <div class="col-sm-12">
    <div class="text-center">
    <img src="../img/Cool fish.png" width="80%">
    </div>
    </div>
    </div>

    <div class="row">
    <div class="col-sm-12">
    <h3 class="text-center" >Ganhaste ${reward} de experiencia!</h3>
    </div>
    </div>  
    `

  } else {

    modalHtml += `
    <hr>

    <div class="row">
    <div class="col-sm-12">
    <h3 class="text-center" >Perdeste desta vez... Para a proxima corre melhor!</h3>
    </div>
    </div>  
    
    <div class="row">
    <div class="col-sm-12">
    <div class="text-center">
    <img src="../img/Sad Inácio.png" width="80%">
    </div>
    </div>
    </div>

    <div class="row">
    <div class="col-sm-12">
    <h3 class="text-center" >Ganhaste ${reward} de experiencia!</h3>
    </div>
    </div>  

    `
  }

  //injetar
  document.getElementById("endGameModalContent").innerHTML += modalHtml

  //show modal
  $('#endGameModal').modal('show')

  
// When the user clicks anywhere outside of the modal, close it and reload the page
  $("#endGameModal").on('hide.bs.modal', function(){
    location.reload()
  });
 
  
 

  //variaveis para comparar 
  let initialLevel
  let newLevel

  //encontrar user
  for (const user of users) {
    if (user.username == currentUser) {

      initialLevel = user.level

      levelManager(user, reward)

      newLevel = user.level
    }
  }

  localStorage.setItem("users", JSON.stringify(users))

  if (initialLevel != newLevel) {
    unlockCategory(currentUser)
  }

  

}




//Função para sempre que se recebe experiencia (o utilizador pode subir de nivel, também faz o contrário para o quando o admin aceita uma sugestão sem querer)
export function levelManager(user, reward) {

  //adicionar experiencia e aumentar nivel se necessario (quando experiencia chega a 100)
  user.experience += reward


  if (user.experience >= 100) {
    user.experience -= 100
    user.level++
  } else if (user.experience < 0 && user.level == 1) {
    user.experience = 0
  } else if (user.experience < 0) {
    user.experience += 100
    user.level--
  }
}



//função para desbloquear uma categoria (por ordem de menos recente a mais recente)
//Vai buscar a coleção do user e compara com o array de todas  as categorias
//se encontrar uma categoria nova adiciona à coleção e dá update à local storage
function unlockCategory(managedUser) {

  let newCardCollection = getUserCollection(managedUser)

  
  let categories = getAllCats()

  let newCategory = true
  let users = JSON.parse(localStorage.getItem("users"))

  for (let index = 0; index < categories.length; index++) {

    newCategory = true


    for (let i = 0; i < newCardCollection.length; i++) {

      if (categories[index] === newCardCollection[i]) {
        newCategory = false
      }
    }

    if (newCategory == true) {

      newCardCollection.push(categories[index])

      Swal.fire({
        type: 'info',
        title: `Categoria desbloqueada: ${categories[index]}`,
      })

      break;
    }
  }



  for (const user of users) {
    if (user.username == managedUser) {

      user.cardCollection = newCardCollection

    }
  }

  localStorage.setItem("users", JSON.stringify(users))
}