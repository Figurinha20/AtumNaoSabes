import {newComment} from "./newComment.js";
export class newCard{
    constructor(name, img, tags, description, etc = [], newComment = []){
        this.name = name
        this.img = img
        this.tags = tags
        this.description = description
        this.etc = etc 
        this.comments = newComment
        
    }
}