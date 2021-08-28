import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {hp, wp} from '../../../constants/Dimensions';
import {useNavigation} from '@react-navigation/native';
import HeaderButton from '../HeaderButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useTheme} from '@react-navigation/native';
import {FontSize} from '../../../constants/Sizes';

const CancelButton = props => {
  const {iconColor, color, style} = props;

  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <TouchableOpacity style={[styles.containerStyle, style]}>
      <Text style={styles.text}>Cancel</Text>
    </TouchableOpacity>
  );
};

export default CancelButton;

const Styles = Colors =>
  StyleSheet.create({
    containerStyle: {
      height: '100%',
      width: wp(80),
      paddingLeft: wp(13),
      justifyContent: 'center',
    },
    text: {
      fontSize: FontSize(12),
      color: Colors.primaryText,
    },
  });
