export function renderTask({ taskName, taskDescription, id }) {
  return `<li class="task-list-item" data-id="${id}">
      <button class="task-list-item-btn">Delete</button>
      <h3>${taskName}</h3>
      <p>${taskDescription}</p>
  </li>`;
}

export function initRender(tasks, container) {
  const markup = tasks.map(renderTask).join("");
  container.innerHTML = markup;
}
