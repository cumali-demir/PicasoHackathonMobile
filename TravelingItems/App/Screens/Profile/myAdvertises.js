import React from 'react';
import {Platform, Dimensions,TouchableOpacity, Image, StyleSheet, Text, View, ListView} from 'react-native';
import * as MyServices from "../../Services/services"
import {LoadingIndicator} from '../../Components/loadingIndicator'
import {LoadingWrapper} from "../../Components/loadingWrapper";



export default class MyAdvertises extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};   // You can get the params here as navigation.state.params.paramsKey
        console.log("duzgun duzgun:", params.token);
    }

    constructor(props){
        super(props);
        this.state = {
            advertises:'',
        }

        this.goMyAdvertisesDetail = this.goMyAdvertisesDetail.bind(this)
    }

    componentDidMount(){
        this.setState({loading:true});
        let token = this.props.navigation.state.params.token;
        MyServices.Services.getMyAdvertises(token).then(
            advertises=>{
                this.setState({advertises,loading:false,error:false,});
            },
            error=>{
                this.setState({loading:false,error:true});
                console.log("AUw");
                alert(error)

            }
        )

    }

    goMyAdvertisesDetail(id){


        let token = this.props.navigation.state.params.token;

        this.props.navigation.navigate("MyAdvertisementDetail",{token:token,_id:id})



    }

    renderRow(row){

        console.log("MYROW",row);


        return(

            <TouchableOpacity onPress={()=>{this.goMyAdvertisesDetail(row._id)}}
                              style={{backgroundColor:"white",flex:1}} >
                <View  style={{flex:1,borderWidth:0.5,backgroundColor:
                        row.status
                            ? row.status == 1
                            ? "red"
                            :"blue"
                            : "gray" ,bordercolor:'gray', borderRadius:6,justifyContent:'center',margin:5}}>

                    <Text style={{fontSize:20,padding:5}}>
                        advertise title: {row.title}
                    </Text>

                    <Text style={{fontSize:20,padding:5}}>
                        advertise title: {row.declaration}
                    </Text>

                    <Text style={{fontSize:20,padding:5}}>
                        Budget {row.budget}
                    </Text>

                </View>
            </TouchableOpacity>
        )
    }


    render() {

        let {loading,advertises,error} = this.state;

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = ds.cloneWithRows(advertises);



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
