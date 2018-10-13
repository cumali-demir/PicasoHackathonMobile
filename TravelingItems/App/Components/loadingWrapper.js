import React from 'react'
import {ActivityIndicator, View, Text, StyleSheet} from "react-native";

export class LoadingWrapper extends React.Component {

    constructor(props) {

        super (props);
    }

    render() {

        let {loading, error, children} = this.props;
        if (loading) {
            return (
                <View style={styles.container}>
                    <View>
                        <ActivityIndicator size="large"/>
                        <Text  style={styles.text}>Lütfen bekleyin...</Text>
                    </View>
                </View>
            )
        } else if (error) {
            return (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.text}>{error||'Bir hata oluştu.'}</Text>
                    </View>
                </View>
            )
        }
        return children || null;
    }
}

let styles = StyleSheet.create(theme => ({
    container: {
        backgroundColor: theme.colors.screen.base,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    text: {
        textAlign: 'center',
        padding: 10
    }
}));