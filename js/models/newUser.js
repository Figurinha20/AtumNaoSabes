export class newUser {
    constructor(userName, password,adminStat=false) {
        this.userName = userName
        this.password = password
        this.adminStat = adminStat
        this.experience = 0
        this.level = 1
        this.profilePicture = ""
        this.cardCollection = []
    }
}