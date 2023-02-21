import Todo from './todo.model.js';

// eslint-disable-next-line import/no-mutable-exports
let TodoList = [
  {
    index: 1,
    description: 'wash the dishes',
    completed: false,
  },
  {
    index: 2,
    description: 'complete To Do list project',
    completed: false,
  },
];

const addTask = (description) => {
  const newTodo = new Todo(TodoList.length + 1, description);
  TodoList.push(newTodo);
};

const removeTask = (id) => {
  TodoList = TodoList.filter((todo) => todo.index !== id);
};

export { addTask, removeTask, TodoList };
