import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createDrawerNavigator} from 'react-navigation';
import Login from './Screens/Authentication/login'
import Advertise from "./Screens/Advertisement/advertise";
import Advertisement from "./Screens/Advertisement/advertisement";
import LogOut from "./Screens/Authentication/logOut";
import Profile from "./Screens/Profile/profile";
import advertisementDetail from "./Screens/Advertisement/advertisementDetail"
import MyOrder from "./Screens/Profile/multiModal"


const Drawer = createDrawerNavigator({
    Advertisements: {//ilanlar
        screen:Advertisement
    },
    Advertise:{//ilanver
        screen: Advertise
    },
    Profile:{
        screen:Profile
    },
    LogOut: {
        screen:LogOut
    },
    AdvertisementDetail : {
        screen : advertisementDetail
    }

},{
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
})


const MyApp = createStackNavigator({

    Login:{
        screen: Login,
        navigationOptions: () => ({
            headerStyle: {backgroundColor: 'yellow'},
            title: `Siparislerim`,
            headerLeft: null

        }),
    },
    Main:{
        screen: Drawer,
    },
    MyOrder:{
        screen:MyOrder,
        navigationOptions: () => ({
            headerStyle: {backgroundColor: 'yellow'},
            title: `Siparislerim`,
        }),
    },
    // ForgotPassword:{
    //   screen: "Will Create"
    // },
    // PasswordRecovery:{
    //   screen: "Will Create"
    // }

},{
    headerMode: 'screen',
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: 'green'},
        title: 'Logged In to your app!',
        headerLeft: <Text onPress={() => navigation.toggleDrawer()}>Menu</Text>
    })
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