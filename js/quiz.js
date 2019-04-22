import {newUser} from "./models/newUser"
import {newQuestion} from "./models/newQuestion";

//get array de perguntas da base de dados e shuffle à ordem

//selecionar 10 perguntas à sorte do array se existirem menos selecionar todas epor dentro de outro array

//eventlistener selecionar radio button conta como resposta

function jogar(){
    //nivel 
    let level = 1;
    let difficulty = 1;
    let lifes = 3;
    let winingBool= true;
 
    //enquanto não errar função não pára
    while(winingBool == true){
 
    //buscar question;;
    
    let currentQuestion = questionSelector(difficulty)

    injectQuestion(currentQuestion, level)
    
    //if para modificar a pagina mediante o type de question
 
    //await event resposta
    await

    
    //if resposta correta: (level++; exp += 2; else winingBool = false
 
 
    }
    //recompensa por chegar longe exExp += level - (type of question respetivamente ExHard Hard Medium Easy => 2  8  12  20)
    //se exExp<0 exExp = 0;
 
 }

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