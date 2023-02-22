// eslint-disable-next-line import/no-extraneous-dependencies
import { fromEvent } from 'rxjs';
import Todo from './todo.model.js';

// eslint-disable-next-line import/no-mutable-exports
let TodoList = [];

const saveToStorage = () => {
  localStorage.setItem('myTasks', JSON.stringify(TodoList));
};

const resetTaskIndexes = () => {
  TodoList = TodoList.map((todo, index) => ({
    ...todo,
    index: index + 1,
  }));
};

const addTask = (description) => {
  const newTodo = new Todo(TodoList.length + 1, description);
  TodoList.push(newTodo);
  saveToStorage();
};

const removeTask = (id) => {
  TodoList = TodoList.filter((todo) => todo.index !== id);
  resetTaskIndexes();
  saveToStorage();
};

const toggleTaskCompleted = (index) => {
  const selectedTodo = TodoList.find((todo) => todo.index === index);
  selectedTodo.completed = !selectedTodo.completed;
  saveToStorage();
};

const editTaskDescription = (description, index) => {
  const selectedTodo = TodoList.find((todo) => todo.index === index);
  selectedTodo.description = description;
  saveToStorage();
};

export {
  addTask, removeTask, TodoList, toggleTaskCompleted, editTaskDescription,
};

fromEvent(window, 'DOMContentLoaded').subscribe(() => {
  if (localStorage.getItem('myTasks')) {
    TodoList = JSON.parse(localStorage.getItem('myTasks'));
  }
});