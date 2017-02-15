import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import TodoApp from './TodoApp';


class TodoContainer extends React.Component {

  state = {
    text: '',
    id: 0,
    showCompleted: true,
  };

  componentWillMount(){


  }


  onPressAdd = ( ) => {

    //store.dispatch({ type: 'ADD_TODO', text: this.state.text, id: this.state.id });

  }


  onPressToggle = (id) => {

    //store.dispatch({ type: 'TOGGLE_TODO', id: id });
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



    console.log('TodoContainer/ this.props', this.props)

    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>

        <TodoApp
          onPressAdd={this.onPressAdd}
          onPressToggle={this.onPressToggle}
          onChangeText={this.onChangeText}
          todos={this.props.todos.todos}
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

const mapStateToProps = ({todos}) => {
  console.log('view/TodoContainer.js, state by reducer todos = ', todos)
  return { todos: todos };
};

export default connect(mapStateToProps, {})(TodoContainer);
