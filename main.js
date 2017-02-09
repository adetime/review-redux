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

    store.dispatch({ type: 'INCREMENT' });
  }


  onPressDecrement = () => {

    store.dispatch({ type: 'DECREMENT' });
  }


  render() {

    const { value } = store.getState();

    console.log('value', value)

    return (
      <View style={styles.container}>

        <CounterApp
          value={value.current}
          onPressIncrement={this.onPressIncrement}
          onPressDecrement={this.onPressDecrement}
          logs={value.logs}
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
