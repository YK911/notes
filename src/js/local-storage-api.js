export function loadLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function saveLS(key, tasks) {
  localStorage.setItem(key, JSON.stringify(tasks));
}
