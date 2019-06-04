import {User} from "../models/User.js"
import {Question} from "../models/Question.js";

//get array de perguntas da base de dados e shuffle à ordem

//selecionar 10 perguntas à sorte do array se existirem menos selecionar todas epor dentro de outro array

//eventlistener selecionar radio button conta como resposta
jogar();

function jogar(){


   //getUserlevel
   let userLevel = "uma função(currentUser)"

    //nivel & game functionalities
    let level = 1;
    let lifes = 3;
    let bonusCount = 0;
    

    //reward
    let exp = 0;

    jogada(userLevel, level, lifes, bonusCount, exp)
 
    

    }

    


 function jogada(userLevel, level, lifes, bonusCount, exp){

   //buscar question;;
   
   let currentQuestion = questionSelector(level)

   console.log(currentQuestion);

   let type = currentQuestion.type
   console.log(type);

   //if para modificar a pagina mediante o type de question, e event listeners respetivos

   injectQuestionTypeMultiple(currentQuestion, level)
   
   let currentPlay
   let listenerType
   if(type == "multiple"){
      currentPlay = document.querySelectorAll("#opt")
      console.log(currentPlay);
      (currentPlay)
      listenerType = "click"
   }else{
      currentPlay = document.querySelector("#CENA PARA COMPLETA FRASE")
      listenerType = "submit"
   }
   console.log(currentPlay);
   console.log(listenerType);
   
   
currentPlay.addEventListener(listenerType, function (event){

   if("resposta correta"){
      level++
      bonusCount++

      exp += (5+level+lifes)/userLevel;

      if(bonusCount == 3){
         alert("Vida  Bónus!")
         lifes++
      }
      

   }else{
      if(level != 1){
         level--
      }
      exp -= 1;
      lifes--
      bonusCount = 0
   }
   

   //atribuir recompensa
   console.log(`You will gain ${exp} exp!`)
   if(level == 11){
      //VITORIA
      console.log("VITORIA");
      
   }else{
      jogada(userLevel, level, lifes, bonusCount, exp)
   }
   
})
   
   


 }
 





 function questionSelector(level){
    
   let questions = JSON.parse(localStorage.getItem("questions"))

   console.log(questions.legnth);
   
   let random = Math.trunc(Math.random(questions.legnth))

   console.log(random)
    
    if (questions[random].difficulty == level) {
       alert(questions[random].difficulty)
    return questions[random]
    }else {
        questionSelector(level)
    }
 }

 function injectQuestionTypeMultiple(question, level){

   
    document.querySelector("#question").innerHTML = `${level}. ${question.question}`

    let difficultyTitle;
    if(question.difficulty < 3 || question.difficulty == 3){
      difficultyTitle = "Fácil"
    }else if(3 < question.difficulty<6 || question.difficulty == 6){
      difficultyTitle = "Normal"
    }else if(6 < question.difficulty<9 || question.difficulty == 9){
      difficultyTitle = "Dificil"
    }else{
      difficultyTitle = "Desafio Final!"
    }
    document.querySelector("#difficulty").innerHTML = difficultyTitle

    document.querySelector("#A").value = question.opt1
    document.querySelector("#B").value = question.opt2
    document.querySelector("#C").value = question.opt3
    document.querySelector("#D").value = question.opt4

    
 }