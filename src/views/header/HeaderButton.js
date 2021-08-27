import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {hp, wp} from '../../constants/Dimensions';
import {useTheme} from '@react-navigation/native';

const HeaderButton = props => {
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  const {
    IconFontFamily,
    iconName,
    iconColor = Colors.secondary,
    color = Colors.tertiary,
    containerStyle,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <IconFontFamily size={hp(16)} color={iconColor} name={iconName} />
    </TouchableOpacity>
  );
};

export default HeaderButton;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      height: wp(32),
      width: wp(32),
      marginLeft: wp(10),
      justifyContent: 'center',
      alignItems: 'center',

    },
  });
