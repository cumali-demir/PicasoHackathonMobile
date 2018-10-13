import React from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default class LogOut extends React.Component {
    render() {
        return(
            <View>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles= {
    buttonStyle: {
        marginTop: 150,
        height:120,
        backgroundColor: '#9ea3f8',
        borderRadius : 5,
        alignItems:'center',
        justifyContent: 'center'
    }
}
