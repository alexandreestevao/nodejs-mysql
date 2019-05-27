Acessar MySQL com Pront de Comando:
mysql -h 'servidor' -u 'usuario' -p
mysql -h localhost -u root -p

Criar usuário:
CREATE USER 'novousuario'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
CREATE USER 'alexandreone'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

Liberar permissão para acessar a base de dado:
GRANT ALL PRIVELEGES ON * . * TO 'alexandreon'@'localhost';

Uma vez finalizadas as permissões que você quer definir para os seus novos usuários, certifique-se sempre de recarregar todos os privilégios.
FLUSH PRIVILEGES;