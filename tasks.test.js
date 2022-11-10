/* eslint-disable */
const { Tasks, Task } = require('./src/modules/task');
const { check, removeAllChecked } = require('./src/modules/taskMethods');

describe('add & remove', function () {
  it('add task', function () {
    const newTasks = new Tasks();
    const test1 = '1';
    const test2 = { title: 'One', checked: false };
    const test3 = { title: 'Two', checked: true };
    expect(newTasks.appendTask(test1)).toBe('Wrong input!');
    expect(newTasks.appendTask(test2).length).toBe(1);
    expect(newTasks.appendTask(test3).length).toBe(2);
  });
  it('remove task', function () {
    const newTasks = new Tasks();
    newTasks.appendTask(new Task('first'));
    newTasks.appendTask(new Task('second'));
    newTasks.appendTask(new Task('third'));
    newTasks.appendTask(new Task('fourth'));
    const test1 = 1;
    const test2 = 'hello';
    expect(JSON.stringify(newTasks.taskRemover(test1))).toBe(
      '[{"string":"first","bool":false,"index":null},{"string":"third","bool":false,"index":null},{"string":"fourth","bool":false,"index":null}]'
    );
    expect(newTasks.taskRemover(test2)).toBe('Wrong input!');
  });
});

describe('edit, checked & clear', function () {
  it('edit task', function () {
    const newTasks = new Tasks();
    newTasks.appendTask(new Task('first'));
    const input = { value: 'first task' };
    expect(JSON.stringify(newTasks.taskEditor(input, 0))).toBe(
      '[{"string":"first task","bool":false,"index":null}]'
    );
  });

  it('checked', function () {
    const newTasks = new Tasks();
    const task = new Task('first');
    const task2 = new Task('second');
    newTasks.appendTask(task);
    const index = 0;
    const index2 = 1;
    expect(JSON.stringify(check(newTasks.store, task, index))).toBe(
      '[{"string":"first","bool":true,"index":null}]'
    );
    newTasks.appendTask(task2);
    expect(JSON.stringify(check(newTasks.store, task2, index2))).toBe(
      '[{"string":"first","bool":true,"index":null},{"string":"second","bool":true,"index":null}]'
    );
  });

  it('All checked removed', function () {
    const newTasks = new Tasks();
    const task = new Task('first');
    const task2 = new Task('second');
    newTasks.appendTask(task);
    newTasks.appendTask(task2);
    const index = 0;
    check(newTasks.store, task, index);
    expect(JSON.stringify(removeAllChecked(newTasks))).toBe(
      '[{"string":"second","bool":false,"index":null}]'
    );
  });
});
