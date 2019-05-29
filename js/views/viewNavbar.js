import newUser from "../models/newUser.js";

//import {newUser} from "../models/newUser.js"



// Define um array para guardar os objetos User
export let currentUser;
// Caso já exista uma chave users na LocalStorage é carregado tudo para o array
// Caso contrário são guardadas no array, vários objetos User inseridos manualmente
if (localStorage.currentUser) {
    currentUser = JSON.parse(localStorage.currentUser)
} else {
    
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
}

