console.log("Gerenciador Financeiro");

var client = "Alexandre Estevão";

console.log("Cliente: " + client);

var valProduct = 100;
var valDiscount = 37;

var discountFunc = require("./modules/calDiscount");

var finalValue = discountFunc(valProduct, valDiscount);

console.log("Valor Final do Produto: " + finalValue);
