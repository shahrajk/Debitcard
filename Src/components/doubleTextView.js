import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CLColors from '../res/CLColors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function doubleTextView(props) {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.value1Style, props.value1Style]}>{props.value1} </Text>
            {!props.isSecure ?
                <Text style={[styles.value1Style, props.value2Style]}>{props.value2}</Text>
                :
                <Text style={[styles.value1Style, { fontSize: hp(2.9), maxHeight: 16, bottom: 1 }]}>***</Text>

            }
        </View>
    );
}

const styles = StyleSheet.create({
    value1Style: {
        color: CLColors.WHITE,
        fontSize: hp(1.8),
        letterSpacing: 1.56,
        fontWeight: '700',
    }
});
