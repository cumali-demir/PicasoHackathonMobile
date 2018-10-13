/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap TestCommit R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// type Props = {};

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Login from './Screens/Authentication/login'
import { Screen } from './Screen' ;
import {Advertisements} from "./Screens/DrawerNavigator/Advertisements";
import Main from "./Screens/Main/main";
import { DrawerNavigator } from 'react-navigation';
import {Advertise} from "./Screens/DrawerNavigator/Advertise";
import {LogOut} from "./Screens/DrawerNavigator/LogOut";
import {Profile} from "./Screens/DrawerNavigator/Profile";


let Drawer = DrawerNavigator({

    Main : {
        screen:Main
    },
    Advertisements: {
        screen:Advertisements
    },
    Advertise:{
        screen: Advertise
    },
    LogOut: {
        screen:LogOut
    },
    Profile:{
        screen:Profile
    },

});



const MyApp = createStackNavigator({

    Login:{
      screen: Login
    },
    Main:{
      screen:Screen
    },
    // ForgotPassword:{
    //   screen: "Will Create"
    // },
    // PasswordRecovery:{
    //   screen: "Will Create"
    // }

});

export default class App extends React.Component {

    render() {
    return (

        <MyApp/>
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
