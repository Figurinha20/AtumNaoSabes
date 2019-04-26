import {newUser} from "../models/newUser"
import {newQuestion} from "../models/newQuestion";

//get array de perguntas da base de dados e shuffle à ordem

//selecionar 10 perguntas à sorte do array se existirem menos selecionar todas epor dentro de outro array

//eventlistener selecionar radio button conta como resposta

function jogar(){


    //nivel & game functionalities
    let level = 1;
    let difficulty = 1;
    let difficultyCount = 1;
    let lifes = 3;
    let winingBool= true;

    //reward
    let exp = 0;
 
    //buscar question;;
    
    let currentQuestion = questionSelector(difficulty)

    injectQuestion(currentQuestion, level)
    
    //if para modificar a pagina mediante o type de question, e event listeners respetivos
 
    
    
    if("resposta correta"){
       level++
       difficultyCount++

       //sobe dificuldade de 3 a 3 perguntas
       if(difficultyCount%3 === 0 && difficulty != 10){
          difficulty++
       }

       exp += 5*level*lifes;

       //Waow!; reset de botoes;  

    }else{
       winingBool=false
       //mudar screen para winning screen
    }
    
 
    }

    //atribuir recompensa
    console.log(`You gained ${exp} exp!`)
 
 

 function questionSelector(difficulty){

    let random = Math.random(questions.legnth)

    if (questions[random].difficulty === difficulty) {
    return questions[random]
    }else {
        questionSelector()
    }
 }

 function injectQuestion(question, level){

    document.querySelector("#question").innerHTML = `<span id="questionNumber">${level}. </span> ${question.question}`

    document.querySelector("#difficulty").innerHTML = question.difficulty

    document.querySelector("#A").value = question.opt1
    document.querySelector("#B").value = question.opt2
    document.querySelector("#C").value = question.opt3
    document.querySelector("#D").value = question.opt4

    
 }