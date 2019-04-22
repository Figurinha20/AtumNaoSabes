export class newCard{
    constructor(name, img, catalog, description, etc = []){
        this.name = name
        this.img = img
        this.catalog = catalog
        this.description = description
        this.etc = etc //Not Sure if This is how it's Done ??????????? perguntar ao professor just to be sure...
        this.comments = [] //These will be added by the users later on
    }
}