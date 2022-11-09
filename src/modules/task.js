/* eslint-disable max-classes-per-file */
export class Task {
  constructor(string) {
    this.string = string;
    this.bool = false;
    this.index = null;
  }
}

export class Tasks {
  constructor() {
    this.store = [];
  }
  appendTask(task) {
    this.store.push(task);
    return this.store;
  }
  taskRemover(index) {
    this.store.splice(index, 1);
    return this.store;
  }
}
