import React, {Component} from "react";
import {AppRegistry, StyleSheet, View, Text, TouchableHighlight, Vibration, Platform} from "react-native";
import {Audio} from "expo";

// need 'export default' else it wouldn't compile
export default class App extends Component {
    constructor(props) {
        super(props);
        this.sound = new Audio.Sound({
            source: require('./assets/sounds/denied.mp3'),
        });
    }

    componentDidMount() {
        Audio.setIsEnabledAsync(true);
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentLockedModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => this.playSound()}>
                    <View style={styles.button}>
                        <Text>Play Audio</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    async playSound() {
        try {
            await this.sound.loadAsync();
            await this.sound.playAsync();
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
            console.log(err);
        }
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});

AppRegistry.registerComponent('App', () => App);