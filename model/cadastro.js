const mogoose = require("mongoose");


const CadSchema = mogoose.Schema({

    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    }
    ,
    mensagem:{
        type: String,
        required: false
    }



});



module.exports = mogoose.model('Cadastro', CadSchema);