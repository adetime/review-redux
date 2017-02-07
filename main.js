import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { createStore } from 'redux';

import CounterApp from './src/view/CounterApp';
import reducers from './src/redux/reducers';

// Create a store for counter reducer example
const store = createStore(reducers);


class App extends React.Component {

  componentWillMount(){
    store.subscribe(this.update)
  }

  update = () => {
    this.forceUpdate();
  }

  onPressIncrement = ( ) => {

    console.log('Previous state ----------', store.getState())

    store.dispatch({ type: 'INCREMENT' });

    console.log('Next state ----------', store.getState())
  }


  onPressDecrement = () => {

    console.log('Previous state ----------', store.getState())

    store.dispatch({ type: 'DECREMENT' });

    console.log('Next state ----------', store.getState())
  }


  render() {

    const { value, logs } = store.getState();

    console.log('logs', logs)

    return (
      <View style={styles.container}>

        <CounterApp
          value={value}
          onPressIncrement={this.onPressIncrement}
          onPressDecrement={this.onPressDecrement}
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
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);
