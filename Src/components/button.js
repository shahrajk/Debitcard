import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CLColors from '../res/CLColors';

export default function button(props) {
    return (
        <Pressable disabled={props.disabled} style={styles.buttonTouch} onPress={props.onPress} >
            <View style={[styles.buttonContainer, { backgroundColor: props.manageButtonCoor },]}>
                <Text style={styles.button_txt}>{props.ButtonName}</Text>
            </View>
        </Pressable >
    );
}

const styles = StyleSheet.create({
    buttonTouch: {
        paddingBottom: 40,
        alignSelf: 'center'
    },
    buttonContainer: {
        width: 300,
        height: 56,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: "center"
    },
    button_txt: {
        fontSize: 16,
        color: CLColors.WHITE,
        fontWeight: 'bold'
    }
});
