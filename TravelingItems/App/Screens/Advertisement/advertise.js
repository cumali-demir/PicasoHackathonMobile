import React from 'react';
import {Platform, ScrollView,StyleSheet, Text, View, TextInput, TouchableOpacity, Picker, Image, ListView} from 'react-native';
import * as Services from "../../Services/services"
import {LoadingIndicator} from '../../Components/loadingIndicator'

export default class Advertise extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text:[],
            uuppss:[],
            title:"",
            usDeclaration:"",
            endDate:"",
            budget:0,
            availableSpace:0,
            categories:[],
            pickerValue:''
        }

        this.saveAdvertise = this.saveAdvertise.bind(this)
    }


    componentDidMount(){

        this.setState({loading:true});

        Services.Services.getCategories().then(
            categories=>{
                this.setState({categories,loading:false,error:false})
            },
            error=>{
                this.setState({loading:false,error:false})
            }
        )

    }



    saveAdvertise(){

        this.setState({loading:true});
        let {uuppss} = this.state;
        console.log(uuppss);
        Services.Services.getToken().then(
            token=>{
                let gotIt = {
                    token:token,
                    title:uuppss[0],
                    declaration:uuppss[1],
                    end_date:new Date(2018, 2, 3, 10, 33, 30, 0),
                    category:"5bc1fee6fb6fc0602744c8ae",
                    city:"5bc204f1fb6fc0602744cc34",
                    budget:parseInt(uuppss[3]),
                    avaliableSpaces:parseInt(uuppss[4])
                }

                Services.Services.saveAdvertise(gotIt).then(
                    success=>{
                        this.setState({loading:false,error:false});
                    },error=>{
                        this.setState({loading:false,error:true});
                        alert("token okey, kaydedemedik")
                    }
                )
            }
        ).catch(
            error=>{
                this.setState({loading:false,error:true});
            }
        )



    }

    render() {
        let {categories,loading} = this.state;

        let dummy = ["Title","Declaration","End Date","Budget","Available Space"];


        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = ds.cloneWithRows(dummy);


        return(
            <ScrollView style={styles.root}>

                {
                    dummy.map((row, rowID) =>
                        <View style={styles.container}>
                            <TextInput
                                value={this.state.uuppss[rowID]}
                                style={{fontSize:30}}
                                placeholder={row}
                                autoCorrect={false}
                                onChangeText={text => {
                                    let abc = this.state.uuppss;
                                    abc[rowID] = text;
                                    this.setState({uuppss:abc})
                                } }/>
                        </View>
                    )
                }

                <TouchableOpacity onPress={()=>this.saveAdvertise()} style={{height:50,flex:1,backgroundColor:'#87dcd6',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:30,color:"white"}}>İlan Olustur</Text>
                </TouchableOpacity>

                <LoadingIndicator loading={loading}/>

            </ScrollView>
        );
    }
}


const styles = {
    root : {
        flex : 1,

    },
    container :{
        height:50,
        backgroundColor:'white',
        margin:5,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:6
    },
    list:{
        flex:1,
        backgroundColor: 'green',
        paddingVertical: 8,
        paddingHorizontal: 14

    }
};