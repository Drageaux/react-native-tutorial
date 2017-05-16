import React, {Component} from "react";
import {AppRegistry, Text, TextInput, View} from "react-native";

// need 'export default' else it wouldn't compile
export default class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View style={{padding: 10, marginTop:50}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}/>
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ')
                        .map((word) => word && '🍕')
                        .join(' ')}
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('PizzaTranslator', () => PizzaTranslator);