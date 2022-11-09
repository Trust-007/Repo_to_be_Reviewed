/* eslint-disable */
const { Tasks } = require('./src/modules/task');

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
    newTasks.appendTask({ first: 1 });
    newTasks.appendTask({ second: 2 });
    newTasks.appendTask({ third: 3 });
    newTasks.appendTask({ fourth: 4 });
    const test1 = 1;
    const test2 = 'hello';
    expect(JSON.stringify(newTasks.taskRemover(test1))).toBe(
      '[{"first":1},{"third":3},{"fourth":4}]'
    );
    expect(newTasks.taskRemover(test2)).toBe('Wrong input!');
  });
});
