export class Question{
    constructor(question, opt1, opt2, opt3, opt4, tags, type, difficulty, answer, hint){
        this.question = question
        this.opt1 = opt1
        this.opt2 = opt2
        this.opt3 = opt3
        this.opt4 = opt4
        this.tags = tags
        this.type = type
        this.difficulty = difficulty
        this.answer = answer
        this.hint = hint
    }
}

export let questions = localStorage.getItem(questions);