import React from 'react';
import {Platform, Dimensions,TouchableOpacity, Image, StyleSheet, Text, View, ListView} from 'react-native';
import * as MyServices from "../../Services/services"
import {LoadingIndicator} from '../../Components/loadingIndicator'
import {LoadingWrapper} from "../../Components/loadingWrapper";



export default class MyAdvertisesDetail extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};   // You can get the params here as navigation.state.params.paramsKey
        console.log("duzgun duzgun:", params.token);
    }

    constructor(props){
        super(props);
        this.state = {
            offerOwn:[],
        }
        this.applyOrReject = this.applyOrReject.bind(this);
        this.getData = this.getData.bind(this);
    }

    getData(){
        this.setState({loading:true});
        let token = this.props.navigation.state.params.token;
        console.log("detailAdv toke", token);
        let _id = this.props.navigation.state.params._id;

        MyServices.Services.myAdvertiseDetail(token,_id).then(
            offerOwn=>{
                this.setState({offerOwn,loading:false,error:false,});
                alert("basardin")
            },
            error=>{
                this.setState({loading:false,error:true});
                console.log("AUw");
                alert(error)

            }
        )
    }
    componentDidMount(){
        this.getData()
    }

    applyOrReject(id,status){
        let token = this.props.navigation.state.params.token;
        this.setState({loading:true});

        MyServices.Services.acceptOrNot(token,id,status).then(
            success=>{
                this.getData()
            },error=>{
                this.setState({loading:false,error:true,});
                alert(error)
            }

        )
    }

    renderRow(row){

        console.log("MYROW",row);
        let offerOwner = row.offererID;

        let bottomButtons = (
            <View style={{flex:1,flexDirection:"row",backgroundColor:'cyan',height:50}}>

                <TouchableOpacity style={{backgroundColor:"green",justifyContent:'center',alignItems:'center',flex:1,margin:5}} onPress={()=>{
                   this.applyOrReject(row._id,1)
                }}>
                    <Text>KABUL ET</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:"red",justifyContent:'center',alignItems:'center',flex:1,margin:5}} onPress={()=>{
                    this.applyOrReject(row._id,2)

                }}>
                    <Text style={{}}>REDDET</Text>
                </TouchableOpacity>

            </View>
        );

        let bottomInfo = (
            <View style={{flex:1,flexDirection:"row",backgroundColor:'cyan',height:50}}>

                <View style={{backgroundColor:"green",borderRadius:10,justifyContent:'center',alignItems:'center',flex:1,margin:5}} onPress={()=>{

                }}>
                    <Text>{row.status ? "Kabul Edildi" : "Red Edildi"}</Text>
                </View>


            </View>
        );



        return(

            <View onPress={()=>{}} style={{backgroundColor:"white",flex:1,margin:5}} >

                <View  style={{flex:1,borderWidth:0.5,backgroundColor:"yellow",
                    bordercolor:'gray', borderRadius:6,justifyContent:'center',margin:5}}>

                    <Text style={{fontSize:20,padding:5}}>
                        Teklif verenin Adi Soyadi : {offerOwner.name} {offerOwner.surname}
                    </Text>

                    <Text style={{fontSize:20,padding:5}}>
                        Teklif verdigi Para: {row.price}
                    </Text>

                    <Text style={{fontSize:20,padding:5}}>
                        Almamizi istedigi urun : {row.product}
                    </Text>

                </View>

                    {!row.status ? bottomButtons : bottomInfo }
            </View>
        )
    }


    render() {

        let {loading,offerOwn,error} = this.state;

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = ds.cloneWithRows(offerOwn);



        return(
            <LoadingWrapper loading={loading} error={error} >

                <View style={styles.root}>
                    <View style={{flex:3,backgroundColor:'black'}}>
                        <ListView dataSource={data}
                                  renderRow={this.renderRow.bind(this)}
                                  enableEmptySections={true}
                                  style={styles.list} />

                        <LoadingIndicator loading={loading}/>
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
});
