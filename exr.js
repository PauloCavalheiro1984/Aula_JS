let listas = document.getElementById("lista");
let submit = document.getElementById("submeter");
let senha = document.getElementById("exampleInputPassword1");
let relogio = document.getElementById("reloj");


setTimeout(function() {
       document.body.style.backgroundColor = "purple";
    }, 10000);



listas.style.display = "none";


submit.addEventListener("submit", function(e){
    if (senha.value === ""){
        e.preventDefault();
        alert("preencha sua senha");
    }
    else if (senha.value.length <10){
        e.preventDefault();
        alert("senha com poucos caracteres");
    }
    else{
        alert("enviado com sucesso")
    }    
});

window.addEventListener("load", function(){
    alert("seja bem vindo");
});



let myvar= setInterval(function(e){
    let navegacao = confirm("você ainda está ai?")
        if(navegacao == true){
            document.body.style.backgroundColor = "green";
        }
        else{
            alert("parando o sistema....")
            clearInterval(myvar);
         }
}, 60000);

setInterval(function(){
    let date = new Date();
    relogio.innerText = date.toLocaleString();
});