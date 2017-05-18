/* @flow */

import React, {Children} from "react";
import {StyleSheet, Text} from "react-native";

/**
 * Used across examples as a screen placeholder.
 */

const SampleText = ({children}: {children?:Children}) => (
    <Text style={styles.sampleText}>{children.toString()}</Text>
);

export default SampleText;

const styles = StyleSheet.create({
    sampleText: {
        margin: 14,
    },
});
