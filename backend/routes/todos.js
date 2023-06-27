const express = require("express");

const todosController = require("../controllers/todos");

const router = express.Router();

router.post("/add/todos", todosController.postAddTodos);

router.get('/get/todos', todosController.getTodos);

router.post("/add/todosdone", todosController.postTodosDone);

router.get("/get/todosdone", todosController.getTodosDone);

router.delete("/delete/todos/:id", todosController.deleteTodos);

module.exports = router;