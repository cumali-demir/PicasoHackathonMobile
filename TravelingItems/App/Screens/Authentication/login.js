import React, {Component} from 'react';
import {Platform, TouchableOpacity, StyleSheet, Text, View,TextInput} from 'react-native';
import {LoadingIndicator} from '../../Components/loadingIndicator'

export default class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            username:'',
            password:''
        }

        this.navigateMain = this.navigateMain.bind(this)
    }

    navigateMain(){
        this.props.navigation.navigate("Main")
    }
    render() {
        let { username, password,loading } = this.state;

        return (
            <View style={styles.root}>

                <View style={styles.container}>

                    <TextInput   style={styles.textInput}
                                 value={username}
                                 placeholder='e-mail'
                                 onChangeText={ text => this.setState({ username: text })}/>

                    <LoadingIndicator loading={loading}/>

                    <TextInput   value={password}
                                 style={styles.textInput}
                                 placeholder='Şifre'
                                 secureTextEntry={true}
                                 onChangeText={ text => this.setState({ password: text })}/>

                    <TouchableOpacity style={styles.button} onPress={()=>this.navigateMain()}>
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
        justifyContent: 'center',
        backgroundColor:'white'
    },
    container:{
        backgroundColor:'gray'  ,
        flex:1,
        justifyContent:'center',

    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"blue",
        height:50
    },
    text:{
        color:"white"
    },
    textInput:{
        height:40,
        backgroundColor:'white',
        margin:5,
    }

});
