import deepFreeze from 'deep-freeze';
import TodosListReducer from './TodosListReducer'

describe('Todos List Reducer', () => {

  it('Adds first todo', () => {
    const stateBefore = [];

    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux From Beginer to Advancers',
    };

    const stateAfter = [{
      id: 0,
      text: 'Learn Redux From Beginer to Advancers',
      completed: false
    }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      TodosListReducer(stateBefore, action)
    ).toEqual(stateAfter)

  });


  it('Toggles a todo', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Learn Redux From Beginer to Advancers',
        completed: false
      },
      {
        id: 1,
        text: 'Master GraphQL',
        completed: false
      },
    ];

    const action = {
      type: 'TOGGLE_TODO',
      id: 0,
    };

    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux From Beginer to Advancers',
        completed: true
      },
      {
        id: 1,
        text: 'Master GraphQL',
        completed: false
      },
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      TodosListReducer(stateBefore, action)
    ).toEqual(stateAfter)

  });



});
