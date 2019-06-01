export class Card{
    constructor(name, img, tags, description, etc, comments){
        this.name = name
        this.img = img
        this.tags = tags
        this.description = description
        this.etc = etc
        this.comments = comments
        
    }
}

export let cards = localStorage.getItem(cards);