import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  interaction: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width,
    backgroundColor: 'gray',
    borderWidth: 2,
    paddingHorizontal: 30,
  },
  todosContainer: {
    flex: 4,
    width: width,
    borderWidth: 7,
    borderColor: 'yellow',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  todoRow: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-between',
    marginTop: 10,

  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  add: {
    backgroundColor: 'green',
    marginLeft: 30,
  },
  toggle: {
    backgroundColor: 'red',
    //marginRight: 30,
  },
  textInteraction: {
    fontSize: 15,
  },
  resultContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  toggleText: {
    color: 'red',
  },
  actionText: {
    color: 'blue',
  },
  newText: {
    color: 'green',
    textAlign: 'center',
  },
  test: {
    backgroundColor: 'blue',
  },
});




const {
  container,
  interaction,
  todosContainer,
  todoRow,
  toggleText,
  actionText,
  newText,
  button,
  add,
  toggle,
  textInteraction,
  resultContainer,
  test,
} = styles;


const renderTodos = (todos, onPressToggle) => {
  console.log('todos', todos)
  let numberOfTodos = 0;
  return todos.map( todo => {
    return (
      <View key={numberOfTodos++} style={todoRow}>
        <View style={[]}>
          <Text style={[textInteraction, todo.completed && toggleText ]}>{todo.text}</Text>
        </View>

        <TouchableHighlight onPress={() => onPressToggle(todo.id)}>
          <View style={[button, toggle]}>
            <Text style={textInteraction}>Toggle</Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  });
}

const TodoApp = ({
  onPressAdd,
  onPressToggle,
  onChangeText,
  textValue,
  todos,
  user
}) => {


  return(

      <View style={container}>

        <View style={interaction}>
          <TextInput
            style={[{backgroundColor: 'white', height: 60, flex: 1, alignSelf: 'center'}]}
            onChangeText={onChangeText}
            value={textValue}
          />

          <TouchableHighlight onPress={onPressAdd}>
            <View style={[button, add]}>
              <Text style={textInteraction}>Add</Text>
            </View>
          </TouchableHighlight>


        </View>
        <View style={todosContainer}>
          <Text style={{fontSize: 22}}>{`${user}'s To-dos`}</Text>

          <ScrollView>
          {renderTodos(todos, onPressToggle)}
          </ScrollView>

        </View>
      </View>


  );
};

export default TodoApp;
