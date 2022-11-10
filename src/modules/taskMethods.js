export const stringifier = (input) => {
  const tasks = JSON.stringify(input);
  localStorage.setItem('tasks', tasks);
};
