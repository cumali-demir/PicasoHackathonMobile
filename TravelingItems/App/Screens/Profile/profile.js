import React from 'react';
import {Platform, TouchableOpacity,Dimensions, Image, StyleSheet, Text, View, ListView} from 'react-native';

export default class Profile extends React.Component {


    constructor(props){
        super(props);
        this.renderRow = this.renderRow.bind(this)
    }

    renderRow(row){


        return(

            <View style={{flex:1,borderWidth:0.5,backgroundColor:'white',bordercolor:'#d6d6d6',height:50, borderRadius:6,justifyContent:'center',margin:5}}>


                <TouchableOpacity style={{backgroundColor: '#f8ccac'}} onPress={()=>{
                    console.log("tik tik");
                    this.props.navigation.navigate("MyOrders",{token:this.props.navigation.state.params.token})

                    }}>

                    <Text style={{fontSize:20,padding:5}}>
                        {row}
                    </Text>
                </TouchableOpacity>


            </View>
        )
    }

    render() {

        let dummy = ["Bilgilerim","İlanlarim","Siparislerim"];
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = ds.cloneWithRows(dummy);

        return(
            <View style={styles.root}>
                <View style={{flex:2,backgroundColor:'white'}}>
                        <Image resizeMode={"cover"} style={styles.image} source={require("../../Images/photo19.png")}/>
                </View>

                <View style={{flex:3,backgroundColor:'black'}}>

                        <ListView dataSource={data}
                                  renderRow={this.renderRow.bind(this)}
                                  enableEmptySections={true}
                                  style={styles.list} />
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
    image:{
        marginTop : 9,
        flex:1,
        width:Dimensions.get('window').width,
        // height:Dimensions.get('window').width* 2/3,
        backgroundColor:'red',
    },
    list:{
        backgroundColor: '#f8e4db',
        paddingVertical: 8,
        paddingHorizontal: 14
    },
});
