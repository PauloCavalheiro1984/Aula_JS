let vernome = sessionStorage.getItem("nome");
let veridade = sessionStorage.getItem("idade");

if (vernome === null && veridade === null){
    let nome = prompt("digite seu nome");
    let idade = prompt("digite sua idade");
    sessionStorage.setItem("nome", nome);
    sessionStorage.setItem("idade", idade);
}



let cep = document.querySelector(".cep");

cep.addEventListener("change", function(){
    let estado = document.querySelector(".estado");
    let cidade = document.querySelector(".cidade");
    let bairro = document.querySelector(".bairro");
    let cepAtual = cep.value;

    fetch(`https://viacep.com.br/ws/${cepAtual}/json/`)
    .then(response => response.json())
    .then(response => {
        estado.value = response.uf;
        cidade.value = response.localidade;
        bairro.value = response.bairro;
    })
    .catch(error => {
        estado.value = "CEP INVALIDO";
        cidade.value = "";
        bairro.value = "";
        alert("CEP INCORRETO");
    })
})



