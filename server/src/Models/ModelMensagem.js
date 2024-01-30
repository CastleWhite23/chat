const connection = require('../config/connection')
class ModelMensagens{
    executarQuery(sql, params=""){
            connection.query(sql, params, (error, result)=>{
                return new Promise((resolve, reject)=>{
                    if(error){
                        reject(error)
                        return
                    }

                    resolve(result)
                })
            })
    }

    getAllMessages(){
        const sql = `SELECT * FROM mensagens`
        this.executarQuery(sql)
    }

    postMessages(mensagem, autor){
        const sql = `INSERT INTO mensagens SET ?`
        this.executarQuery(sql, {mensagem, autor})
    }
}

module.exports = new ModelMensagens()