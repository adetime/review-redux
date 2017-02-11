import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import TodosListReducer from './TodosListReducer'


export default combineReducers({
  value: CounterReducer,
  todos: TodosListReducer,
});
