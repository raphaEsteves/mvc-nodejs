import { Router } from "express";
import Filme90Controller from './app/controllers/Filme90Controller.js';

const routes = Router();

//ROTAS
routes.get('/filmes/90', Filme90Controller.index);
routes.get('/filmes/90/:id', Filme90Controller.show);
routes.post('/filmes/90', Filme90Controller.store);
routes.put('/filmes/90/:id', Filme90Controller.update);
routes.delete('/filmes/90/:id', Filme90Controller.delete);

export default routes;