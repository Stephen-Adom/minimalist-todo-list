import './styles.css';

import { TodoList } from './modules/index.js';

const todoListContainer = document.querySelector('.list-group');

// display all todoList
const renderTodoList = () => {
  if (TodoList.length) {
    let todoHtml = '';

    TodoList.forEach((todo) => {
      todoHtml += `
            <li class="list-group-item">
            <section
              class="todo-item d-flex align-items-center justify-content-between"
            >
              <div class="d-flex align-items-center gap-3">
                <input
                  aria-label="make-bed"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <p class="mb-0">${todo.description}</p>
              </div>

              <div class="todo-action">
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </a>
              </div>
            </section>
          </li>
            `;
    });

    todoListContainer.innerHTML = todoHtml;
  }
};

window.addEventListener('DOMContentLoaded', () => {
  renderTodoList();
});
