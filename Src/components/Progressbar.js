import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CLColors from '../res/CLColors';

export default function Progressbar(props) {
    console.log('props.progress', props.progress)
    return (
        <View style={styles.parentContainer}>
            <View style={[
                styles.childContainer,
                { width: `${props.progress}%`, borderTopRightRadius: props.manageProgressUI ? 30 : 0 }
            ]}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
        height: 10,
        width: '100%',
        backgroundColor: 'rgba(1,209,103,0.1)',
        borderRadius: 30,
    },
    childContainer: {
        height: '100%',
        backgroundColor: CLColors.GREEN,
        borderRadius: 30,
    },
});
