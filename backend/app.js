const express = require("express");

const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const todosRouter=require("./routes/todos")

var cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json({ encoded: false }));

app.use(todosRouter);

sequelize.sync().then(() => {
    app.listen(8000)
})
.catch(err=>console.log(err))