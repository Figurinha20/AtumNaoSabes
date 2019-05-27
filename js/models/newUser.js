export default class newUser {
    constructor(username, password,adminStat=false) {
        this.username = username
        this.password = password
        this.adminStat = adminStat
        this.experience = 0
        this.level = 1
        this.profilePicture = ""
        this.cardCollection = []
    }
}