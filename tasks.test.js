/* eslint-disable */
const { Tasks, Task } = require('./src/modules/task');

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
