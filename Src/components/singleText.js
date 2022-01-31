import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CLColors from '../res/CLColors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function singleText(props) {
    return (
        <View>
            <Text style={[styles.valueStyles, props.valueStyles]}>{props.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    valueStyles: {
        color: CLColors.WHITE,
        fontSize: hp(2.8),
        fontWeight: 'bold',
        letterSpacing: 0,
    }
});
