import { v4 as uuidv4 } from "uuid";
import { renderTask } from "./render-tasks";
import { tasksList } from "./refs";

export function createTask(event, tasks) {
  event.preventDefault();

  const form = event.target;
  const formData = Object.fromEntries(new FormData(form));
  const hasMissingInput = Object.values(formData).some((el) => el.length === 0);

  if (hasMissingInput) return alert("Some input are missing");

  const task = { id: uuidv4(), ...formData };

  tasks.push(task);
  tasksList.insertAdjacentHTML("beforeend", renderTask(task));
  form.reset();
}
