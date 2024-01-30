const connection = require('../config/connection')
class ModelMensagens{
    executarQuery(sql, params=""){
        return new Promise((resolve, rejects)=>{
            connection.query(sql, params, (error, resposta)=>{
                if(error){
                    rejects(error)
                    return;
                }
   
                resolve(resposta)
            })
       })
    }

    getAllMessages(){
        const sql = `SELECT * FROM mensagens`
        return this.executarQuery(sql)
    }

    postMessages(mensagem, autor){
        const sql = `INSERT INTO mensagens SET ?`
        this.executarQuery(sql, {mensagem, autor})
    }
}

module.exports = new ModelMensagens()