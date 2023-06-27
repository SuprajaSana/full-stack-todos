const Sequelize = require("sequelize");

const sequelize = require('../util/database');

const Todos = sequelize.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    status:Sequelize.STRING
})

module.exports = Todos;