import React from 'react';
import {Platform, ScrollView,StyleSheet, Text, View,TextInput,TouchableOpacity,Picker,Image} from 'react-native';
import * as MyServices from "../../Services/services"
import {LoadingIndicator} from '../../Components/loadingIndicator'

export default class Advertise extends React.Component {

    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};   // You can get the params here as navigation.state.params.paramsKey

        console.log("CompareScreen product_id:", params.adv);
        console.log("token:", params.token);
    }

    constructor(props){
        super(props);
        this.state={
            offer:0,
            commission: "",
            product:'',
            notes:''
        }
        this.makeOffer = this.makeOffer.bind(this)
    }


    makeOffer(adv){
        let params = {
            token:this.props.navigation.state.params.token,
            advertiseID:adv._id,
            price:this.state.offer,
            product:this.state.product,
            note:this.state.notes,
        };
        console.log(params);
        this.setState({loading:true});
        MyServices.Services.giveOffer(params).then(
            success =>{
                this.setState({error:false,loading:false});

            },error=>{
                this.setState({error:true,loading:false});
                alert(error)
            }
        )


    }

    render() {
        let advertisement = this.props.navigation.state.params.adv;
        let {loading} = this.state
        console.log("asd",advertisement);
        return(
            <ScrollView style={styles.root}>
                <View style={styles.container}>
                    <Text style={styles.text}>Ilan veren Kisinin Adı: {advertisement.user.name}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Kisinin Yeterli Yeri: {advertisement.avaliableSpaces} kg</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Butcesi: {advertisement.budget}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Ilan Basligi: {advertisement.title}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Ilan Aciklamasi: {advertisement.declaration}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Bitis Tarihi: {advertisement.end_date}</Text>
                </View>

                <View style={styles.container}>
                    <TextInput   placeholder={"Ne almak istiyorsunuz?"}
                                 style={styles.textInput}
                                 onChangeText={ text => this.setState({ product: text })}
                                 value={this.state.text}/>
                </View>

                <View style={styles.container}>
                    <TextInput   placeholder={"Notunuz varmi?"}
                                 style={styles.textInput}
                                 onChangeText={ text => this.setState({ notes: text })}
                                 value={this.state.notes}/>
                </View>


                <View style={styles.container}>
                    <TextInput   placeholder={"fiyar icin odemek istediginiz tutari giriniz"}
                                 style={styles.textInput}
                                 keyboardType='numeric'
                                 onChangeText={ text => this.setState({ offer: parseInt(text) })}
                                 value={this.state.offer}/>
                </View>

                <View style={styles.container}>
                    <Text style={styles.text}>{this.state.offer ? this.state.offer * 0.2 : 0}</Text>
                </View>

                <LoadingIndicator loading={loading}/>

                <TouchableOpacity style={styles.button} onPress={()=>this.makeOffer(advertisement)}>
                    <Text style={{textAlign:'center',fontSize:30,color:"white"}}>Teklif Ver</Text>
                </TouchableOpacity>


            </ScrollView>

        );
    }
}

const styles = {
    root:{
        flex:1,
        backgroundColor:'gray'
    },text:{
        fontSize:20,
    },textInput:{
        fontSize:20,
    },container:{
        backgroundColor:'white',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        margin:5,
        borderRadius:10,
    },button:{
        margin:5,
        height:50,
        backgroundColor:"#87dcd6",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,

    }

};