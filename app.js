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



app.post("/cadastros", (req, res) => {
    cadastro.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        mensagem: req.body.mensagem
    }).then(function () {
        res.sendFile(__dirname + '/index.html');

    }).catch(function (erro) {
        res.send("erro" + erro)
    })


    var remetente = nodemailer.createTransport({

        host: "smtp.gmail.com",
        service: 'smtp.gmail.com',
        port: '465',
        secure: true,
        auth: {
            user: 'juam.euzin@gmail.com',
            pass: 'mariaju.12'
        }
    })

    var emailASerEnviado = {
        from: req.body.email,
        to: 'juam.euzin@gmail.com',
        subject: 'Enviando Email com Node.js',
        text: 'Estou te enviando este email com node.js\n' + req.body.nome + "\n" +
            req.body.email + " \n " +
            req.body.telefone + "\n" +
            req.body.mensagem
    };

    remetente.sendMail(emailASerEnviado, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado com sucesso.');
        }
    });
});
mongoose.connect(process.env.CONEXAO2, { useNewUrlParser: true }, () => console.log("Aeeee conectou"));

app.listen(2021, function () { console.log("ativo") });