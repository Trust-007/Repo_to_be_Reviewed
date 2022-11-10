const stringifier = (input) => {
  const tasks = JSON.stringify(input);
  localStorage.setItem('tasks', tasks);
};

exports.stringifier = stringifier;
