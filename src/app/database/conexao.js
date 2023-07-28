import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'db_filmes'
});

conexao.connect();

/**
 * Executa um código SQL com ou sem valoores
 * @param {string} sql instrução sql a ser executada 
 * @param {string=id | [filme90, id]} values valores a serem passados para o SQL
 * @param {string} rejectMsg mensagem a ser exibida 
 * @returns objeto da Promise
 */
export const consulta = (sql, values='', rejectMsg) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, values, (error, result) => {
            if(error) return reject(rejectMsg);
            const row = JSON.parse(JSON.stringify(result));
            return resolve(row);
        })
    })
}

export default conexao;