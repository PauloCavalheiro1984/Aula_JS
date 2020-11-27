//alert ('Olá, Estudante');

//let resultado = confirm ('Deseja continuar?');
//console.log (resultado);

//let nome = prompt('Digite seu nome, muchacho');
//alert ('Olá, ' + nome);
//confirm(nome + ', você está pronto para continuar?')

//document.querySelector('h1').innerText += ' ' + nome;

//let tomas = document.querySelectorAll(".toms");

//for (let i=0;i<tomas.length;i++)
//{
//    console.log(tomas[i].innerText);
//}

//let tit = document.querySelector("h1");
//tit.innerHTML += " <em>mudei, </em>" + nome + "!";

//document.querySelector("p").classList.add("bold");
//document.body.classList.add("bold");

//let paragrafo = document.querySelectorAll(".pars");
//paragrafo.classList.add("bold");

//document.querySelector("h1").style.backgroundColor = "red";
//document.querySelector("p").style.color="orange";

//function aulaDeJavaScript (){
   
   // document.body.classList.add("bold");
//}

//aulaDeJavaScript();

//window.onload = function(){}  nesse método, quando vc seleciona o evento novamente, o proximo substitui o anterior

document.getElementById("pars").style.color="red";

window.addEventListener("load", function() {

    let verifica = document.getElementById("pars");

    verifica.addEventListener("click", function () {
        alert("clicou!");
        this.style.color = "orange"
    })


})
