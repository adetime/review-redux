import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './../redux/store';

import TodoContainer from './TodoContainer';


const reduxStore = configureStore();

export default HomeScreen = () => (
  <Provider store={reduxStore}>
    <TodoContainer />
  </Provider>
);
