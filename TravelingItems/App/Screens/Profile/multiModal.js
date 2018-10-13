import React from 'react';
import {Platform, Dimensions, Image, StyleSheet, Text, View, ListView} from 'react-native';



export default class MultiModal extends React.Component {

    renderRow(row){


        return(

            <View style={{flex:1,borderWidth:0.5,backgroundColor:'white',bordercolor:'gray',height:80, borderRadius:6,justifyContent:'center',margin:5}}>
                <Text style={{fontSize:20,padding:5}}>
                    {row}
                </Text>
            </View>
        )
    }


    render() {

        let dummy = ["Siparis 1","Siparis 2","Siparis 3"];
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let data = ds.cloneWithRows(dummy);

        return(
            <View style={styles.root}>
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
    list:{
        backgroundColor: 'green',
        paddingVertical: 8,
        paddingHorizontal: 14
    },
});
