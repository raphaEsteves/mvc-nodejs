import Filme90Repository from '../repositories/Filme90Repository.js';
class Filme90Controller {

    //lista tudo
    //Precisa do async para aguardar resposta do método findAll()
    async index(req, res) {
        const row = await Filme90Repository.findAll();
        res.json(row);
    }
    
    //lista por ID
    async show(req, res) {
        const id = req.params.id;
        const row = await Filme90Repository.findById(id);
        res.json(row);
    } 

    //cria dados
    async store(req, res) {
        const filme90 = req.body;
        const row = await Filme90Repository.create(filme90);
        res.json(row);
    }

    //atualiza dados
    async update(req, res) {
        const id = req.params.id;
        const filme90 = req.body;
        const row  = await Filme90Repository.update(filme90, id);
        res.json(row);
    }
    
     //exclui dados
    async delete(req, res) {
        const id = req.params.id;
        const row = await Filme90Repository.delete(id);
        res.json(row);
    }
}

//padrão Singleton
export default new Filme90Controller();
