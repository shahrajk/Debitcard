import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CLStrings from '../res/CLStrings';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CLColors from '../res/CLColors';
import SingleText from './singleText';

export default function currencyView() {
    return (
        <View style={styles.Greenbox}>
            <SingleText
                value={CLStrings.Currency}
                valueStyles={styles.Greenbox_txt}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    Greenbox: {
        maxHeight: hp(22),
        marginRight: hp(1),
        backgroundColor: CLColors.GREEN,
        justifyContent: "center",
        paddingHorizontal: hp(1.3),
        borderRadius: hp(0.4),
        paddingVertical: hp(0.3)
    },
    Greenbox_txt: {
        fontSize: hp(1.8),
        fontWeight: '700'
    },
});
