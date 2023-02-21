/* eslint-disable import/prefer-default-export */
import TodoList from './todoList.js';
import Todo from './todo.model.js';

const addTask = (description) => {
  const newTodo = new Todo(TodoList.length + 1, description);
  TodoList.push(newTodo);
};

export { addTask };
