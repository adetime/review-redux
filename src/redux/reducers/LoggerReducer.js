

export default LoggerReducer = (state, action) => {

  switch (action.type) {
    case "INCREMENT":
      return { actionDispatched: action.type, previous: action.payload, new: action.payload + 1};
    case "DECREMENT":
      return { actionDispatched: action.type, previous: action.payload, new: action.payload - 1 };
    default:
      return { actionDispatched: 'INITIAL_STATE', previous: 0, new: 0 };
  }
}
