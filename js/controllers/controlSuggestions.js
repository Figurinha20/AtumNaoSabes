import {Suggestion} from "../models/Suggestion.js"
export function getUserImg(username){

    let users = JSON.parse(localStorage.getItem("users"))
    for (const user of users){
        if(user.username == username){
            return user.img;
        }
    }
}