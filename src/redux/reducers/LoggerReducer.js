export default LoggerReducer = (state = [], action) => {
  
  switch (action.type) {
    case "INCREMENT":
      return [...state, { type: action.type, payload: action.payload }];
    case "DECREMENT":
      return [...state, { type: action.type, payload: action.payload }];
    default:
      return state;
  }
}
