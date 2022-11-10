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
});
