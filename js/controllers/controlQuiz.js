import {User} from "../models/User.js"
import {Question} from "../models/Question.js";

//get array de perguntas da base de dados e shuffle à ordem

//selecionar 10 perguntas à sorte do array se existirem menos selecionar todas epor dentro de outro array

//eventlistener selecionar radio button conta como resposta
jogar();

function jogar(){


   //getUserlevel
   let userLevel = 3

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
   
   let currentQuestion
   currentQuestion = questionSelector(level)

   console.log("currentquestion= " + currentQuestion);

   let type = currentQuestion.type
   console.log(type);

   //if para modificar a pagina mediante o type de question, e event listeners respetivos

   injectQuestionTypeMultiple(currentQuestion, level)
   
   let currentPlay
   
   if(type == "multiple"){
      currentPlay = document.querySelector("#formMultiple")
      

         
   currentPlay.addEventListener("click", function (event){

      let answer
      if(document.querySelector("#opt").checked == true){

      }else if(document.querySelector("#opt").checked == true){

      }else if(document.querySelector("#opt").checked == true){

      }else if(document.querySelector("#opt").checked == true){

      }
      
      if("resposta correta"){
         level++
         bonusCount++
   
         exp += Math.round((5+level+lifes)/userLevel);
   
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
      console.log("lifes= " + lifes);
      console.log("exp= " + exp);
      console.log("level= " + level);
      console.log("bonus= " + bonusCount);
      
   
      //atribuir recompensa
      console.log(`You will gain ${exp} exp!`)
      if(level == 11){
         //VITORIA
         console.log("VITORIA");
         
      }else{
         jogada(userLevel, level, lifes, bonusCount, exp)
      }
      
   })
   }else{
      currentPlay = document.querySelector("#formComplete")
     //listener submit
   }
   console.log(currentPlay);
   console.log(listenerType);
   
   
   
   


 }
 





 function questionSelector(level){
    
   let questions = []
   questions = JSON.parse(localStorage.getItem("questions"))

   console.log("questions.length= " + questions.length);
   
   //função numero aleatorio inteiro entre minimo  0 maximo questions.length ; 
   let random = Math.floor(Math.random() * (questions.length - 0 +1)) + 0
   if(random == questions.length){random -= 1}

   console.log("random= " + random)
   console.log("question[random]= " + questions[random])
    
    if (questions[random].difficulty == level) {
       console.log("question.length= " + questions[random].difficulty);
       
       console.log("question[random] to return= " + questions[random])
    
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