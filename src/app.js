import express from 'express';
import conexao from './app/database/conexao.js';
import Filme90Controller from './app/controllers/Filme90Controller.js';
const app = express();

app.use(express.json())

//ROTAS
app.get('/filmes/90', Filme90Controller.index);

app.get('/filmes/90/:id', Filme90Controller.show);

app.post('/filmes/90', Filme90Controller.store);

app.put('/filmes/90/:id', Filme90Controller.update);

app.delete('/filmes/90/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE * FROM tb_filmes90 WHERE id=?;"
    conexao.query(sql, id, (error, result) => {
        const row = result[0];
        if(error){
            res.status(404).json( {'Error': error})
        } else {
            res.status(200).json(row);
        }
    })
})

export default app;
