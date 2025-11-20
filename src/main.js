/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/
import { tasksForm, tasksList, toggleBtn } from "./js/refs";
import { createTask } from "./js/tasks";
import { loadLS, saveLS } from "./js/local-storage-api";
import { initRender } from "./js/render-tasks";
import { setupTheme, setTheme, getSystemTheme } from "./js/theme-switcher";
import { TASKS_LS_KEY, THEME_LS_KEY } from "./js/config";

const app = { tasks: loadLS(TASKS_LS_KEY) ?? [] };

initRender(app.tasks, tasksList);

setupTheme();

toggleBtn.addEventListener("click", (e) => {
  let theme;

  const currentTheme = loadLS(THEME_LS_KEY) ?? getSystemTheme();

  theme = currentTheme === "dark" ? "light" : "dark";

  saveLS(THEME_LS_KEY, theme);
  setTheme(theme);
});

tasksForm.addEventListener("submit", (event) => {
  createTask(event, app.tasks);
  saveLS(TASKS_LS_KEY, app.tasks);
});

function deleteListItem(e) {
  const target = e.target;

  if (target.nodeName !== "BUTTON") return;

  const taskEl = target.closest(".task-list-item");
  const { id } = taskEl.dataset;

  app.tasks = app.tasks.filter((obj) => obj.id !== id);

  saveLS(TASKS_LS_KEY, app.tasks);
  initRender(app.tasks, tasksList);
}

tasksList.addEventListener("click", deleteListItem);
