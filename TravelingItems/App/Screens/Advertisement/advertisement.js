import React, {Component} from 'react';
import {Platform,Image, TouchableOpacity,ListView,StyleSheet, Text, View,TextInput} from 'react-native';
import * as MyServices from "../../Services/services"
import {LoadingWrapper} from "../../Components/loadingWrapper";
export default class Advertisement extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};   // You can get the params here as navigation.state.params.paramsKey

        console.log("CompareScreen product_id:", params.token);
    }

    constructor(props){
        super(props);
        this.state = {
            loading:'',
            error:'',
            advertise:[]
        };
        this.goAdvDetail = this.goAdvDetail.bind(this)
    }

    componentDidMount(){

        this.setState({loading:true});

        MyServices.Services.getAdvertises().then(
            advertise => {
                this.setState({advertise,loading:false,error:false})
            },
            error=>{
                this.setState({loading:false,error:true})

            }
        )

    }


    renderRow(row){

        let category = row.category.name;
        let user = row.user;
        console.log(row)
        return(
            <TouchableOpacity onPress={()=> this.goAdvDetail(row)} style={{flex:1,flexDirection:'row', margin:5,backgroundColor:'#f8a876',borderRadius:5,alignItems:'center'}}>

                <View style={{padding:5,justifyContent:'center',alignItems:'center',}}>
                    <Image style={{height:50,width:50,borderRadius:25}} source={require('../../Images/Image2.png')}/>
                    <Text>{user.name}</Text>
                </View>

                <View style={{flex:1,padding:10,justifyContent:'space-between'}}>

                        <View style={styles.myText}>
                            <Text>Title: {row.title}</Text>
                        </View>

                        <View style={styles.myText}>
                            <Text>Declaration: {row.declaration}</Text>
                        </View>

                        <View style={styles.myText}>
                            <Text>Category: {category}</Text>
                        </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>

                        <View style={styles.myText}>
                            <Text style={{backgroundColor:'white',borderRadius:5}}>Bütçe: {row.budget}</Text>
                        </View>

                        <View style={styles.myText}>
                            <Text style={{backgroundColor:'white',borderRadius:5}}>Kullanılabilir Alan: {row.avaliableSpaces}</Text>
                        </View>
                    </View>

                </View>

            </TouchableOpacity>
        )

    }

    goAdvDetail(row){
        this.props.navigation.navigate("AdvertisementDetail",{adv:row,token:this.props.navigation.state.params.token})
        // this.props.navigation.navigate("AdvertisementDetail")
    }

    render() {


        let {loading,error,advertise} = this.state;

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = ds.cloneWithRows(advertise);



        return (
            <LoadingWrapper loading={loading} error={error}>
                <View>
                    <TextInput   autoCorrect={false}
                                 onChangeText={
                                     (searchText) =>{
                                     }
                                 }
                                 style={styles.searchBar}
                                 placeholder='Search'/>

                </View>
                <View style={{flex:1}}>
                    <ListView dataSource={data}
                              renderRow={this.renderRow.bind(this)}
                              enableEmptySections={true}
                              style={styles.list} />
                </View>
            </LoadingWrapper>

        );
    }
}



const styles = StyleSheet.create({

    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#eff8e0',
    },
    list:{
        backgroundColor: '#eff8e0',
        paddingVertical: 8,
        paddingHorizontal: 14
    },
    textInput:{
        height:40,
        backgroundColor:'gray',
        padding:5,
        margin: 5
    },
    searchBar: {
        margin:5,
        padding:5,
        backgroundColor: '#a4a4a4',
        borderRadius:20,
        height:40
    },myText:{
        backgroundColor:'#f2ecf8',
        justifyContent:"center",
        margin:5,
        borderRadius:5,
        padding:2
    }


});
