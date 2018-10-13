import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';


export default class Login extends Component<Props> {

    constructor(props){
        super(props)
    }

    render() {
        let { username, password,loading } = this.state;

        return (
            <View style={styles.container}>
                <TextInput   value={username}
                             placeholder='e-mail'
                             secureTextEntry={true}
                             onChangeText={ text => this.setState({ email: text })}/>

                <TextInput   value={password}
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
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textInput:{
        height:40,
    }

});
