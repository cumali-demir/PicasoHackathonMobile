import React, {Component} from 'react';
import {Platform, TouchableOpacity,AsyncStorage, StyleSheet, Text, View,TextInput} from 'react-native';
import {LoadingIndicator} from '../../Components/loadingIndicator'
import {NavigationActions,StackActions} from "react-navigation";
import * as service from "../../Services/services"
export default class Login extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            username:'',
            password:''
        };

        this.login = this.login.bind(this);
    }




    login(){
        let {username,password} = this.state;

        this.setState({loading:true});

        service.Services.login(username,password).then(
             token =>
            {
                        this.setState({loading: false,error:false});
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'Main' })],
                        });
                        this.props.navigation.dispatch(resetAction);

            },
            error => {
                this.setState({loading: false, error: true})
            }
        )
    }

    componentDidMount(){


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
                                 placeholder='Şifre'
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
