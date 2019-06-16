import {
   renderLifes,
   injectQuestionTypeComplete,
   injectQuestionTypeMultiple,
   questionSelector
} from "../controllers/controlQuiz.js"

let currentQuestion;

//GET array de questions e eliminar todas as que não teem tags na coleção do utilizador
let questions = JSON.parse(localStorage.getItem("questions"))

//valores para jogar
let stage
let lifes
let exp

//valores estruturais
const maxDifEz = 3
const maxDifMed = 6
const maxDifHrd = 9
const difficultyLimit = 10


//set dos eventListeners nos radio buttons e no text
for (let i = 1; i < 5; i++) {

   //em cada opção a mesma função é chamada
   document.querySelector(`#opt${i}`).addEventListener("click", answerMultiple)
}

document.querySelector("#formAnswerComplete").addEventListener("submit", answerComplete)

//listeners para os butoes hint
document.querySelector("#btnHint1").addEventListener("click", showHint)
document.querySelector("#btnHint2").addEventListener("click", showHint)




gameStart()








function gameStart() {


   //nivel & game functionalities set para o começo do quiz
   stage = 1;
   lifes = 3;


   //declarar recompensa
   exp = 0;

   gameProgress()
}









//Seguir para a pergunta seguinte
function gameProgress() {

   console.log("exp = " + exp)

   resetButtons()

   //selecionar pergunta aleatoria com dificuldade adequada ao stage do quiz
   currentQuestion = questionSelector(questions, stage)


   if (currentQuestion.type == "multiple") {
      //hide complete
      document.querySelector("#containerForComplete").className = "hidden"
      //show multiple
      document.querySelector("#containerForMultiple").className = "container-fluid"

      injectQuestionTypeMultiple(currentQuestion, stage, maxDifEz, maxDifMed, maxDifHrd)
   } else {
      //show complete
      document.querySelector("#containerForComplete").className = "container-fluid center"
      //hide multiple
      document.querySelector("#containerForMultiple").className = "hidden"

      injectQuestionTypeComplete(currentQuestion, stage, maxDifEz, maxDifMed, maxDifHrd)
   }


}







function resetButtons() {
   //reset buttons
   document.querySelector("#opt1").checked = false
   document.querySelector("#opt2").checked = false
   document.querySelector("#opt3").checked = false
   document.querySelector("#opt4").checked = false
   document.querySelector("#txtAnswer").value = ""
   document.querySelector("#btnHint1").value = "Comprar pista com experiencia?"
   document.querySelector("#btnHint2").value = "Comprar pista com experiencia?"
}











function answerMultiple(event) {


   //buscar opção escolhida
   let answer
   if (document.querySelector("#opt1").checked == true) {
      answer = document.querySelector("#A").value
   } else if (document.querySelector("#opt2").checked == true) {
      answer = document.querySelector("#B").value
   } else if (document.querySelector("#opt3").checked == true) {
      answer = document.querySelector("#C").value
   } else if (document.querySelector("#opt4").checked == true) {
      answer = document.querySelector("#D").value
   }


   //testar se resposta correta
   if (currentQuestion.answer == answer) {

      alert("Resposta Correta!")
      //acrescentar na recompensa final
      exp += stage + lifes;


      //avançar no quiz
      stage++

      //caso passe do nivel da dificuldade maxima ganha senão repete a jogada
      if (stage > difficultyLimit) {
         //VITORIA
         console.log("VITORIA");

      } else {
         gameProgress()
      }

   } else {
      alert("Resposta errada :(")

      //-1 vida
      lifes--
      renderLifes(lifes)

      //GAME OVER PASSAR PARA A RECOMPENSA
      if (lifes == 0) {
         console.log("GAMEOVER");
      }

      resetButtons()

   }




}





function answerComplete(event) {


   //buscar opção escolhida
   let answer = document.querySelector("#txtAnswer").value.toLowerCase()



   //testar se resposta correta
   if (currentQuestion.answer.toLowerCase() == answer) {

      alert("Resposta Correta!")
      //acrescentar na recompensa final
      exp += stage + lifes;

      //avançar no quiz
      stage++


      //caso passe do nivel da dificuldade maxima ganha senão repete a jogada
      if (stage > difficultyLimit) {
         //VITORIA
         console.log("VITORIA");

      } else {
         gameProgress()
      }


   } else {

      alert("Resposta errada :(")

      //-1 vida
      lifes--
      renderLifes(lifes)

      //GAME OVER PASSAR PARA A RECOMPENSA
      if (lifes == 0) {
         console.log("GAMEOVER");
      }

      resetButtons()
   }

   event.preventDefault()

}






function showHint() {

   alert("work?")

   let btnHint = document.querySelector("#btnHint1").value
   console.log(btnHint)

   if (btnHint == "Comprar pista com experiencia?") {
      alert("please?")
      document.querySelector("#btnHint1").value = currentQuestion.hint
      document.querySelector("#btnHint2").value = currentQuestion.hint

      //retirar um pouco da recompensa
      exp -= 2
   }
}