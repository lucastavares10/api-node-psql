const express = require('express');
const yup = require('yup');
const Usuario = require('../model/Usuario');
const Perfil = require('../model/Perfil');
const sequelize = require('../database/db');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const schema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required().email(),
    senha: yup.string().required().min(6).max(32),
});

router.post('/cadastrar', asyncHandler(async(req, res) => {

        schema.isValid(req.body)
        .then(function (valid) {
            if(valid){
                (async () => {
                    await Usuario.sync({ force: false });
                    const usuario = Usuario.create({
                        nome: req.body.nome,
                        email: req.body.email,
                        senha: req.body.senha,
                        perfilId: req.body.perfilId
                      });
                    res.status(200).send();  
                })();
            } else {
                res.status(400).send('Dados incorretos!');
            }   
        });
}));

router.get('/listar', asyncHandler(async(req, res) => {
        await sequelize.authenticate();
        const usuarios = await Usuario.findAll({order: ['nome'], include: 'perfil'});
        console.log(usuarios)
        res.status(200).send(usuarios);
}));

router.get('/deletar/:id', asyncHandler(async(req, res) => {
    var id = parseInt(req.params.id);

    (async () => {
            await sequelize.authenticate();

            const usuario = await Usuario.destroy({ where: { id: req.params.id } });
            
            res.status(200).send();
      })();
    
}));

router.post('/editar', asyncHandler(async(req, res) => {

    schema.isValid(req.body).then(function (valid) {
        if(valid){
            (async () => {
                await sequelize.authenticate();
                const usuario = await Usuario.findOne({ where: { id: req.body.id } });

                usuario.update({ nome: req.body.nome, 
                    email: req.body.email, 
                    senha: req.body.senha});
        
                res.status(200)
              })();
        } else {
            res.status(400).send('Dados incorretos!');
        }
    });      

}));

module.exports = app => app.use('/usuario', router)