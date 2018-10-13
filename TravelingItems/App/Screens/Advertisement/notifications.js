import React from 'react';
import {Platform, StyleSheet,ListView, Text, View,TextInput,TouchableOpacity,Picker,Image} from 'react-native';

export default class Advertise extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {

        const array = [
            {
                name: 'Jane',
                surname:'Carley'

            },
            {
                name: 'Ketty',
                surname: 'Perry',
            },
            {
                name: 'ferihan',
                surname: 'çabuk'
            },
            {
                name: 'cumali',
                surname: 'demir'
            },
            {
                name: 'ahmetcan',
                surname: 'küçükkor'
            },

        ]
        const ds = new ListView.DataSource({rowHasChanged : (r1 ,r2) => r1 !== r2});

        const  dataSource= ds.cloneWithRows(array);


        return(
            <View>
                <Text></Text>
                <ListView dataSource={dataSource}
                          enableEmptySections={true}
                          renderRow={(rowData) => <TouchableOpacity style={styles.itemStyle}>
                              <Text style={{color: '#f8f8f8'}}> {rowData.name+ ' ' + rowData.surname + 'den gelen bir bildiriminiz var'}</Text>
                          </TouchableOpacity>}
                />
            </View>


        );
    }
}

const styles = {
    containerStyle : {
        flex : 1,
        height: 70,
        backgroundColor:'#e250f8'
    },
    itemStyle : {
        height: 60,
        backgroundColor: '#9825f8',
        borderRadius:4,
        margin: 5,
        justifyContent:'center',
        alignItems:'center'
    }

}