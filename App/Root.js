import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Bananas from './Bananas';
import LotsOfGreetings from './Greeting'

// need 'export default' else it wouldn't compile
export default class Root extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HARO WARUDO</Text>
                <Bananas/>
                <LotsOfGreetings/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});