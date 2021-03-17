const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
global.__basedir = __dirname;
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));


app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')
})









mongoose.connect(process.env.CONEXAO2, { useNewUrlParser: true }, () => console.log("Aeeee conectou"));

app.listen(2021, function () { console.log("ativo") });