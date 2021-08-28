import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {wp, hp} from '../../constants/Dimensions';
import PropTypes from 'prop-types';
import {FontSize} from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';

const ButtonBaseComponent = props => {
  const {
    title,
    containerStyle,
    textStyle,
    onPress,
    textProps,
    buttonProps,
    IconLeft,
    IconRight,
  } = props;

  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, containerStyle]}
      {...buttonProps}>
      <Image source={IconLeft} style={styles.IconLeft} />

      <Text color="white" {...textProps} style={[styles.text, textStyle]}>
        {title}
      </Text>

      <Image source={IconRight} style={styles.IconRight} />
    </TouchableOpacity>
  );
};

ButtonBaseComponent.defaultProps = {
  title: 'Button',
  onPress: () => {},
};

ButtonBaseComponent.propTypes = {
  title: PropTypes.string,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

export default ButtonBaseComponent;

const Styles = Colors =>
  StyleSheet.create({
    button: {
      width: wp(75),
      height: hp(35),
      borderRadius: hp(30),
      justifyContent: 'space-around',
      alignItems: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      backgroundColor: Colors.secondary,
    },
    text: {
      fontSize: FontSize(14),
    
      color: Colors.primaryText,
    },
    IconRight: {
      width: hp(26),
      height: hp(26),
      resizeMode: 'contain',
    },
    IconLeft: {
      width: hp(29),
      height: hp(29),
      resizeMode: 'contain',
    },
  });
