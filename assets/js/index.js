/*function entrar(){

    let login = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(login == "adm@belcomercio.com" && password == "12345"){
        location.href = "systema.html";
    }else{
        alert("E-mail ou Senha errada!!")
    }
}*/

if (localStorage.getItem("token") == null) {
    alert("Você precisa estar logado para acessar essa página");
    window.location.href = "./assets/html/signin.html";
}
  
const userLogado = JSON.parse(localStorage.getItem("userLogado"));

const logado = document.querySelector("#logado");
    logado.innerHTML = `${userLogado.nome}`;

function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "./assets/html/signin.html";
}
