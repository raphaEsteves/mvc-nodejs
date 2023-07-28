# mvc-nodejs

### O projeto se baseia na criação de uma API local com CRUD simples utilizando:
- [x] NodeJS: <i>https://nodejs.org/en</i>
- [x] Express: <i>Express: npm i express</i>
- [x] Nodemon: <i>Nodemon: npm i nodemon</i>
- [x] MySQL: <i>Xampp 8.1.6: https://www.apachefriends.org/pt_br/index.html</i>
- [X] Padrão MVC
- [X] Repository

Segue abaixo o esquema de organização do projeto.
![image](https://github.com/raphaEsteves/mvc-nodejs/assets/43451788/427c8940-5c23-476a-adb8-cfbd913f2b94)

#### Breve resumo do funcionamento.
- O index.js tem a responsabilidade de ler os dados com JSON e direcionar para as rotas.
- O routes.js tem a responsabilidade de encaminhar para o seu respectivo controller, onde contem informações úteis para a manipulação no banco de dados.
- O conexao.js tem a responsabilidade do diálogo entre o sistema e o MySQL.
- O repository.js realiza as queries caso o conexao.js "permita".

##### O que falta? Realizar tratamento de erros e desenvolver um frontend simples. Talvez eu o faça em React Native. Mas o foco é praticar Node.
