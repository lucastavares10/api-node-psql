const express = require('express');
const yup = require('yup');
const Perfil = require('../model/Perfil');
const sequelize = require('../database/db');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const schema = yup.object().shape({
    tipo: yup.string().required()
});

router.post('/cadastrar', asyncHandler(async(req, res) => {
        schema.isValid(req.body)
        .then(function (valid) {
            if(valid){
                (async () => {
                    await Perfil.sync({ force: false });

                    const usuario = Perfil.create(req.body);
                    res.send();  
                })();
            } else {
                res.status(400).send('Dados incorretos!');
            }   
        });
}));

router.get('/listar', asyncHandler(async(req, res) => {
        await sequelize.authenticate();
        const perfis = await Perfil.findAll({order: ['tipo']});
        console.log(perfis);
        res.send(perfis);
}));

router.get('/deletar/:id', asyncHandler(async(req, res) => {
    var id = parseInt(req.params.id);

    (async () => {
            await sequelize.authenticate();

            const perfil = await Perfil.destroy({ where: { id: req.params.id } });
            
            res.send();
      })();
    
}));

module.exports = app => app.use('/perfil', router)