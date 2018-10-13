import React from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Picker,Image} from 'react-native';

export default class Advertise extends React.Component {
    constructor(props){
        super(props);
    }

    Item(params) {
        return(
            <View style={styles.ItemStyle}>
                <Text style={{marginLeft : 8, fontSize : 18}}>{params}</Text>
            </View>
        );
    }

    static navigationOptions = {

    };

    render() {
        return(
            <View style={{backgroundColor : '#f1f3f8',flex : 1}}>
                {this.Item("Weight : ")}
                {this.Item("Category : ")}
                {this.Item("Commission :")}
                {this.Item("Price : ")}
            </View>

        );
    }
}

const styles = {
    ItemStyle : {
        height : 50,
        backgroundColor : '#a3f8bb',
        borderRadius:2,
        margin: 3,
        marginTop: 5,
        justifyContent :'center'
    },
    headerStyle : {
        height : 70,
        backgroundColor : '#6560f8',
        borderRadius:2,
        marginBottom : 20 ,
        justifyContent :'center'
    }
}