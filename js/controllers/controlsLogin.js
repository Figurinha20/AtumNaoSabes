//Função para verificar se pode ser iniciada sessão com uma conta

export function validLogin(logUsername, logPassword) {
    let users = JSON.parse(localStorage.getItem("users"));

    for (const user of users) {
        if (user.username === logUsername && user.password === logPassword) {
            //caso informação esteja correta
            return true;
        }else if (user.username === logUsername && user.password != logPassword){
            //caso password errada
            Swal.fire({
                type: 'warning',
                title: 'Password Incorreta!',
              })
              
            return false;
        }
    }
    Swal.fire({
        type: 'warning',
        title: 'Utilizador não encontrado!',
      })
    return false;
}

