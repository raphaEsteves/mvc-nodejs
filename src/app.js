import express from 'express';
import Filme90Controller from './app/controllers/Filme90Controller.js';
const app = express();

app.use(express.json())

//ROTAS
app.get('/filmes/90', Filme90Controller.index);

app.get('/filmes/90/:id', Filme90Controller.show);

app.post('/filmes/90', Filme90Controller.store);

app.put('/filmes/90/:id', Filme90Controller.update);

app.delete('/filmes/90/:id', Filme90Controller.delete);

export default app;
