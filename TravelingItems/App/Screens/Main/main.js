import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';
import {LoadingIndicator} from '../../Components/loadingIndicator'

export default class Main extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            username:'',
            password:''
        };


        let dummy = [{
            image:require('../../Images/Image2.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
            image:require('../../Images/Image3.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
            image:require('../../Images/Image4.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
            image:require('../../Images/Image5.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
            image:require('../../Images/Image6.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
            image:require('../../Images/Image7.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
            image:require('../../Images/Image8.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
            image:require('../../Images/Image9.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
            image:require('../../Images/Image11.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
            image:require('../../Images/Image12.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        }]
    }

    render() {
        
        return (
            <View style={styles.container}>



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
