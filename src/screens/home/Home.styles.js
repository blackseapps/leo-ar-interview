import {StyleSheet} from 'react-native';
import {hp} from '../../constants/Dimensions';

const HomeStyles = Colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    content: {
      flex: 1,
      width: '100%',

      alignItems: 'center',
    },
  });

export default HomeStyles;
