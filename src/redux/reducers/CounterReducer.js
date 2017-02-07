import LoggerReducer from './LoggerReducer'

export default CounterReducer = (state = 0, action) => {

  switch (action.type) {
    case "INCREMENT":
      LoggerReducer(undefined, { type: 'INCREMENT', payload: state + 1 })
      return state + 1;
    case "DECREMENT":
      LoggerReducer(undefined, { type: 'INCREMENT', payload: state - 1 })
      return state - 1;
    default:
      return state;
  }
}
