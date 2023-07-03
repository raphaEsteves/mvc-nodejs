import express from 'express';
import conexao from '../infra/conexao.js';

const app = express();

app.use(express.json())

function buscarFilmesId(id) {
    return filmes90.filter(item => item.id == id);
}

function buscaIndexFilme(id) {
    return filmes90.findIndex(item => item.id == id);
}

//Lê os objetos do array
app.get('/filmes/90', (req, res) => {
    const sql = "SELECT * FROM tb_filmes90;"
    conexao.query(sql, (error, result) => {
        if(error){
            console.log(error);
            res.status(404).json( {'Error': error})
        } else {
            res.status(200).json(result);
        }
    })
})

//Lê objeto no array pelo seu ID
app.get('/filmes/90/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM tb_filmes90 WHERE id=?;"
    conexao.query(sql, id, (error, result) => {
        const row = result[0];
        if(error){
            console.log(error);
            res.status(404).json( {'Error': error})
        } else {
            res.status(200).json(row);
        }
    })
})

//Cria um objeto no array
app.post('/filmes/90', (req, res) => {
    const filme90 = req.body;
    const sql = "INSERT INTO tb_filmes90 SET ?;"
    conexao.query(sql, filme90, (error, result) => {
        if(error){
            console.log(error);
            res.status(400).json( {'Error': error})
        } else {
            res.status(201).json(result);
        }
    })
})

//Exclui objeto do array pelo ID informado
app.delete('/filmes/90/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE * FROM tb_filmes90 WHERE id=?;"
    conexao.query(sql, id, (error, result) => {
        const row = result[0];
        if(error){
            console.log(error);
            res.status(404).json( {'Error': error})
        } else {
            res.status(200).json(row);
        }
    })
})

//Atualiza objeto no array pelo seu ID
app.put('/filmes/90/:id', (req, res) => {
    const id = req.params.id;
    const filme90 = req.body;
    const sql = "UPDATE tb_filmes90 SET ? WHERE id=?;"
    conexao.query(sql, [filme90, id], (error, result) => {
        if(error){
            console.log(error);
            res.status(400).json( {'Error': error})
        } else {
            res.status(200).json(result);
        }
    })
})

export default app;
