import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

export const COLORS = {
    primary: '#002DE3',
    secondary: '#0F1828',
    white: '#FFFFFF',
    secondaryWhite: '#F7F7FC',
    tertiaryWhite: '#fafafa',
    green: '#2CC069',
    black: '#000000',
    secondaryBlack: '#0F1828',
    gray: '#CCCCCC',
}

export const SIZES = {
    //golobal size
    base: 8,
    font: 14,
    raduis: 10,
    padding: 10,
    padding2: 12,
    padding3: 16,

    //font SIZE

    largeTitle: 0,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 22,
    body3: 20,
    body4: 18,

    //app Dimensions

    width,
    height
}

export const FONTS = {
    largeTitle: { fontFamily: 'black', fontSize: SIZES.largeTitle, lineHeight: 55},
    h1: { fontFamily: 'bold', fontSize: SIZES.h1, lineHeight: 36},
    h2: { fontFamily: 'bold', fontSize: SIZES.h2, lineHeight: 30},
    h3: { fontFamily: 'bold', fontSize: SIZES.h3, lineHeight: 22},
    h4: { fontFamily: 'bold', fontSize: SIZES.h4, lineHeight: 22},

    body1: { fontFamily: 'regular', fontSize: SIZES.body1, lineHeight: 36},
    body2: { fontFamily: 'regular', fontSize: SIZES.body2, lineHeight: 30},
    body3: { fontFamily: 'regular', fontSize: SIZES.body3, lineHeight: 22},
    body4: { fontFamily: 'regular', fontSize: SIZES.body4, lineHeight: 20},
}

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
