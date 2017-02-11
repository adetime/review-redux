import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  ScrollView,
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
  },
  logsContainer: {
    flex: 4,
    width: width,
    borderWidth: 7,
    borderColor: 'yellow',
    alignItems: 'center'
  },
  logsRow: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-around',
    marginTop: 10,

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
  previousText: {
    color: 'gray',
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
  logsContainer,
  logsRow,
  previousText,
  actionText,
  newText,
  button,
  increment,
  decrement,
  textInteraction,
  resultContainer,
  test,
} = styles;


const renderLogs = (logs) => {
  let numberOfLogs = 0;
  return logs.map( log => {
    return (
      <View key={numberOfLogs++} style={logsRow}>
        <Text style={previousText}>
          {`${log.previous}`}
        </Text>
        <Text style={actionText}>
          {`${log.actionDispatched}`}
        </Text>
        <Text style={newText}>
          {`${log.new}`}
        </Text>
      </View>
    );
  });
}

const CounterApp = ({
  value,
  onPressIncrement,
  onPressDecrement,
  logs,
  user
}) => {


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
        <View style={logsContainer}>
          <Text style={{fontSize: 22}}>{`${user}'s LOGS`}</Text>
          <View style={logsRow}>
            <Text style={previousText}>
              Prev. state:
            </Text>
            <Text style={actionText}>
              Action dispatched:
            </Text>
            <Text style={newText}>
              New state:
            </Text>
          </View>
          <ScrollView>
          {renderLogs(logs)}
          </ScrollView>

        </View>
      </View>


  );
};






export default CounterApp;
