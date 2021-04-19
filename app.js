const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cadastro = require("./model/cadastro");
var nodemailer = require('nodemailer');
require("dotenv/config");
global.__basedir = __dirname;
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')
})

var remetente = nodemailer.createTransport({

host:"64.136.45.145",
service:'64.136.45.145',
port:'587',
secure:true,
auth:{
    user:'juam.euzin@gmail.com',
    pass:'mariaju12'
}
})

var emailASerEnviado = {
    from: req.body.email,
    to: 'juam.euzin@gmail.com',
    subject: 'Enviando Email com Node.js',
    text: 'Estou te enviando este email com node.js',
    };


app.post("/cadastros", (req, res) => {
    cadastro.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        mensagem: req.body.mensagem
    }).then(function () {
        res.sendFile(__dirname +  '/index.html' );
        
    }).catch(function (erro) {
        res.send("erro" + erro)
    })

});
    mongoose.connect(process.env.CONEXAO2, { useNewUrlParser: true }, () => console.log("Aeeee conectou"));

    app.listen(2021, function () { console.log("ativo") });