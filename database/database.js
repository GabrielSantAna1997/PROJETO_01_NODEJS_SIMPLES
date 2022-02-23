const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','05129807a',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;