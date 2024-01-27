
class Tabelas {
    init(connection) {
        this.connection = connection
        this.criarTabelaMensagens()

    }

    criarTabelaMensagens() {
        const sql = `
            CREATE TABLE IF NOT EXISTS mensagens(
                id_mensagem INT PRIMARY KEY AUTOINCREMENT,
                mensagem VARCHAR(150),
                autor VARCHAR(25)
            );
        `
        this.connection.query(sql, (error, results) => {
            if(error) console.log(error) 

            console.log('Tabela Criada com sucesso')
        })
    }


}

module.exports = new Tabelas()