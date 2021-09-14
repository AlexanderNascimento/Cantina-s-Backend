const Sequelize = require('sequelize');
const connection = require('./connection.js');

const TB02_PEDIDOS = connection.define('TB02_PEDIDOS', {
    tb02_Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tb02_user: {
        type: Sequelize.INTEGER,
    },
    tb02_iten:{
        type: Sequelize.STRING,
    },
    tb02_price:{ 
        type: Sequelize.INTEGER,
    },
    tb02_numberofItem: {
        type: Sequelize.INTEGER,
    },
    tb02_state:{
        type: Sequelize.INTEGER,
        defaultValue: 0,
        /*
        0-enviado 
        1-confirmado em preparo
        2-preparado esperando retiro
        3-retirado
        */
    }
});

connection.sync();
module.exports =TB02_PEDIDOS;