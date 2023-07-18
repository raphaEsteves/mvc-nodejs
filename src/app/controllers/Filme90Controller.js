class Filme90Controller {

    //lista tudo
    index(req, res) {
        const sql = "SELECT * FROM tb_filmes90;"
        conexao.query(sql, (error, result) => {
            if(error){
                res.status(404).json( {'Error': error})
            } else {
                res.status(200).json(result);
            }
        })
    }
    
    //lista por ID
    show(req, res) {
        const id = req.params.id;
        const sql = "SELECT * FROM tb_filmes90 WHERE id=?;"
        conexao.query(sql, id, (error, result) => {
            const row = result[0];
            if(error){
                res.status(404).json( {'Error': error})
            } else {
                res.status(200).json(row);
            }
        })
    } 

    //cria dados
    store(req, res) {
        const filme90 = req.body;
        const sql = "INSERT INTO tb_filmes90 SET ?;"
        conexao.query(sql, filme90, (error, result) => {
            if(error){
                res.status(404).json( {'Error': error})
            } else {
                res.status(201).json(result);
            }
        })
    }

    //atualiza dados
    update(req, res) {
        const id = req.params.id;
        const filme90 = req.body;
        const sql = "UPDATE tb_filmes90 SET ? WHERE id=?;"
        conexao.query(sql, [filme90, id], (error, result) => {
            if(error){
                res.status(404).json( {'Error': error})
            } else {
                res.status(200).json(result);
            }
        })
    }
    
     //exclui dados
    delete(req, res) {
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
    }

}

//padrão Singleton
export default new Filme90Controller();