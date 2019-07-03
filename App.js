/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increaseCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { counter } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <View style={styles.row}>
          <Text style={styles.instructions}>{counter}</Text>
          <Button onPress={this.increaseCounter} title="Increase counter" />
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
});
