const check = (tasks, task, index) => {
  tasks[index].bool = !task.bool;
  return tasks;
};

const removeAllChecked = (tasks) => {
  const newTasks = tasks;
  newTasks.store = tasks.store.filter((task) => task.bool !== true);
  return newTasks.store;
};

module.exports = { check, removeAllChecked };
