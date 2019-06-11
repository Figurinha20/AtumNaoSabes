import {renderLifes, injectQuestionTypeComplete, injectQuestionTypeMultiple, questionSelector} from "../controllers/controlQuiz.js"

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


//set dos eventListeners nos radio buttons e no text
for (let i = 1; i < 5; i++) {
    console.log(i);
    //em cada opção a mesma função é executada
    document.querySelector(`#opt${i}`).addEventListener("click",  answerMultiple)
 }

document.querySelector("#formAnswerComplete").addEventListener("submit",  answerComplete)






 gameStart()








function gameStart(){
  

    //nivel & game functionalities set para o começo do quiz
    stage = 1;
    lifes = 3;
  

    //declarar recompensa
    exp = 0;

    gameProgress()
}










function gameProgress(){

    //reset buttons
    document.querySelector("#opt1").checked = false
    document.querySelector("#opt2").checked = false
    document.querySelector("#opt3").checked = false
    document.querySelector("#opt4").checked = false
    document.querySelector("#txtAnswer").value = ""
    document.querySelectorAll("#btnHint").value = "Comprar pista com experiência"

    questionSelector()


    console.log(currentQuestion)
    console.log(currentQuestion.type)
    if(currentQuestion.type == "multiple"){
        //hide complete
        document.querySelector("#containerForComplete").className = "hidden"
        //show multiple
        document.querySelector("#containerForMultiple").className = "container-fluid"

        injectQuestionTypeMultiple(currentQuestion, stage, maxDifEz, maxDifMed, maxDifHrd)
    }else{
        //show complete
        document.querySelector("#containerForComplete").className = "container-fluid center"
        //hide multiple
        document.querySelector("#containerForMultiple").className = "hidden"

        injectQuestionTypeComplete(currentQuestion, stage, maxDifEz, maxDifMed, maxDifHrd)
    }


}







function answerMultiple(event){

    
      //buscar opção escolhida
      let answer
      if(document.querySelector("#opt1").checked == true){
         answer = document.querySelector("#A").value
      }else if(document.querySelector("#opt2").checked == true){
         answer = document.querySelector("#B").value
      }else if(document.querySelector("#opt3").checked == true){
         answer = document.querySelector("#C").value
      }else if(document.querySelector("#opt4").checked == true){
         answer = document.querySelector("#D").value
      }
      
      console.log("answer = " + answer)
      console.log("resposta de curentquest = " + currentQuestion.question)
      //testar se resposta correta
      if(currentQuestion.answer == answer){

        alert("Resposta Correta!")
         //avançar no quiz
         stage++
        
         //acrescentar na recompensa final
         exp += stage+lifes;
   
        
   
      }else{
         alert("Resposta errada :(")
         //redução da recompensa
         exp -= 1;
         
         //-1 vida
         lifes--
         renderLifes(lifes)

         //GAME OVER PASSAR PARA A RECOMPENSA
         if(lifes == 0){
   
         }
         
      }
      console.log("lifes= " + lifes);
      console.log("exp= " + exp);
      console.log("stage= " + stage);
     
   
      //atribuir recompensa
      console.log(`You will gain ${exp} exp!`)

      //caso passe do nivel de dificuldade 10 ganha senão repete a jogada
      if(stage == 11){
         //VITORIA
         console.log("VITORIA");
         
      }
      
}





function answerComplete(event){

   
   //buscar opção escolhida
   let answer = document.querySelector("#txtAnswer").value.toLowerCase()
   console.log(answer)
   
   
   console.log("answer = " + answer)
   console.log("resposta de curentquest = " + currentQuestion.answer.toLowerCase())
   //testar se resposta correta
   if(currentQuestion.answer.toLowerCase() == answer){

     alert("Resposta Correta!")
      //avançar no quiz
      stage++
     
      //acrescentar na recompensa final
      exp += stage+lifes;

     

   }else{

      alert("Resposta errada :(")
      //redução da recompensa
      exp -= 1;
      
      //-1 vida
      lifes--
      renderLifes(lifes)

      //GAME OVER PASSAR PARA A RECOMPENSA
      if(lifes == 0){

      }
   }
   console.log("lifes= " + lifes);
   console.log("exp= " + exp);
   console.log("stage= " + stage);
  

   //atribuir recompensa
   console.log(`You will gain ${exp} exp!`)

   event.preventDefault()

   //caso passe do nivel de dificuldade 10 ganha senão repete a jogada
   if(stage == 11){
      //VITORIA
      console.log("VITORIA");
      
   }

}

