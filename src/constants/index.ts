import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export {default as colors} from './colors';
export {default as layout} from './layout';
export {default as routes} from './routes';
export {default as images} from './images';
export {default as spacing} from './spacing';
export {default as borderRadius} from './borderRadius';
export {default as fontSize} from './fontSize';
export {default as currencyFormat} from './currencyFormat';
export {default as ellipsis} from './ellipsis';
export {default as getNumbersOfItemFromArray} from './getNumbersOfItemFromArray';
export {
  showSuccessMessage,
  showErrorMessage,
  showInfoMessage,
} from './flashMessage';

export const fontFamily = 'Montserrat-Regular';
export const fontFamilyLight = 'Montserrat-Light';
export const fontFamilyBold = 'Montserrat-Bold';
export const fontFamilySemiBold = 'Montserrat-SemiBold';
export const placeholdersImage =
  'https://style.anu.edu.au/_anu/4/images/placeholders/person.png';

export const HP = hp;
export const WP = wp;
