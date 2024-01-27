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

    }

    postMessages(mensagem, autor){
        const sql = `INSERT INTO mensagens SET ?`
        this.executarQuery(sql, {mensagem, autor})
    }
}

module.exports = new ModelMensagens()