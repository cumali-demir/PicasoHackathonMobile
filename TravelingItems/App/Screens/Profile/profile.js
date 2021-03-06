import React from 'react';
import {Platform, TouchableOpacity,Dimensions, Image, StyleSheet, Text, View, ListView} from 'react-native';

export default class Profile extends React.Component {


    constructor(props){
        super(props);
        this.renderRow = this.renderRow.bind(this)
    }

    renderRow(row,a,rowId){

        console.log("qweqweqweqwe",rowId)

        return(

            <View style={{flex:1,borderWidth:0.5,backgroundColor:'white',bordercolor:'#ffffff',height:50, borderRadius:6,justifyContent:'center',margin:5}}>


                <TouchableOpacity style={{backgroundColor: '#ffffff'}} onPress={()=>{

                    let token = this.props.navigation.state.params.token;
                    if (rowId == 0) {
                        this.props.navigation.navigate("UserInfo",{token:this.props.navigation.state.params.token})

                    }
                    if(rowId == 1){
                        this.props.navigation.navigate("MyAdvertisements",{token:this.props.navigation.state.params.token})


                    }if(rowId == 2){
                        this.props.navigation.navigate("MyOrders",{token:this.props.navigation.state.params.token})
                    }

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
        backgroundColor:'red',
    },
    list:{
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 14
    },
});
