import { createStore, combineReducers } from 'redux';

import * as reducers from './ducks'



console.log('/redux/store.js, reducers = ', reducers)
const rootReducer = combineReducers({
  todos: reducers.todos
});

console.log('/redux/store.js, rootReducer = ', rootReducer)

export default function configureStore() {



  return createStore(rootReducer);

}

console.log('/redux/store.js, createStore = ', configureStore())
