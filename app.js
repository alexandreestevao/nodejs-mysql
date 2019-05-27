const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('testdb', 'alexandreone', '123456', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize.authenticate().then(function(){
	console.log('Conexão realizda com sucesso!');
}).catch(function(err){
	console.log('Erro ao realizar a conexão com BD: ' + err);
});

const Pagamento = sequelize.define('pagamentos', {
  // attributes
  nome: {
    type: Sequelize.STRING,
    //allowNull: false
  },
  valor: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
});

Pagamento.create({
	nome: "Energia",
	valor: 220
});

//Criar tabela com Sequelize
//User.sync({force: true});