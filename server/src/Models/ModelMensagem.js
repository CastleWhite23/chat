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

    postMessages(message, author){
        const sql = `INSERT INTO mensagens SET ?`
        this.executarQuery(sql, [message, author])
    }
}

module.exports = new ModelMensagens()