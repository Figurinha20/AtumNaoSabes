export class Card{
    constructor(name, img, category, description, videos, audios){
        this.name = name
        this.img = img
        this.category = category
        this.description = description
        this.videos = videos
        this.audios = audios
        this.comments = []
        this.rank = 0
        
    }
}
