export default class Question{
    constructor(description,image,sound,video,answers,correctanswer,xp,level){
        this.description=description
        this.image=image
        this.sound=sound
        this.video=video
        this.answer=answers /** array aqui */
        this.correctanswer=correctanswer
        this.level=level
    }    
}