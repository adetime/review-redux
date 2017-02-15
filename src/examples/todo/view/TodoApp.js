import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';



const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  addContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: width,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  textInput: {
    flex: 1,
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    fontSize: 17,
    color: 'rgba(43,45,46,1)',
  },
  todosContainer: {
    flex: 4,
    width: width,
    alignItems: 'center',
  },
  todosHeader: {
    flexDirection: 'row',
    width: width,
    backgroundColor: 'rgba(43,45,46,1)',
    padding: 30,
  },
  checklist: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#cccccc',
    marginRight: 30,
  },
  todosHeaderTitle: {
    color: '#cccccc',
    fontSize: 20,
    fontWeight: '300',
  },
  todosHeaderOption: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
  },
  todosVisibility: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: width,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  visibilityText: {
    color: 'rgba(255, 90, 95, 1)',
    fontWeight: 'bold',
  },
  todoRow: {
    flexDirection: 'row',
    width: width - 60,
    marginTop: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    marginBottom: 30,
  },
  addButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 90, 95, 1)',
    marginLeft: 30,
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  toggleButton: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#cccccc',
    marginRight: 30,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 17,
    color: 'rgba(72,72,72, 1)',
    marginBottom: 10,
  },
  completedText: {
    color: 'rgba(172,172,172, 1)',
    textDecorationLine: 'line-through',
  },
  completedButton: {
    backgroundColor: 'rgba(0,166,153, 1)',
    borderColor: 'rgba(0,166,153, 1)',
  },
  completedTextButton: {
    fontSize: 14,
    fontWeight: '300',
    fontStyle: 'italic',
    color: 'white',
  },
});

const {
  container,
  addContainer,
  textInput,
  todosContainer,
  todosHeader,
  checklist,
  todosHeaderTitle,
  todosHeaderOption,
  todosVisibility,
  visibilityText,
  todoRow,
  addButton,
  addButtonText,
  toggleButton,
  todoText,
  completedText,
  completedButton,
  completedTextButton,
} = styles;

const checklistIcon = (
  <View style={checklist}>
    <Text style={completedTextButton}>V</Text>
  </View>
);

const renderTodos = (todos, onPressToggle, showCompleted) => {
  return todos.map( todo => {

    const { text, id, completed } = todo;
    const todoTextStyle = [
      todoText,
      completed && completedText
    ];
    const toggleButtonStyle = [
      toggleButton,
      completed && completedButton
    ];

    const showTodoItem = (
      <View key={id} style={todoRow}>

        <TouchableWithoutFeedback onPress={() => onPressToggle(id)}>
          <View style={toggleButtonStyle}>
            {completed  && <Text style={completedTextButton}>V</Text>}
          </View>
        </TouchableWithoutFeedback>

        <Text style={todoTextStyle}>{text}</Text>

      </View>
    );

    return (
      !completed
      ? showTodoItem
      : showCompleted && showTodoItem
    );
  });
}

const TodoApp = ({
  onPressAdd,
  onPressToggle,
  onChangeText,
  onPressVisibility,
  showCompleted,
  value,
  todos,
  user
}) => {

  const visibilityTitle = showCompleted
    ? 'Show'
    : 'Hide';

  return(
      <View style={container}>

        <View style={addContainer}>
          <TextInput
            style={textInput}
            onChangeText={onChangeText}
            value={value}
            placeholder='Add an item ...'
            underlineColorAndroid='transparent'
            autoCapitalize='sentences'
            autoCorrect
            returnKeyType='done'
            onSubmitEditing={onPressAdd}
            autoFocus
          />

          <TouchableWithoutFeedback onPress={onPressAdd}>
            <View style={addButton}>
              <Text style={addButtonText}>Add</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View style={todosContainer}>
          <View style={todosHeader} >
            {checklistIcon}
            <Text style={todosHeaderTitle}>{`${user}'s checklist`}</Text>
          </View>

          <View style={todosVisibility} >
            <Text
              onPress={onPressVisibility}
              style={visibilityText}
            >
              {`${visibilityTitle} completed items`}
            </Text>
          </View>

          <ScrollView>
            {renderTodos(todos, onPressToggle, showCompleted)}
          </ScrollView>
        </View>

      </View>
    );
};

export default TodoApp;
