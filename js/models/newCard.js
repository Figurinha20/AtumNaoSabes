import {newComment} from "./newComment.js";
export class newCard{
    constructor(name, img, catalog, description, etc = [], newComment = []){
        this.name = name
        this.img = img
        this.catalog = catalog
        this.description = description
        this.etc = etc 
        this.comments = newComment
    }
}