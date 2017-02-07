import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const CounterApp = ({
  value,
  onPressIncrement,
  onPressDecrement
}) => {

  const {
    container,
    interaction,
    logs,
    button,
    increment,
    decrement,
    textInteraction,
    resultContainer,
    test
  } = styles;



  return(

      <View style={container}>

        <View style={interaction}>
          <TouchableHighlight onPress={onPressIncrement}>
            <View style={[button, increment]}>
              <Text style={textInteraction}>+</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={onPressDecrement}>
            <View style={[button, decrement]}>
              <Text style={textInteraction}>-</Text>
            </View>
          </TouchableHighlight>

          <View style={[resultContainer]}>
            <Text style={{ color: 'blue' }}>{value}</Text>
          </View>


        </View>
        <View style={logs}>


        </View>
      </View>


  );
};




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
  },
  logs: {
    flex: 4,
    width: width,
    borderWidth: 7,
    borderColor: 'yellow',
    paddingHorizontal: 20,
  },
  button: {
    width: 100,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  increment: {
    backgroundColor: 'green',
  },
  decrement: {
    backgroundColor: 'red',
  },
  textInteraction: {
    fontSize: 50,
  },
  resultContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  test: {
    backgroundColor: 'blue',
  },
});



export default CounterApp;
