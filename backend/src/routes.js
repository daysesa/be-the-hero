const express = require('express');
//const connection = require('./database/connection');
const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/*
* Rota / recurso (por ex.: tabela do bd Users)
*/

/*
* Métodos HTTP:
*
* GET: Buscar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Apagar uma informação no back-end
*/

/*
* Tipos de parâmetros:
*
* Query Params: Parâmetros nomeados enviados na rota após o símbolo '?' (filtros, paginação)
** Ex.: /users?page=2&nome=Dayse&idade=33
* Route Params: Parâmetros utilizados para identificar recursos
** '/:id'
** Ex.: /users/1
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos (utilizado com post)
*/

/*
routes.get('/users', (request, response) => {
    const params = request.query; //acessa os query params
    //const params = request.params; //acessa os parâmetros de route
    //const body = request.body; //envia valores usando post

    console.log(params);

    //    return response.send("Hello World");
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Dayse Silveira de Almeida'
    });
});
*/

//routes.get('/ongs', async (request, response) => {
//    const ongs = await connection('ongs').select('*');

//    return response.json(ongs);

//});

routes.get('/ongs', OngController.index);

//routes.post('/ongs', async (request, response) => {
//    // Aqui vem aquilo que está em create em OngConroller
//});

routes.post('/ongs', OngController.create);

routes.get('/casos', CasoController.index);
routes.post('/casos', CasoController.create);
routes.delete('/casos/:id', CasoController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);

module.exports = routes;