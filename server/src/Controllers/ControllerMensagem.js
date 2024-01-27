const ModelMensagem = require("../Models/ModelMensagem")

class ControllerMensagens{
    getAllMessages(){

    }

    async postMessages(mensagem, autor){
        try{
            const mensagenInserida =  await ModelMensagem.postMessages(mensagem, autor);
        }catch{
            console.log('deu ruim tropa da alt f4')
        }
        
    
    }
}

module.exports = new ControllerMensagens()