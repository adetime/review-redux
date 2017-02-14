import { createStore } from 'redux';

import { combineReducers } from 'redux';

//import reducer from './ducks'

import reducer from './ducks/list'


console.log('reducers on store = ', reducer)

export default function configureStore() {
  const rootReducer = combineReducers({
    reducer,
  });

  return createStore(rootReducer);

}
