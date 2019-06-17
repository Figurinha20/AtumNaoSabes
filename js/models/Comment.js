export class Comment{
    constructor(userName, userImg, commentText){
        this.userName = userName
        this.userImg = userImg
        this.commentText = commentText
        
        let today = new Date()
        let now = today.getDate() + "/" + (today.getMonth() + 1)     + "/" + today.getFullYear()  
        this.date = now
    }
}
