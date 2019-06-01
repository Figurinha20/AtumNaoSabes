//Função encontra user pelo nome na storage e põe os seus dados num array
import {users} from "../models/User.js"
    //import array de users

export function getUserData(Username){
    
    
    let data = [];
    for (const user of users) {
        
        if (user.username === Username) {
            //quando encontrar user
            data = [user.adminStat, user.experience, user.level, user.profilePicture ]
            return data;
        }
        
    }
    alert("Something is very wrong")

}



