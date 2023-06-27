const Todos = require("../models/todos");

exports.postAddTodos = async (req, res, next) => {
    const name = req.body.name;
    const description = req.body.description;
   await Todos.create({
        name: name,
       description: description,
        status:"pending"
    }).then((todos) => {
        res.status(200).json({ todo: todos });
    }).catch(err => {
        res.status(500).json({ error: err })
    })
}

exports.getTodos = async (req, res, next) => {
    await Todos.findAll()
      .then((todos) => {
        res.status(200).json({ todo: todos });
      })
      .catch((err) => res.status(500).json({ error: err }));
}

exports.deleteTodos = async (req, res, next) => {
    const todoId = req.params.id;
    await Todos.destroy({ where: { id: todoId } })
        .then(() => {
            res.sendStatus(200)
    }).catch(err=>res.status(500).json(err))
}
