import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, TextInput, View, ScrollView, Image} from "react-native";
import ListViewer from "./App/ListViewer";

// need 'export default' else it wouldn't compile
export default class Root extends Component {
    render() {
        return (
            <ListViewer/>
        )
    }
}


AppRegistry.registerComponent('App', () => App);