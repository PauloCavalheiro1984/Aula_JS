//window.addEventListener("load", function(){

//});
   
//window.addEventListener("load", function(event) {
 //   console.log("Todos os recursos terminaram o carregamento!");})


// let texto = document.querySelector("div");
    
    //texto.addEventListener("click", function(){
        //alert("clicou");
        
   // })


//let image = document.getElementById("imagem");
//let cover = document.querySelectorAll(".images");

//image.addEventListener("click", function(){
//    this.style.transform = "scale(0.3)";
//})

//image.addEventListener("dblclick", function(){
 //   this.style.transform = "scale(1)";
//})


//for (let i=0; i<cover.length; i++){
//    cover[i].addEventListener("mouseover", function(){
//        this.style.transform = "scale(0.9)";
//    });
   
//}

//for (let i=0; i<cover.length; i++){
 //   cover[i].addEventListener("mouseout", function(){
 //       this.style.transform = "scale(1)";
 //   });
   
//}

//window.addEventListener("keypress", function(e){
 //   if(e.key === "p"){
 //       alert("OW, BRÔ, NÃO CLIQUE EM P!!!");
 //   }
//});

//setTimeout(function() {
//    document.body.style.backgroundColor = "coral";
//}, 2000);


//let relogio = document.getElementById("relogio");

//let timer = setInterval(function () {
    
 //   let date = new Date();
  //  relogio.innerText = date.toLocaleString();
    

//}, 1000);

//setTimeout(function(){
  //  clearInterval(timer);
//}, 5000)

let nome = document.getElementById("exampleInputEmail1");
let estado = document.getElementById("exampleInputPassword1");
let submit = document.getElementById("submeter");

nome.addEventListener("focus", function(){
    console.log("entrou no campo nome");
    this.style.backgroundColor = "gray";
    this.style.color="purple";
});

nome.addEventListener("blur", function(){
    console.log("saiu do campo nome");
    this.style.backgroundColor = "white";
});

nome.addEventListener("keyup", function(){
    console.log(this.value);
    if(this.value.length > 2){
        console.log("tamanho correto");
    }
    else{
        console.log("tamanho incorreto");
    }
    
});

nome.addEventListener("change", function(){
    console.log("mudou");
});

estado.addEventListener("change", function(){
    console.log("mudou");
});

let erro = true;

submit.addEventListener("submit", function(e){
    if(erro === true){
    e.preventDefault();
    console.log("não mandou");
    }
});
