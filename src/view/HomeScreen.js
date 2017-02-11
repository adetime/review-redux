import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from
'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30
  },
  call: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Redux Playground',
  };

  onPress = (routeName) => {
    const { navigate } = this.props.navigation;

    return navigate(routeName, { user: 'Adeildo' });
  }


  render() {

    const { container, title, call } = styles;
    const { params } = this.props.navigation.state;

    return (
      <View style={container}>
        <Text style={title}>Redux Playground</Text>
        <Text style={call}>Choose one app...</Text>
        <ScrollView>
          <TouchableWithoutFeedback onPress={()=>this.onPress('Counter')}>
            <View style={{marginBottom: 30}}><Text>Counter-Logger</Text></View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={()=>this.onPress('Todo')}>
            <View style={{marginBottom: 30}}><Text>Simple Todo</Text></View>
          </TouchableWithoutFeedback>

        </ScrollView>
      </View>
    );
  }

}

export default HomeScreen;
