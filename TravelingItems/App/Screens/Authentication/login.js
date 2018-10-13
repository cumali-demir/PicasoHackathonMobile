import React, {Component} from 'react';
import {Platform, TouchableOpacity,AsyncStorage,Image, StyleSheet, Text, View,TextInput} from 'react-native';

import {LoadingIndicator} from '../../Components/loadingIndicator'
import {NavigationActions,StackActions} from "react-navigation";
import * as service from "../../Services/services"
export default class Login extends React.Component {



    constructor(props){
        super(props);

        this.state = {
            username:'',
            password:''
        };

        this.login = this.login.bind(this);
    }




    login() {
        let {username, password} = this.state;

        this.setState({loading: true});

        service.Services.login(username, password).then(
            token => {
                this.setState({loading: false, error: false});
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({routeName: 'Main'})],
                });
                this.props.navigation.dispatch(resetAction);

            },
            error => {
                alert(error)
            }
        )
    }

    render() {
        let { username, password,loading } = this.state;

        return (
            <View style={styles.root}>

                <View style={styles.container}>


                    <TextInput   style={styles.textInput}
                                 value={username}
                                 placeholder='username'
                                 onChangeText={ text => this.setState({ username: text })}/>

                    <LoadingIndicator loading={loading}/>

                    <TextInput   value={password}
                                 style={styles.textInput}
                                 placeholder='Password'
                                 secureTextEntry={true}
                                 onChangeText={ text => this.setState({ password: text })}/>

                    <TouchableOpacity style={styles.button} onPress={()=>this.login()}>
                        <Text style={styles.text}>Giris Yap</Text>

                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor:'white'
    },
    container:{
        backgroundColor:'#fedcc9'  ,
        flex:1,
        justifyContent:'center',

    },
    button:{
        marginTop: 8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f82110',
        height:70
    },
    text:{
        color:"#f8c8b1",
        fontSize:19
    },
    textInput:{

        height:55,
        backgroundColor:'#f8ad8a',
        margin:5,
        borderRadius:5
    },
    iconStyle: {
        margin: 5,
        height: 250,
        width: 350,
        borderRadius:8

    },

});
