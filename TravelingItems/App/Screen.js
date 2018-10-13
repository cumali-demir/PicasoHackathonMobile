import React, {Component} from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Advertise } from './Screens/DrawerNavigator/Advertise';
import { Advertisements } from './Screens/DrawerNavigator/Advertisements';
import { LogOut }from './Screens/DrawerNavigator/LogOut';
import { Profile }from './Screens/DrawerNavigator/Profile';
import main from './Screens/Main/main';
import {Platform, StyleSheet, Text, View} from 'react-native';



const Drawer = DrawerNavigator({
    Main : {
        screen:main
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


export class Screen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <Drawer />
        );
    }
}
