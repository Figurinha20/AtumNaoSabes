//Função para verificar se pode ser iniciada sessão com uma conta
export function validLogin(logUsername, logPassword) {
    for (const user of users) {
        if (user.username === logUsername && user.password === logPassword) {
            //caso informação esteja correta
            return true;
        }else if (user.username === logUsername && user.password != logPassword){
            //caso password errada
            alert("Password incorreta");
            return false;
        }
    }
    alert("User não encontrado")
    return false;
}