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

export {
  addTask, removeTask, TodoList, toggleTaskCompleted,
};
