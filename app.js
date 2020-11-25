//alert ('Olá, Estudante');

//let resultado = confirm ('Deseja continuar?');
//console.log (resultado);

let nome = prompt('Digite seu nome, muchacho');
alert ('Olá, ' + nome);
//confirm(nome + ', você está pronto para continuar?')

//document.querySelector('h1').innerText += ' ' + nome;

let tomas = document.querySelectorAll(".toms");

for (let i=0;i<tomas.length;i++)
{
    console.log(tomas[i].innerText);
}

let tit = document.querySelector("h1");
tit.innerHTML += " <em>mudei, </em>" + nome + "!";