import express from 'express';

const app = express();

app.use(express.json())

//mock
let filmes90 = [
    { id: 1, titulo: "A Lista de Schindler", duracao: "3h 15min", minutos: 195 },
    { id: 2, titulo: "Um Sonho de Liberdade", duracao: "2h 22min", minutos: 142 },
    { id: 3, titulo: "O Rei Leão (animação da Disney)", duracao: "1h 27min", minutos: 87 },
    { id: 4, titulo: "Forrest Gump, O Contador de Histórias", duracao: "2h 22min", minutos: 142 },
    { id: 5, titulo: "A Vida é Bela", duracao: "1h 56min", minutos: 116 },
    { id: 6, titulo: "O Resgate do Soldado Ryan", duracao: "2h 50min", minutos: 170 },
    { id: 7, titulo: "10 Coisas Que Odeio em Você", duracao: "1h 37min", minutos: 97 },
    { id: 8, titulo: "Jurassic Park", duracao: "2h 7min", minutos: 127 },
    { id: 9, titulo: "O Silêncio dos Inocentes", duracao: "1h 58min", minutos: 118 },
    { id: 10, titulo: "À Espera de um Milagre", duracao: "3h 9min", minutos: 189 }
]

function buscarFilmesId(id) {
    return filmes90.filter(item => item.id == id);
}

function buscaIndexFilme(id) {
    return filmes90.findIndex(item => item.id == id);
}

app.get('/', (req, res) => {
    res.send("<a href='/filmes/90'>Filmes do ano 90 </a>");
})

//Lê os objetos do array
app.get('/filmes/90', (req, res) => {
    res.status(200).send(filmes90);
})

//Lê objeto no array pelo seu ID
app.get('/filmes/90/:id', (req, res) => {
    res.status(200).json(buscarFilmesId(req.params.id));
})

//Cria um objeto no array
app.post('/filmes/90', (req, res) => {
    filmes90.push(req.body);
    res.status(200).send('Filme adicionado com sucesso!');
})

//Exclui objeto do array pelo ID informado
app.delete('/filmes/90/:id', (req, res) => {
    let index = buscaIndexFilme(req.params.id);
    filmes90.splice(index, 1);
    res.send(`Filme com índice ${req.params.id} excluído com sucesso`);
})

//Atualiza objeto no array pelo seu ID
app.put('/filmes/90/:id', (req, res) => {
    let index = buscaIndexFilme(req.params.id);
    filmes90[index].titulo = req.body.titulo;
    filmes90[index].duracao = req.body.duracao;
    filmes90[index].minutos = req.body.minutos;
    res.json(filmes90);
})

export default app;
