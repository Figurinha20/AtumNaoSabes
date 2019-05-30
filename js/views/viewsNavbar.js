import {User} from "../models/User.js";




export let currentUser;

document.querySelector("body").addEventListener("load", function (event) {

if (localStorage.currentUser) {
    //caso um utilizador esteja autenticado vai busca-lo da storage para alterar a navbar
    currentUser = JSON.parse(localStorage.currentUser)

//tirar da local storage dados do utilizador


//injetar navbar nohtml com esses dados loged in



} else {
    //quando o site abre pela primeira vez adiciona a veriavel na storage para uso
    currentUser = false;
    localStorage.setItem("currentUser", JSON.stringify(currentUser))

    //injetar navbar default


}

})