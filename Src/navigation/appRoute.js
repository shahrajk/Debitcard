import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DebitCardScreen from '../screens/DebitcardScreen'
import SpendingLimit from '../screens/SpendingLimit'


const Stack = createNativeStackNavigator();

//screens which is open from home screen
function MainStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gesturesEnabled: false,
            }}>
            <Stack.Screen name="DebitCardScreen" component={DebitCardScreen} />
            <Stack.Screen name="SpendingLimit" component={SpendingLimit} />
        </Stack.Navigator>
    );
}
function AppNavigator() {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <MainStack />
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

export default AppNavigator;
