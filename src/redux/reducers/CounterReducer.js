import LoggerReducer from './LoggerReducer'


const INITIAL_STATE = {
  current: 0,
  logs: [
    LoggerReducer(
      undefined,
      {
        type: undefined,
        payload: 0,
      }
    )
  ],
};

export default CounterReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        current: state.current + 1,
        logs: [
          ...state.logs,
          LoggerReducer(
            undefined,
            {
              type: action.type,
              payload: state.current,
            }
          )
        ]
      };
      case "DECREMENT":
        return {
          ...state,
          current: state.current - 1,
          logs: [
            ...state.logs,
            LoggerReducer(
              undefined,
              {
                type: action.type,
                payload: state.current,
              }
            )
          ]
        };
    default:
      return state;
  }
}
