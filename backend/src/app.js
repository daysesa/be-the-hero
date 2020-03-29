const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');

const routes = require('./routes'); // './' para referenciar a mesma pasta do arquivo index.js

const app = express();

app.use(express.json()); // O corpo (body) da requisição será informado no formato json
app.use(cors()); //todas as aplicações podem acessar esse back-end
app.use(routes);
app.use(errors());


/*
* Comunicação com o BD:
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where
*/

//app.listen(3333); 
module.exports = app;