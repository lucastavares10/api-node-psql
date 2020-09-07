const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Usuario = require('./Usuario');

const Perfil = sequelize.define('perfil', {
    tipo: {
      type: DataTypes.STRING,
      required:true,
    }
}, {
    timestamps: false
});

module.exports = Perfil;