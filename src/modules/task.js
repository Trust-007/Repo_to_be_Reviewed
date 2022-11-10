/* eslint-disable max-classes-per-file */
class Task {
  constructor(string) {
    this.string = string;
    this.bool = false;
    this.index = null;
  }
}

class Tasks {
  constructor() {
    this.store = [];
  }

  appendTask(task) {
    if (typeof task !== 'object') return 'Wrong input!';
    this.store.push(task);
    return this.store;
  }

  taskRemover(index) {
    if (typeof index !== 'number') return 'Wrong input!';
    this.store.splice(index, 1);
    return this.store;
  }

  taskEditor(input, index) {
    this.store[index].string = input.value;
    return this.store;
  }
}

module.exports = { Tasks, Task };
