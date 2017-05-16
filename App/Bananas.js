import React, {Component} from "react";
import {AppRegistry, Image} from "react-native";

export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'http://cdn1.medicalnewstoday.com/content/images/articles/271157-bananas.jpg'
        };
        return (
            <Image source={pic} style={{width: '100%', height: '50%'}}/>
        )
    }
}

AppRegistry.registerComponent('Bananas', () => Bananas);