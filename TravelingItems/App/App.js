/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap TestCommit R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};


let myApp = createStackNavigator({
    Login:{
      screen: "Will Create"
    },
    SignUp:{
      screen: "Will Create"
    },
    ForgotPassword:{
      screen: "Will Create"
    },
    PasswordRecovery:{
      screen: "Will Create"
    }

});
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <MyApp/>

        {/*<Text style={styles.welcome}>Welcome to React Native!</Text>*/}
        {/*<Text style={styles.instructions}>To get started, edit App.js</Text>*/}
        {/*<Text style={styles.instructions}>{instructions}</Text>*/}
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
