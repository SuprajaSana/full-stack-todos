const Sequelize = require("sequelize");

const sequelize = new Sequelize("full_stack_todos", "root", "Saana@123", {
    dialect: "mysql",
    host:"localhost"
})

module.exports=sequelize