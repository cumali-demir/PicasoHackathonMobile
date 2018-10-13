import React from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Picker,Image} from 'react-native';

export default class Advertise extends React.Component {

   constructor(props) {
       super(props);
       this.state = {
           weight: '',
       }
   }

    render() {
        return(
            <View style={styles.containerStyle}>

                <TextInput placeholder="How many kilograms are you bring?"
                      style={styles.textInputStyle}/>

                <TextInput  placeholder="Comission"
                            style={styles.textInputStyle}/>
                <TextInput  placeholder="Price"
                            style={styles.textInputStyle}/>

                <View>


                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle } >Advertise Now</Text>
                    </TouchableOpacity>

                </View>


            </View>
        );
    }
}


const styles = {
    containerStyle : {
       flex : 1,
        marginBottom: 30
    },
    buttonStyle: {
        height:80,
        backgroundColor: '#f8d164',
        margin : 5,
        borderRadius : 5,
        alignItems:'center',
        justifyContent: 'center'
    },
    headerStyle: {
        height:80,
        backgroundColor: '#f8d164',
        borderRadius : 5,
        alignItems:'center',
        justifyContent: 'center'
    },
    buttonTextStyle: {
        fontSize:25
    },
    textInputStyle: {
        fontSize : 20,
        fontColor: '#f8f8f8',
        backgroundColor : '#f8f8bb',
        borderRadius : 3,
        borderRadius:5,
        margin: 5,
        backgroundColor:'#e7e6e3',
        borderColor:'#aaa9a6',
        color: '#eae9e6'
    },
    iconStyle: {
        alignSelf: 'stretch',
        borderRadius:3,
        margin: 5,
        marginLeft : 140,
        height: 55,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8f8'
    },
    textStyle: {
        fontSize: 18
    },
    pickerStyle:{
        borderRadius:5,
        margin: 5,
        backgroundColor:'#948cf8',
        borderColor:'#eb98f8'
    }

}