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

//localhost:3000
app.listen(3000); //servidor iniciado na porta 3000
