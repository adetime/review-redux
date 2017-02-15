import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './../redux/store';
import TodoContainer from './TodoContainer';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.user}, test this todo list`,
  };

  render() {

    const reduxStore = configureStore();

    return (
      <Provider store={reduxStore}>
        <TodoContainer {...this.props}/>
      </Provider>
    );
  }
}
