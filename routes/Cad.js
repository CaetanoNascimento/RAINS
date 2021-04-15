const express = require("express");

const router = express.Router();
const Post = require("../model/cadastro");

router.post('/', async (req, res) => {
    console.log(req.body.nome)
    console.log(req.body.email)
    console.log(req.body.telefone)
    console.log(req.body.mensagem)
    
    const Cad = new Post({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
        mensagem: req.body.mensagem
    });
    try{
        const savedPost = await Cad.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err})
    }
})