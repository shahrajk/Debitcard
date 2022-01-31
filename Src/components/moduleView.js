import { Image, StyleSheet, Text, View, Switch } from 'react-native';
import React, { useState, useEffect } from 'react';
import CLColors from '../res/CLColors';
import { connect, useSelector } from 'react-redux';
import CLStrings from '../res/CLStrings';

const moduleView = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const SpendLimit = useSelector(state => state.Data.SpendLimit)

    const toggleSwitch = () => {
        if (props.keys == 1 && SpendLimit == null) {
            alert(CLStrings.Spend_Alert)
            return
        }
        setIsEnabled(isEnabled => !isEnabled)
    };


    useEffect(() => {
        props.sendData(props.keys, isEnabled)
    }, [isEnabled]);

    return (
        <View style={{ marginTop: 34, flexDirection: 'row' }}>
            <View>
                <Image source={props.Icon} style={[{ width: 32, height: 32, resizeMode: 'contain' }, props.IconStyle]} />
            </View>
            <View style={{ flex: 1, marginHorizontal: 12 }}>
                <Text style={{ fontSize: 14, color: CLColors.Module_MainLabel, fontWeight: '500' }}>{props.MainLabel}</Text>
                <Text style={{ fontSize: 13, color: CLColors.BLACK_40, }}>{props.discription}</Text>
            </View>
            {props.Switch &&
                <View>
                    <Switch
                        trackColor={{ true: CLColors.GREEN }}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({});

export default connect(null, null)(moduleView)
