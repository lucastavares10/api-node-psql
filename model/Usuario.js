const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Perfil = require('./Perfil');

const Usuario = sequelize.define('usuario', {
    nome: {
      type: DataTypes.STRING,
      required:true,
    },
    email: {
      type: DataTypes.STRING,
      required:true,
      lowercase: true,
    },
    senha: {
        type: DataTypes.STRING,
        required:true,
        select: false,
    },
}, {
    timestamps: false
});

Perfil.hasOne(Usuario, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Usuario.belongsTo(Perfil);

module.exports = Usuario;
