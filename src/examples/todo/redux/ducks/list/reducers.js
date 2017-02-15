import { combineReducers } from 'redux';

import types from './types';
import todo from './../';



const TodosReducer = ( state = [], action ) => {

  switch (action.type) {
    case types.ADD:
      return [
        ...state,
        todo(undefined, action)
      ];

    case types.TOGGLE:
      return state.map( todo => todo(todo, action) );

    default:
      return state;

  }
}

console.log('ducks/list/reducers.js, TodosReducer', TodosReducer(undefined, {type: 'bjdwell'}))


const reducer = combineReducers({
  todos: TodosReducer
});

console.log('ducks/list/reducers.js, reducer = combineReducers = ', reducer);
export {reducer};
