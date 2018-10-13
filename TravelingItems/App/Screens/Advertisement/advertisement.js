import React, {Component} from 'react';
import {Platform,Image, TouchableOpacity,ListView,StyleSheet, Text, View,TextInput} from 'react-native';
import * as MyServices from "../../Services/services"
import {LoadingWrapper} from "../../Components/loadingWrapper";
export default class Advertisement extends React.Component {

    static navigationOptions = ({navigation}) => {

        return {
            title: "ILANLAR"
        }
    };

    constructor(props){
        super(props);
        this.state = {
            loading:'',
            error:'',
            advertise:[]
        };
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

        let category = row.category.name
        let user = row.user

        return(
            <TouchableOpacity style={{flex:1,flexDirection:'row', margin:5,backgroundColor:'yellow',borderRadius:5,alignItems:'center'}}>

                <View style={{padding:5,justifyContent:'center',alignItems:'center',justifyContent:'space-between'}}>
                    <Image style={{height:50,width:50,borderRadius:25}} source={require('../../Images/Image2.png')}/>
                    <Text>{user.name}</Text>
                </View>

                <View style={{flex:1,padding:10}}>
                    <View style={{backgroundColor:'red'}}>
                        <Text>{row.title}</Text>
                        <Text>{row.declaration}</Text>
                        <Text>{category}</Text>
                    </View>

                    <View style={{backgroundColor:'blue',flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{backgroundColor:'white'}}>{row.budget}</Text>
                        {/*<Text style={{backgroundColor:'white'}}>{row.availableSpaces}</Text>*/}
                    </View>

                </View>

            </TouchableOpacity>
        )

    }


    render() {


        let {loading,error,advertise} = this.state;

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = ds.cloneWithRows(advertise);

        return (
            <LoadingWrapper loading={loading} error={error}>
                <View style={styles.root}>
                    <View style={styles.searchBarView}>
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
                </View>
            </LoadingWrapper>

        );
    }
}



const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'white'

    },
    list:{
        backgroundColor: 'green',
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
        // margin:15,
        backgroundColor: 'blue',
        borderRadius:10,
    },
    searchBarView:{
        backgroundColor:'red',
    },

});
