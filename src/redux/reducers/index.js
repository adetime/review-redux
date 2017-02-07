import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import LoggerReducer from './LoggerReducer';

export default combineReducers({
  value: CounterReducer,
  logs: LoggerReducer
});
