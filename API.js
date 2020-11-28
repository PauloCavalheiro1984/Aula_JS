let vernome = sessionStorage.getItem("nome");
let veridade = sessionStorage.getItem("idade");

if (vernome === null && veridade === null){
    let nome = prompt("digite seu nome");
    let idade = prompt("digite sua idade");
    sessionStorage.setItem("nome", nome);
    sessionStorage.setItem("idade", idade);
}




