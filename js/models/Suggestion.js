export class Suggestion {
    constructor(username, message) {
        this.username = username
        this.message = message      
        let today = new Date()
        let now = today.getDate() + "/" + (today.getMonth() + 1)     + "/" + today.getFullYear()  
        this.date = now
        this.approval = false
        this.disapproval = false
    }
}

