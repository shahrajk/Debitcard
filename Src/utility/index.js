import { Platform, Dimensions } from 'react-native';
var { height, width } = Dimensions.get("window");

export const DEVICE = {
    DEVICE_HEIGHT: height,
    DEVICE_WIDTH: width
}

export const GET_DEVICE_TYPE = Platform.OS == 'android' ? 'ANDROID' : 'IOS';