const express = require("express");

const todosController = require("../controllers/todos");

const router = express.Router();

router.post("/add/todos", todosController.postAddTodos);

router.get('/get/todos', todosController.getTodos);

router.delete("/delete/todos/:id", todosController.deleteTodos);

module.exports = router;