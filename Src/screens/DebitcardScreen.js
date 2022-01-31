/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, ScrollView, Switch, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CLColors from '../res/CLColors';
import CLStrings from '../res/CLStrings';
import CLImages from '../res/CLImages';
import SingleText from '../components/singleText'
import DoubleTextView from '../components/doubleTextView';
import Progressbar from '../components/Progressbar'
import ModuleView from '../components/moduleView';
import { DEVICE, GET_DEVICE_TYPE } from '../utility';
import { DummyData } from '../utility/DummyData';
import { connect, useSelector } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CurrencyView from '../components/currencyView'

const DebitcardScreen = ({ navigation }) => {

    const [cardnumberView, setCardnumberView] = useState(false) // Show / Hide card number
    const [showProgressbar, setshowProgressbar] = useState(false) // Show / Hide Progressbar
    const SpendLimit = useSelector(state => state.Data.SpendLimit)

    const calculateSpendAmount_percentage = (Spendamount, SpendLimit) => { // Calculate spend percentage

        const planValue = SpendLimit.replace(/\,/g, '') // remove comma 
        return (Spendamount / planValue) * 100
    }

    const getData = (i, value) => { // Get switch value 
        if (i == 1) {
            setshowProgressbar(value)
        }
    }

    return (
        <SafeAreaView style={styles.container} edges={['top']} >
            <StatusBar
                animated={true}
                barStyle={'light-content'}
            />

            {/* Top container for Debit card & Available balance */}
            <View style={styles.topContainer}>

                {/* Debit */}
                <View style={styles.debit_logo_container}>
                    <View style={styles.debitcardView}>
                        <SingleText
                            value={CLStrings.DebitCard}
                        />
                    </View>
                    <View>
                        <Image source={CLImages.COMPANY_LOGO} style={styles.LogoSize} />
                    </View>
                </View>

                {/* Available balance */}
                <SingleText
                    value={CLStrings.Availablebalance}
                    valueStyles={styles.Availablebalance_txt}
                />

                {/* Total Amount */}
                <View style={styles.TotalAmount_Container}>
                    <CurrencyView />
                    <SingleText
                        value={CLStrings.TotalAmount}
                    />
                </View>

            </View>

            {/* Bottom white container */}
            <View style={styles.bottomContainer}>
                {/* Card View*/}
                <View style={{ top: hp('-10%'), marginBottom: hp('-10%') }}>

                    {/* Hide cardnumber container */}
                    <TouchableOpacity onPress={() => setCardnumberView(!cardnumberView)}>
                        <View style={styles.hideContainer}>
                            <Image source={!cardnumberView ? CLImages.Close_eye : CLImages.Open_eye} style={styles.eyeIcon} />
                            <SingleText
                                value={!cardnumberView ? CLStrings.HideCardnumber : CLStrings.ShowCardnumber}
                                valueStyles={styles.hideContext}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* Card Main container */}
                    <Pressable onPress={() => navigation.navigate('SpendingLimit')}>
                        <View style={styles.cardContainer}>

                            <View style={{ alignSelf: 'flex-end' }}>
                                <Image source={CLImages.COMPANY_FULL_LOGO} style={styles.fullLogoSize} />
                            </View>

                            <View style={styles.cardDetailsContainer}>
                                <SingleText
                                    value={CLStrings.UserName}
                                    valueStyles={styles.cardHolderNametxt}
                                />
                            </View>

                            <View style={[styles.cardDetailsContainer]}>
                                <View style={styles.cardDigitContainer}>
                                    {DummyData.CardNumbers.map((number, i) => {
                                        return (
                                            <SingleText
                                                key={i}
                                                value={(!cardnumberView) || (cardnumberView && (i == (DummyData.CardNumbers.length - 1))) ? number : CLStrings.SecurecardNumber}
                                                valueStyles={[styles.cardDigit_txt, {
                                                    fontSize: (!cardnumberView) || (cardnumberView && (i == (DummyData.CardNumbers.length - 1))) ? hp(1.8) : hp(3.9),
                                                    bottom: (!cardnumberView) || (cardnumberView && (i == (DummyData.CardNumbers.length - 1))) ? 0 : hp(2.6),
                                                    height: hp(4.5),
                                                    paddingRight: hp(3),
                                                }]}
                                            />
                                        )
                                    })}
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', }}>
                                <View>
                                    <DoubleTextView
                                        value1={'Thru:'}
                                        value2={'12/20'}
                                        isSecure={false}
                                    />
                                </View>
                                <View style={{ marginLeft: hp(3.2) }}>
                                    <DoubleTextView
                                        value1={'CVV:'}
                                        value2={'456'}
                                        isSecure={cardnumberView}
                                    />
                                </View>
                            </View>

                            <View style={{ alignSelf: 'flex-end' }}>
                                <Image source={CLImages.VISA} style={styles.VISAIcon} />
                            </View>

                        </View>
                    </Pressable>

                    {/* ProgressBar */}
                    {showProgressbar &&
                        <View style={{ marginTop: hp(2.5) }}>
                            <View style={styles.ProgressBarContainer}>
                                <SingleText
                                    value={CLStrings.SpendlimitLabel}
                                    valueStyles={styles.progressBarlabel}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <SingleText
                                        value={`$${DummyData.SpendedMoney}`}
                                        valueStyles={styles.Spendamounttxt}
                                    />
                                    <View style={styles.sperater}></View>
                                    <SingleText
                                        value={SpendLimit}
                                        valueStyles={styles.maxSpendlimittxt}
                                    />
                                </View>
                            </View>
                            {SpendLimit != null &&
                                <Progressbar
                                    progress={calculateSpendAmount_percentage(DummyData.SpendedMoney, SpendLimit)}
                                    height={30}
                                    manageProgressUI={(DummyData.SpendedMoney == SpendLimit) ? true : false}
                                />
                            }
                        </View>
                    }
                </View>

                <ScrollView contentContainerStyle={{ paddingBottom: hp(5), }} showsVerticalScrollIndicator={false}>
                    {DummyData.ModulesList.map((data, i) => {
                        return (
                            <ModuleView
                                Icon={data.Icon}
                                MainLabel={data.MainLabel}
                                discription={data.discription}
                                Switch={data.showswitch}
                                sendData={getData}
                                keys={i}
                                key={i}
                            />
                        )
                    })}
                </ScrollView>
            </View>




        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    sperater: {
        width: 1.5,
        height: 12,
        backgroundColor: CLColors.GRAY,
        marginHorizontal: 5,
    },
    maxSpendlimittxt: {
        color: CLColors.GRAY2,
        fontSize: hp(1.7),
        fontWeight: '400',
    },
    Spendamounttxt: {
        color: CLColors.GREEN,
        fontSize: hp(1.7),
        fontWeight: '400',
    },
    progressBarlabel: {
        color: CLColors.BLACK,
        fontSize: hp(1.7),
        fontWeight: '400',
    },
    ProgressBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp(0.5)
    },
    VISAIcon: {
        width: hp(5.9),
        height: hp(2),
        resizeMode: 'contain'
    },
    cardHolderNametxt: {
        fontSize: hp(2.6),
        letterSpacing: 0.53
    },
    fullLogoSize: {
        width: hp(7.8),
        height: hp(2.5),
        resizeMode: 'contain'
    },
    hideContext: {
        color: CLColors.GREEN,
        fontSize: hp(1.6),
        marginLeft: hp(0.6)
    },
    eyeIcon: {
        width: hp(1.6),
        height: hp(1.6),
        resizeMode: 'contain'
    },
    TotalAmount_Container: {
        flexDirection: 'row',
        marginTop: hp(1.3),
        alignItems: 'center',
    },
    LogoSize: {
        width: wp(6),
        height: wp(6),
        resizeMode: 'contain'
    },
    Availablebalance_txt: {
        fontSize: hp(1.9),
        marginTop: hp(2.8),
        fontWeight: '500',
    },
    container: {
        flex: 1,
        backgroundColor: CLColors.PRIMARY_BG,
    },
    topContainer: {
        height: hp('25%'),
        backgroundColor: CLColors.PRIMARY_BG,
        paddingHorizontal: hp(2.4)
    },
    debit_logo_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(1),
    },
    debitcardView: {
        marginTop: hp(1.5)
    },
    hideContainer: {
        borderTopRightRadius: hp(0.6),
        borderTopLeftRadius: hp(0.6),
        bottom: hp(-1.2),
        flexDirection: 'row',
        backgroundColor: CLColors.WHITE,
        alignItems: 'center',
        paddingTop: hp(0.8),
        paddingBottom: hp(1.8),
        paddingHorizontal: hp(1.6),
        justifyContent: 'flex-end',
        alignSelf: 'flex-end'
    },
    debitcard_txt: {
        color: CLColors.WHITE,
        fontSize: 24,
        fontWeight: 'bold'
    },
    cardContainer: {
        backgroundColor: CLColors.GREEN,
        padding: hp(2.4),
        borderRadius: hp(0.8),
    },
    cardDetailsContainer: {
        paddingTop: hp(2.4),
    },
    cardDigitContainer: {
        flexDirection: 'row',
    },
    cardDigit_txt: {
        fontSize: 14,
        letterSpacing: 3.46
    },
    bottomContainer: {
        flex: hp('75%'),
        backgroundColor: CLColors.WHITE,
        borderTopLeftRadius: hp(2.4),
        borderTopRightRadius: hp(2.4),
        paddingHorizontal: hp(2.4)
    }
})

export default connect(null, null)(DebitcardScreen)
