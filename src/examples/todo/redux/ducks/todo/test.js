import deepFreeze from 'deep-freeze';

import reducer from './reducers';

const toggleTodo = (todo) => {
  return {...todo, completed: !todo.completed}
}

describe('Avoid Toggle Mutation', () => {

  it('Toggles a todo', () => {
    const todoBefore = {
      id: 0,
      text: 'Learn Redux From Beginer to Advancers',
      completed: false
    };

    const todoAfter = {
      id: 0,
      text: 'Learn Redux From Beginer to Advancers',
      completed: true
    };

    deepFreeze(todoBefore);

    expect(
      toggleTodo(todoBefore)
    ).toEqual(todoAfter)

  });





});
