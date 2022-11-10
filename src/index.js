/* eslint-disable comma-dangle */
import './style.css';

const { TaskLoader } = require('./modules/taskLoader.js');
const { Task, Tasks } = require('./modules/task.js');
const { removeAllChecked } = require('./modules/taskMethods.js');
const { stringifier } = require('./modules/stringifier.js');
const { DateTime } = require('./modules/luxon.js');

const tasks = new Tasks();

// Update tasks array from localStorage

const localTasks = localStorage.getItem('tasks');
if (localTasks !== null) {
  tasks.store = JSON.parse(localTasks);
}

// Add new tasks

const input = document.querySelector('#input');
const form = document.querySelector('#input-form');
const lists = document.querySelector('.list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const task = new Task(input.value);
  tasks.appendTask(task);
  stringifier(tasks.store);
  TaskLoader(lists, tasks);
  input.value = '';
});

TaskLoader(lists, tasks);

// Remove completed tasks

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
  removeAllChecked(tasks);
  stringifier(tasks.store);
  TaskLoader(lists, tasks);
});

// Display time & date using luxon

const time = document.querySelector('#time');
time.innerText = DateTime.now('2022-10-31T16:23:12').toLocaleString(
  DateTime.DATETIME_MED
);
