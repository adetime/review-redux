import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/view/HomeScreen';
import CounterScreen from './src/view/CounterScreen';
import TodoScreen from './src/examples/todo';

const Main = StackNavigator({
  Home: { screen: HomeScreen },
  Counter: { screen: CounterScreen },
  Todo: { screen: TodoScreen },
});

Exponent.registerRootComponent(Main);
