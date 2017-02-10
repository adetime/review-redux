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

const Main = StackNavigator({
  Home: { screen: HomeScreen },
  Counter: { screen: CounterScreen },
});

Exponent.registerRootComponent(Main);
