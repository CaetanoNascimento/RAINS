const express = require("express");

const router = express.Router();
const Post = require("../model/cadastro");

router.post('/', (req, res) => {
    const Cad = new Post({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefon,
        mensagem: req.body.mensagem
    })
    Cad.save()
      
        .catch(err => {
            res.json({ message: err })
        })
        console.log(Cad)
})