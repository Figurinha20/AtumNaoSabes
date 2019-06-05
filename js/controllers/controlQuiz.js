import {User} from "../models/User.js"
import {Question} from "../models/Question.js";

//get array de perguntas da base de dados e shuffle à ordem

//selecionar 10 perguntas à sorte do array se existirem menos selecionar todas epor dentro de outro array

//eventlistener selecionar radio button conta como resposta
jogar();

function jogar(){


   //getUserlevel
   let userLevel = 3

    //nivel & game functionalities set para o começo do quiz
    let level = 1;
    let lifes = 3;
    let bonusCount = 0;
    

    //declarar recompensa
    let exp = 0;

    //iniciar a primeira ronda
    jogada(userLevel, level, lifes, bonusCount, exp)
 
    

    }

    


 function jogada(userLevel, level, lifes, bonusCount, exp){

   //buscar question por dificuldade
   let currentQuestion
   currentQuestion = questionSelector(level)

   console.log("currentquestion= " + currentQuestion);

   //ver tipo de question para ver se deve mudar de html
   let type = currentQuestion.type
   console.log(type);

   //if para modificar a pagina mediante o type de question, e event listeners respetivos

   //injetarpergunta no html
   injectQuestionTypeMultiple(currentQuestion, level)
   
   //definir local onde inserir listener
   let currentPlay
   
   if(type == "multiple"){

      //esconder HTML "complete" mostrar html "multiple"
   
   //definir o local do multiple
   currentPlay = document.querySelector("#formMultiple")
      
   //quando escolher checkbox 
   currentPlay.addEventListener("click", function (event){

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
         //avançar no quiz
         level++
         //contar bonus
         bonusCount++
   
         //acrescentar na recompensa final
         exp += Math.round((5+level+lifes)/userLevel);
   
         if(bonusCount == 3 && lifes != 4){
            //se acertar 3 perguntas de seguida e não tiver o maximo de vidas (4) ganha uma vida extra
            alert("Vida  Bónus!")
            lifes++
         }
         
   
      }else{
         //caso tenha errado na primeira pergunta não desce de nivel
         if(level != 1){
            //desce nivel
            level--
         }
         //redução do xp
         exp -= 1;
         //-1 vida
         lifes--
         //reset do bonus
         bonusCount = 0
      }
      console.log("lifes= " + lifes);
      console.log("exp= " + exp);
      console.log("level= " + level);
      console.log("bonus= " + bonusCount);
      
   
      //atribuir recompensa
      console.log(`You will gain ${exp} exp!`)

      //caso passe do nivel de dificuldade 10 ganha senão repete a jogada
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