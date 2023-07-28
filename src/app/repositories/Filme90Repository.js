import conexao, { consulta } from '../database/conexao.js';
//Regras de negócio do banco de dados
class Filme90Repository{
    //CRUD
    //criar
    create(filme) {
        const sql = "INSERT INTO tb_filmes90 SET ?;"
        return consulta(sql, filme, "Não foi possível cadastrar!");
    }

    //listar tudo
    findAll() {
        const sql = "SELECT * FROM tb_filmes90;";
        return consulta(sql, "Não foi possível localizar!");

    }

    //listar por ID
    findById(id) {
        const sql = "SELECT * FROM tb_filmes90 WHERE id=?;"
        return consulta(sql, id, "Não foi possível localizar!");

    }

    //Atualizar
    update(filme90, id) {
        const sql = "UPDATE tb_filmes90 SET ? WHERE id=?;"
        return consulta(sql, [filme90, id], "Não foi possível atualizar!");

    }

    //Excluir
    delete(id) {
        const sql = "DELETE * FROM tb_filmes90 WHERE id=?;"
        return consulta(sql, id, "Não foi possível apagar!");
    }
}

export default new Filme90Repository();
