import conexao from '../database/conexao.js';
//Regras de negócio do banco de dados
class Filme90Repository{
    //CRUD
    //criar
    create(filme) {
        const sql = "INSERT INTO tb_filmes90 SET ?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, filme, (error, result) => {
                if(error) return reject('Não foi possível cadastrar');
                
                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }

    //listar tudo
    findAll() {
        const sql = "SELECT * FROM tb_filmes90;";
        return new Promise((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if(error) return reject('Não foi possível localizar');
                
                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }

    //listar por ID
    findById(id) {
        const sql = "SELECT * FROM tb_filmes90 WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if(error) return reject('Não foi possível localizar');
                
                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }

    //Atualizar
    update(filme90, id) {
        const sql = "UPDATE tb_filmes90 SET ? WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [filme90, id], (error, result) => {
                if(error) return reject('Não foi possível atualizar');
                
                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }

    //Excluir
    delete(id) {
        const sql = "DELETE * FROM tb_filmes90 WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if(error) return reject('Não foi possível excluir');
                
                const row = JSON.parse(JSON.stringify(result));
                return resolve(row);
            })
        })
    }
}

export default new Filme90Repository();