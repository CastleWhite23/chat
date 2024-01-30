
class Tabelas {
    init(connection) {
        this.connection = connection
        this.criarTabelaMensagens()

    }

    criarTabelaMensagens() {
        const sql = `
        CREATE TABLE IF NOT EXISTS mensagens (
            id_mensagem INT PRIMARY KEY AUTO_INCREMENT,
            mensagem VARCHAR(150),
            autor VARCHAR(25),
            author_socket_id VARCHAR(60)
        );
        `
        this.connection.query(sql, (error, results) => {
            if(error) {
                console.log(error)
                return 
            }

            console.log('Tabela Criada com sucesso')
        })
    }


}

module.exports = new Tabelas()