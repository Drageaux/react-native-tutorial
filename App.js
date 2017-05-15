import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";

// need "export default" else it wouldn't compile
export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>HARO WARUDO</Text>
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

AppRegistry.registerComponent("HelloWorldApp", () => HelloWorldApp);