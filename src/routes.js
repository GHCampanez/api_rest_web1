const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const atividadeController = require('./controllers/atividadeController');
const biografiaController = require('./controllers/biografiaController');
const formacaoController = require('./controllers/formacaoController');
const habilidadeController = require('./controllers/habilidadeController');
const idiomaController = require('./controllers/idiomaController');
const informacaoController = require('./controllers/informacaoController');
const interesseController = require('./controllers/interesseController');
const linkController = require('./controllers/linkController');
const miniBIoController = require('./controllers/miniBIoController');
const portifolioControler = require('./controllers/portifolioControler');
const fotoController = require('./controllers/fotoController');
const curriculoController = require('./controllers/curriculoController');

 






routes.get('/atividade', atividadeController.index);
routes.get('/atividade/:id' , atividadeController.showOne);
routes.post('/atividade', atividadeController.store);
routes.put('/atividade/:id', atividadeController.update);
routes.delete('/atividade/:id', atividadeController.delete);


routes.get('/biografia', biografiaController.index);
routes.get('/biografia/:id' , biografiaController.showOne);
routes.post('/biografia', biografiaController.store);
routes.put('/biografia/:id', biografiaController.update);
routes.delete('/biografia/:id', biografiaController.delete);



routes.get('/formacao', formacaoController.index);
routes.get('/formacao/:id' , formacaoController.showOne);
routes.post('/formacao', formacaoController.store);
routes.put('/formacao/:id', formacaoController.update);
routes.delete('/formacao/:id', formacaoController.delete);




routes.get('/habilidade', habilidadeController.index);
routes.get('/habilidade/:id' , habilidadeController.showOne);
routes.post('/habilidade', habilidadeController.store);
routes.put('/habilidade/:id', habilidadeController.update);
routes.delete('/habilidade/:id', habilidadeController.delete);



routes.get('/idioma', idiomaController.index);
routes.get('/idioma/:id' , idiomaController.showOne);
routes.post('/idioma', idiomaController.store);
routes.put('/idioma/:id', idiomaController.update);
routes.delete('/idioma/:id', idiomaController.delete);





routes.get('/info', informacaoController.index);
routes.get('/info/:id' , informacaoController.showOne);
routes.post('/info', informacaoController.store);
routes.put('/info/:id', informacaoController.update);
routes.delete('/info/:id', informacaoController.delete);





routes.get('/interesse', interesseController.index);
routes.get('/interesse/:id' , interesseController.showOne);
routes.post('/interesse', interesseController.store);
routes.put('/interesse/:id', interesseController.update);
routes.delete('/interesse/:id', interesseController.delete);




routes.get('/link', linkController.index);
routes.get('/link/:id' , linkController.showOne);
routes.post('/link', linkController.store);
routes.put('/link/:id', linkController.update);
routes.delete('/link/:id', linkController.delete);





routes.get('/miniBio', miniBIoController.index);
routes.get('/miniBio/:id' , miniBIoController.showOne);
routes.post('/miniBio', miniBIoController.store);
routes.put('/miniBio/:id', miniBIoController.update);
routes.delete('/miniBio/:id', miniBIoController.delete);



routes.get('/portifolio', portifolioControler.index);
routes.get('/portifolio/:id' , portifolioControler.showOne);
routes.post('/portifolio', portifolioControler.store);
routes.put('/portifolio/:id', portifolioControler.update);
routes.delete('/portifolio/:id', portifolioControler.delete);




routes.get('/foto', fotoController.index);
routes.get('/foto/:id' , fotoController.showOne);
routes.post('/foto', fotoController.store);
routes.put('/foto/:id', fotoController.update);
routes.delete('/foto/:id', fotoController.delete);






routes.get('/curriculo', curriculoController.index);
routes.get('/curriculo/:id' , curriculoController.showOne);
routes.post('/curriculo', curriculoController.store);
routes.put('/curriculo/:id', curriculoController.update);
routes.delete('/curriculo/:id', curriculoController.delete);





module.exports = routes;