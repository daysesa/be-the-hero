const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');

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

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(11).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/casos', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), CasoController.index);

routes.post('/casos', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    })
}), CasoController.create);

routes.delete('/casos/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), CasoController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.post('/session', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}), SessionController.create);

module.exports = routes;