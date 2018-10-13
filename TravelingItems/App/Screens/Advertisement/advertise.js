import React from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Picker, Image, ListView} from 'react-native';
import * as Services from "../../Services/services"
export default class Advertise extends React.Component {






    constructor(props) {
        super(props);
        this.state = {
            title:"",
            declaration:"",
            endDate:"",
            budget:"",
            availableSpace:"",
            categories:[],
            pickerValue:''
        }
    }

    componentDidMount(){

        this.setState({loading:true});

        Services.Services.getCategories().then(
            categories=>{
                this.setState({categories,loading:true,error:false})

            },
            error=>{
                this.setState({loading:true,error:false})

            }
        )

    }

    fillParams(text,rowID){

        switch  (rowID) {
            case 0:
                this.setState({title:text});
                break;
            case 1:
                this.setState({declaration:text});
                break;
            case 2:
                this.setState({endDate:text});
                break;
            case 3:
                this.setState({budget:text});
                break;
            case 4:
                this.setState({availableSpace:text});
                break;
        }


    }
    renderRow(row, sectionID, rowID){

        var value = '';
        return(
            <View style={styles.container}>
                <TextInput
                           placeholder={row}
                           autoCorrect={false}
                           onEndEditing={ text => this.fillParams(text,rowID) } />
            </View>
        )
    }

    render() {
        let {categories,pickerValue,params} = this.state;

        let dummy = ["Title","Declaration","End Date","Budget","Available Space"];


        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = ds.cloneWithRows(dummy);


        return(
            <View style={styles.root}>
                <ListView dataSource={data}
                          renderRow={this.renderRow.bind(this)}
                          enableEmptySections={true}
                          style={styles.list} />
            </View>
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
        backgroundColor: 'green',
        paddingVertical: 8,
        paddingHorizontal: 14
    }
};