import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';
import {LoadingIndicator} from '../../Components/loadingIndicator'

export default class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            username:'',
            password:''
        }
    }

    render() {
        let { username, password,loading } = this.state;

        return (
            <View style={styles.container}>
                <TextInput   style={styles.textInput}
                             value={username}
                             placeholder='e-mail'
                             onChangeText={ text => this.setState({ username: text })}/>

                {/*<LoadingIndicator loading={loading}/>*/}

                <TextInput   value={password}
                             style={styles.textInput}
                             placeholder='Şifre'
                             secureTextEntry={true}
                             onChangeText={ text => this.setState({ password: text })}/>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'white'

    },
    textInput:{
        height:40,
        backgroundColor:'gray',
        padding:5,
        margin: 5
    }

});
