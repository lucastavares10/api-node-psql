const express = require('express');
const yup = require('yup');
const Usuario = require('../model/Usuario');
const sequelize = require('../database/db');

const router = express.Router();

const schema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required().email(),
    senha: yup.string().required().min(6).max(32),
});

router.post('/cadastrar', async (req, res) => {
    schema.isValid(req.body)
    .then(function (valid) {
        if(valid){
            try {
                const usuario = Usuario.create(req.body);

                res.status(200).send();
                            
            } catch (error) {
                res.status(500).send('Algum erro interno!');
            }            
        } else {
            res.send(res.status(400).send('Dados incorretos!'));
        }

    });

});

router.get('/', function (req, res, next) {
    return res.json('all users sent');
});

router.get('/listar', async (req, res) => {

        try {
            await sequelize.authenticate();

            const usuarios = await Usuario.findAll({order: ['nome']});

            res.send(usuarios);
        } catch (error) {
            res.status(500).send('Algum erro interno!');
        }

});

router.get('/deletar/:id', (req, res) => {
    var id = parseInt(req.params.id);

    (async () => {
        try {
            await sequelize.authenticate();

            const usuario = await Usuario.destroy({ where: { id: req.params.id } });
            
            res.status(200).send();

          } catch (error) {
            res.status(500).send('Algum erro interno!');
          }
      })();
    
});

router.post('/editar', async (req, res) => {

    schema.isValid(req.body).then(function (valid) {
        if(valid){
            (async () => {
                try {
                    await sequelize.authenticate();
                    const usuario = await Usuario.findOne({ where: { id: req.body.id } });

                    usuario.update({ nome: req.body.nome, 
                        email: req.body.email, 
                        senha: req.body.senha});
        
                    res.status(200)
        
                  } catch (error) {
                    console.error('Deu erro:', error);
                  }
              })();

        } else {
            res.send(res.status(400).send('Dados incorretos!'));
        }
    });      

});

module.exports = app => app.use('/auth', router)