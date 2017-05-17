import React, {Component} from "react";
import {AppRegistry, Text, ScrollView, Image} from "react-native";

// need 'export default' else it wouldn't compile
export default class ScrollViewer extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Text style={{fontSize: 96}}>If you like</Text>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Text style={{fontSize: 96}}>Scrolling down</Text>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Text style={{fontSize: 96}}>What's the best</Text>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Text style={{fontSize: 96}}>Framework around?</Text>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Image source={require('./favicon.png')}/>
                <Text style={{fontSize: 80}}>React Native</Text>
            </ScrollView>
        )
    }
}


AppRegistry.registerComponent('ScrollViewer', () => ScrollViewer);