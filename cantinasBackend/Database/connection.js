const Sequelize = require('sequelize');

const connection = new Sequelize('db_cantina', 'root', '1w3r5y7i9p', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;