import React from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity,Picker,Image} from 'react-native';

export default class Advertise extends React.Component {



    /*
    <TextInput style={{fontSize: 18}}
                               secureTextEntry
                               placeholder="Şifrenizi girin"
                               onChangeText={(password) => this.setState({password})}

                    />
     */


   constructor(props) {
       super(props);
       this.state = {
           weight: '',
       }
   }

    render() {
        return(
            <View style={styles.containerStyle}>

               <View style={styles.headerStyle}>
                  <Text style={styles.buttonTextStyle}>Advertise</Text>
               </View>

                <TextInput placeholder="How many kilograms are you bring?"/>
                <Picker selectedValue={this.state.pickerValue}
                        onValueChange={(itemValue) => this.setState(
                            {pickerValue: itemValue})}
                >
                    <Picker.Item label='Teknoloji' value='hepsi'/>
                    <Picker.Item label='Giyim' value='dolu'/>
                </Picker>

                <TextInput  placeholder="Komisyon"/>
                <TextInput  placeholder="Bütçe"/>



                <View>

                        <TouchableOpacity  style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>From Where</Text>
                        </TouchableOpacity>
                   <TouchableOpacity>
                    <Image style={styles.iconStyle}
                           source={require('../../icons/images.png')}/>
                   </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonStyle}>
                            <Text style={styles.textStyle}>To Where</Text>
                         </TouchableOpacity>

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
        height: 20,
        backgroundColor : '#f8f8bb',
        borderRadius : 3
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
    }

}