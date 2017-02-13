import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { createStore } from 'redux';

import TodoApp from './TodoApp';
import reducers from './../redux/reducers';


// Create a store for counter reducer example
const store = createStore(reducers);


class TodoScreen extends React.Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.user}, test this todo`,
  };

  state = {
    text: '',
    id: 0,
    showCompleted: true,
  };

  componentWillMount(){
    store.subscribe(this.update)
  }

  update = () => {
    this.forceUpdate();
  }

  onPressAdd = ( ) => {

    store.dispatch({ type: 'ADD_TODO', text: this.state.text, id: this.state.id });
    this.setState({id: ++this.state.id, text: ''});
  }


  onPressToggle = (id) => {

    store.dispatch({ type: 'TOGGLE_TODO', id: id });
  }

  onPressVisibility = () => {
    this.setState({
      showCompleted: !this.state.showCompleted
    });
  }

  onChangeText = (text) => {

    this.setState({ text: text });
  }


  render() {

    const { todos } = store.getState();

    //console.log('value', value)

    const { params } = this.props.navigation.state;

    console.log('params', params)

    return (
      <View style={styles.container}>

        <TodoApp
          onPressAdd={this.onPressAdd}
          onPressToggle={this.onPressToggle}
          onChangeText={this.onChangeText}
          todos={todos}
          user={params.user}
          value={this.state.text}
          onPressVisibility={this.onPressVisibility}
          showCompleted={this.state.showCompleted}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});

export default TodoScreen;
