import { createStore } from 'redux';
import deepFreeze from 'deep-freeze';
import reducer from './';

const store = createStore( reducer );


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
      reducer(stateBefore, action)
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
      reducer(stateBefore, action)
    ).toEqual(stateAfter)

  });

  // Check logs with store
  console.log(
    "Initial State:",
    store.getState(),
    "\n-----------------"
  )

  console.log(
    "Dispatching ADD_TODO:",
    "\n-----------------"
  )
  store.dispatch(
    {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux From Beginer to Advancers',
    }
  );

  console.log(
    "Current State:",
    store.getState(),
    "\n-----------------"
  )

  console.log(
    "Dispatching ADD_TODO:",
    "\n-----------------"
  )
  store.dispatch(
    {
      type: 'ADD_TODO',
      id: 1,
      text: 'Buy a book',
    }
  );

  console.log(
    "Current State:",
    store.getState(),
    "\n-----------------"
  )

  console.log(
    "Dispatching TOGGLE_TODO:",
    "\n-----------------"
  )
  store.dispatch(
    {
      type: 'TOGGLE_TODO',
      id: 0,
    }
  );

  console.log(
    "Current State:",
    store.getState(),
    "\n-----------------"
  )





});
