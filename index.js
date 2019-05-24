const express = require("express"); //instanciando o módulo express

const app = express(); //clonando do módulo express para uma variável

//página raiz
app.get("/", function(req, res){
  res.send("Gerenciador Financeiro");
});

//página de contato
app.get("/contato", function(req, res){
  res.send("Página de contato");
});

//página de sobre-empresa
app.get("/sobre-empresa", function(req, res){
  res.send("Página sobre-empresa");
});

//página de blog
app.get("/blog", function(req, res){
  res.send("Página do blog");
});


//localhost:3000
app.listen(3000); //servidor iniciado na porta 3000
