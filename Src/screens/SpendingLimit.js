import { StyleSheet, Image, View, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, Text, Pressable } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CLColors from '../res/CLColors';
import CLImages from '../res/CLImages';
import SingleText from '../components/singleText'
import CLStrings from '../res/CLStrings';
import ModuleView from '../components/moduleView';
import { DEVICE } from '../utility';
import { connect, useSelector } from 'react-redux';
import { Submit } from '../redux/actions'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CurrencyView from '../components/currencyView';
import Button from '../components/button'

const SpendingLimit = (props) => {

    const navigation = useNavigation();
    const [spendLimit, setspendLimit] = useState(null)
    const [DefaultSpendOption, setDefaultSpendOption] = useState([])

    // Get default sepnd options
    useLayoutEffect(() => {
        fetch("/api/DefaultSpendOption")
            .then((res) => res.json())
            .then((json) => setDefaultSpendOption(json.DefaultSpendOption))
    }, [])

    // Store user selected weekly spend amount in redux
    const Set_Weekly_Limit = () => {
        if (spendLimit) {
            props.Submit(spendLimit)
            setspendLimit('')
            navigation.goBack()
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container} edges={['top']}>
                <View style={styles.topContainer}>
                    {/* Header */}
                    <View style={styles.debit_logo_container}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={CLImages.BACK} style={styles.backIcon} />
                        </TouchableOpacity>
                        <View>
                            <Image source={CLImages.COMPANY_LOGO} style={styles.logoIcon} />
                        </View>
                    </View>

                    <View style={styles.debitcardView}>
                        <SingleText
                            value={CLStrings.Spendinglimit}
                        />
                    </View>

                </View>

                {/* Bottom white container */}
                <View style={styles.bottomContainer}>
                    <View style={{ flex: 1 }}>
                        <ModuleView
                            Icon={CLImages.SPEND_LIMIT_TRANSPARENT}
                            IconStyle={{ width: 16, height: 16 }}
                            MainLabel={CLStrings.Spendinglimit_Label}
                            Switch={false}
                            sendData={() => { }}
                        />

                        <View style={styles.CurrencyViewContainer}>
                            <CurrencyView />
                            <SingleText
                                value={spendLimit}
                                valueStyles={{ color: CLColors.BLACK }}
                            />
                        </View>

                        <SingleText
                            value={CLStrings.Spendinglimit_note}
                            valueStyles={styles.spendingnotes_txt}
                        />

                        <View style={styles.defaultSpendoptions_container}>
                            {DefaultSpendOption.map((data, i) => {
                                return (
                                    <Pressable key={i} onPress={() => setspendLimit(data)}>
                                        <View style={styles.defuleSpendoptionBox}>
                                            <Text style={styles.defaultSpend_txt}>S$ <Text></Text>{data}</Text>
                                        </View>
                                    </Pressable>
                                )
                            }
                            )}
                        </View>
                    </View>

                    <Button
                        ButtonName={CLStrings.SAVE}
                        disabled={spendLimit == null ? true : false}
                        onPress={Set_Weekly_Limit}
                        manageButtonCoor={spendLimit == null ? CLColors.DISABLE : CLColors.GREEN}
                    />

                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    defaultSpend_txt: {
        color: CLColors.GREEN,
        fontSize: 12,
        fontWeight: 'bold'
    },
    defuleSpendoptionBox: {
        width: DEVICE.DEVICE_WIDTH / 4,
        height: 40,
        backgroundColor: CLColors.GREEN7,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32
    },
    defaultSpendoptions_container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    spendingnotes_txt: {
        color: CLColors.GRAY,
        fontSize: 13,
        marginTop: 12,
    },
    CurrencyViewContainer: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: CLColors.GRAY2,
        paddingBottom: 14
    },
    logoIcon: {
        width: 36,
        height: 25,
        resizeMode: 'contain'
    },
    backIcon: {
        width: 36,
        height: 25,
        resizeMode: 'contain',
        tintColor: CLColors.WHITE,
        right: hp(1)
    },
    container: {
        flex: 1,
        backgroundColor: CLColors.PRIMARY_BG,
    },
    topContainer: {
        flex: hp('16%'),
        backgroundColor: CLColors.PRIMARY_BG,
        paddingHorizontal: 24
    },
    debit_logo_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(1),
    },
    debitcardView: {
        marginTop: hp(3.2)
    },
    bottomContainer: {
        flex: hp('85%'),
        backgroundColor: CLColors.WHITE,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 24
    }
});

export default connect(null, { Submit })(SpendingLimit)