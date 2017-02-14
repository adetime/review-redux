import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import TodoApp from './TodoApp';


class TodoContainer extends React.Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.user}, test this todo`,
  };

  state = {
    text: '',
    id: 0,
    showCompleted: true,
  };

  componentWillMount(){
  //  store.subscribe(this.update)
  }


  onPressAdd = ( ) => {

    //store.dispatch({ type: 'ADD_TODO', text: this.state.text, id: this.state.id });
    //this.setState({id: ++this.state.id, text: ''});
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

    //const { todos } = store.getState();

    //console.log('value', value)

    //const { params } = this.props.navigation.state;

    //console.log('params', params)

    return (
      <View style={styles.container}>

        <TodoApp
          onPressAdd={this.onPressAdd}
          onPressToggle={this.onPressToggle}
          onChangeText={this.onChangeText}
          todos={this.props.todos}
        //  user={params.user}
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

const mapStateToProps = ({reducer}) => {
  console.log('state = ', reducer)
  return { todos: reducer };
};

export default connect(mapStateToProps, {})(TodoContainer);
