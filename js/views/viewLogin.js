
import {validLogin} from "../controllers/controlsLogin.js"
export function setLogoutListener(){
    //selecionar butão de logout
    const btnLogout = document.querySelector("#btnLogout")

    //add listener on click
    btnLogout.addEventListener("click", function (event) {
        sessionStorage.removeItem("currentUser")

        //CHANGE LOCATION PARA INDEX.HTML
        location.href="../html/index.html"
    })

}



export function setLoginListener(){

const myForm = document.querySelector("#userLog")
myForm.addEventListener("submit", function (event) {


    //Receber dados
    let logUsername = document.querySelector("#logUserName").value
    let logPassword = document.querySelector("#logPassword").value
    
    console.log(logUsername)
    console.log(logPassword)
    


    //Verificar se Utilizador Já existe

    if (validLogin(logUsername, logPassword) == true) {
        
        Swal.fire({
            type:"info",
            title: "Bem vindo " + logUsername +"!",
            onClose: function(){
                let currentUser = logUsername

                sessionStorage.setItem("currentUser", currentUser)
        
                location.href="../html/index.html"
            }
          })
       
    } else {
        
    }

    //prevenir que form seja submetido
    event.preventDefault()

    
})


}
