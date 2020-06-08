import { Dimensions , Platform } from  'react-native';
import { dimens } from '../theme';

export const constants ={
    screenWidth : Dimensions.get('window').width,
    screenHeight : Dimensions.get('window').height,
    viewPadding :  dimens.w3,
    viewPaddingH : dimens.w3,
    viewPaddingV :dimens.w3,
    isAndroid : Platform.OS == 'android'
}