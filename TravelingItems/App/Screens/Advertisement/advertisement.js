import React, {Component} from 'react';
import {Platform,Image, ListView,StyleSheet, Text, View,TextInput} from 'react-native';

export default class Advertisement extends React.Component {



    constructor(props){
        super(props);
        this.state = {
            loading:'',
            error:''
        };
    }

    renderRow(row){


        return(
            <View style={{flex:1}}>

                <View>
                    <Image source={row.image}/>
                    <Text>{row.name}</Text>
                </View>

                <View>
                    <Text>r{row.title}</Text>
                        <View>
                            <Text>{row.budget}</Text>
                        </View>

                </View>

            </View>
        )

    }

    render() {

        let dummy = [{
             image: require('../../Images/Image2.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
             image:require('../../Images/Image3.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
             image:require('../../Images/Image4.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
             image:require('../../Images/Image5.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
             image:require('../../Images/Image6.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
             image:require('../../Images/Image7.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
             image:require('../../Images/Image8.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
             image:require('../../Images/Image9.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
             image:require('../../Images/Image11.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        },{
             image:require('../../Images/Image12.png'),
            name:"Name ",
            title:"MyTitle",
            myCategories:'',
            budget:''
        }]
        let {loading,error} = this.state;

        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = ds.cloneWithRows(dummy);

        return (
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
