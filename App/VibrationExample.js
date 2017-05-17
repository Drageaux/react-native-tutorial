'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    Vibration,
    Platform,
} = ReactNative;

exports.framework = 'React';
exports.title = 'Vibration';
exports.description = 'Vibration API';

var pattern, patternLiteral, patternDescription;
if (Platform.OS === 'android') {
    pattern = [0, 500, 200, 500];
    patternLiteral = '[0, 500, 200, 500]';
    patternDescription = `${patternLiteral}
arg 0: duration to wait before turning the vibrator on.
arg with odd: vibration length.
arg with even: duration to wait before next vibration.
`;
} else {
    pattern = [0, 1000, 2000, 3000];
    patternLiteral = '[0, 1000, 2000, 3000]';
    patternDescription = `${patternLiteral}
vibration length on iOS is fixed.
pattern controls durations BETWEEN each vibration only.

arg 0: duration to wait before turning the vibrator on.
subsequent args: duration to wait before next vibrattion.
`;
}

export default class VibrationExample extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text>{patternDescription}</Text>
                </View>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => Vibration.vibrate(pattern)}>
                    <View style={styles.button}>
                        <Text>Vibrate once</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => Vibration.vibrate(pattern, true)}>
                    <View style={styles.button}>
                        <Text>Vibrate until cancel</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}
                    onPress={() => Vibration.cancel()}>
                    <View style={styles.button}>
                        <Text>Cancel</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.wrapper}>
                    <View style={styles.button}>
                        <Text>Play Sound</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});

AppRegistry.registerComponent('VibrationExample', () => VibrationExample);