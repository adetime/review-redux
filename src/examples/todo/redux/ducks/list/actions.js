import types from 'types';

export const addTodo = (text, id) => {
  type: types.ADD,
  text,
  id,

}

export const toggleTodo = (id) => {
  type: types.TOGGLE,
  id,
}


export default {
  addTodo,
  toggleTodo,
};
