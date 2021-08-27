import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {hp, wp} from '../../../constants/Dimensions';
import {useNavigation} from '@react-navigation/native';
import HeaderButton from '../HeaderButton';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {useTheme} from '@react-navigation/native';

const BackButton = props => {
  const {iconColor, color, style, onPress} = props;
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  const navigation = useNavigation();

  const onHandle = () => {
    navigation.goBack();
   
  };

  return (
    <HeaderButton
      IconFontFamily={SimpleLineIcons}
      iconName={'arrow-left'}
      color={color}
      iconColor={iconColor}
      containerStyle={[styles.containerStyle, style]}
      onPress={!!onPress ? onPress : onHandle}
    />
  );
};

export default BackButton;

const Styles = Colors =>
  StyleSheet.create({
    containerStyle: {
      height: wp(32),
      width: wp(32),
      marginLeft: wp(9),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: hp(7),
    },
  });
