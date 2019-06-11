let currentQuestion;

//GET array de questions e eliminar todas as que não teem tags na coleção do utilizador
let questions = JSON.parse(localStorage.getItem("questions"))

//valores para jogar
let userLevel
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

 document.querySelector(`#txtAnswer`).addEventListener("submit",  answerComplete)






 gameStart()




function gameStart(){
   //getUserlevel
   userLevel = 3

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

        injectQuestionTypeMultiple(currentQuestion, stage)
    }else{
        //show complete
        document.querySelector("#containerForComplete").className = "container-fluid center"
        //hide multiple
        document.querySelector("#containerForMultiple").className = "hidden"

        injectQuestionTypeComplete(currentQuestion, stage)
    }


}


function answerMultiple(){

    
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
         //caso tenha errado na primeira pergunta não desce de nivel
         if(stage != 1){
            //desce nivel
            stage--
         }
         //redução da recompensa
         exp -= 1;
         //-1 vida
         lifes--
         
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
         
      }else{
        
         gameProgress()
      }
      
}





function answerComplete(){

    
   //buscar opção escolhida
   let answer = document.querySelector("#txtAnswer").toLowerCase()
   
   
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
      //caso tenha errado na primeira pergunta não desce de nivel
      if(stage != 1){
         //desce nivel
         stage--
      }
      //redução da recompensa
      exp -= 1;
      //-1 vida
      lifes--
      
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
      
   }else{
     
      gameProgress()
   }
   


}





















function questionSelector(){
 
    console.log("questions.length= " + questions.length);
    
    //função numero aleatorio inteiro entre minimo  0 maximo questions.length ; 
    let random = Math.floor(Math.random() * (questions.length - 0 +1)) + 0
    if(random == questions.length){random -= 1}
 
    console.log("random= " + random)
    console.log("question[random]= " + questions[random])
     
     if (questions[random].difficulty == stage) {
        console.log("question.length= " + questions[random].difficulty);
        
        console.log("question[random] to return= v")
        console.log(questions[random])
     currentQuestion = questions[random]
 
     }else {
         questionSelector(stage)
     }
  }




  function injectQuestionTypeMultiple(question, stage){

    

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

 
 function injectQuestionTypeComplete(question, stage){

    

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

