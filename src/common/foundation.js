import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

const currentDeviceHeight = Dimensions.get('window').height;
const iPhonePlusHeight = 763;
const scalingMultiplier = currentDeviceHeight / iPhonePlusHeight;
const currentDeviceWidth = Dimensions.get('window').width;


export const Colors = {
    purple: '#553586',
    blueViolet: '#180732',
    orange: '#ff8223',
    white: '#FFFF',
    black: '#000',
    green: '#036310',
    inputBackground: '#ECECEC',
    fade: 'rgba(181, 169, 198,0.8)',
    transparent: 'transparent',
    ofWhite: '#fcfcfc',
    gray: '#9796A1',
    opacity: '#00000044'
};



export const ScaleWidth = function (value) {
    if (typeof value === 'number') {
        return value * scalingMultiplier;
    } else {
        let valueNumber = parseFloat(value) / 100;
        return currentDeviceWidth * valueNumber;
    }
};

export const ScaleHeight = function (value) {
    if (typeof value === 'number') {
        return value * scalingMultiplier + (value - value * scalingMultiplier) / 4;
    } else {
        let valueNumber = parseFloat(value) / 100;
        return currentDeviceHeight * valueNumber;
    }
};



