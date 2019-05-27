//conexão com o banco de dados MySQL
var mysql      = require('mysql');

//a partir do MySQL 8 apresenta o erro ao utilizar o usuário root para conexão, necessário criar novo usuário (intrução no Readme)
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'alexandreone',
  password : '123456',
  database : 'testdb'
});

connection.connect(function(err){
	if(err) console.log('Erro ao realizar a conexão com BD:'+ err.stack);
});

connection.query("INSERT INTO users(nome, email) VALUES ('Gui', 'guigui@gmail.com')", function(err, result){
	if(!err){
		console.log('Usuário cadastrado com sucesso!');
	}else{
		console.log('Erro ao cadastrar o usuário!');
	}
});
