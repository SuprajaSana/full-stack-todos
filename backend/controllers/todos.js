const Todos = require("../models/todos");

exports.postAddTodos = async (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const status = "pending";
  await Todos.create({
    name: name,
    description: description,
    status: status,
  })
    .then((todos) => {
      res.status(200).json({ todo: todos });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getTodos = async (req, res, next) => {
  await Todos.findAll({ where: { status: "pending" } })
    .then((todos) => {
      res.status(200).json({ todo: todos });
    })
    .catch((err) => res.status(500).json({ error: err }));
};

exports.deleteTodos = async (req, res, next) => {
  const todoId = req.params.id;
  await Todos.destroy({ where: { id: todoId } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => res.status(500).json(err));
};

exports.postTodosDone = async (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const status = "done";
  await Todos.create({
    name: name,
    description: description,
    status: status,
  })
    .then((todos) => {
      res.status(200).json({ todo: todos });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.getTodosDone = async (req, res, next) => {
  await Todos.findAll({ where: { status: "done" } })
    .then((todos) => {
      res.status(200).json({ todo: todos });
    })
    .catch((err) => res.status(500).json({ error: err }));
};
