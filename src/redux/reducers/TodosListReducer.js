import TodoReducer from './TodoReducer';

export default TodosListReducer = ( state = [], action ) => {

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        TodoReducer(undefined, action)
      ];

    case 'TOGGLE_TODO':
      return state.map( todo => TodoReducer(todo, action) );

    default:
      return state;

  }

}
