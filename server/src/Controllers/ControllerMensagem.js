const ModelMensagem = require("../Models/ModelMensagem")

class ControllerMensagens{
    async getAllMessages(req, res){
        try{
            const allMessages = await ModelMensagem.getAllMessages();
            return res.status(200).json(allMessages)
        }catch{
            return res.status(400).json({error: 'Deu erro'})
        }
        
    }   

    async postMessages(mensagem, autor, autor_id){
        try{
            const mensagenInserida =  await ModelMensagem.postMessages(mensagem, autor, autor_id);
        }catch{
            console.log('deu ruim tropa da alt f4')
        }
        
    
    }
}

module.exports = new ControllerMensagens()