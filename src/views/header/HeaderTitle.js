import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fonts from '../../constants/Fonts';
import {FontSize} from '../../constants/Sizes';
import {useTheme} from '@react-navigation/native';

const HeaderTitle = props => {
  const {title, titleColor} = props;
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color: titleColor}]}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: FontSize(15),
      fontFamily: Fonts.medium,
      textAlign: 'center',
      color: Colors.TextColorPrimary,
    },
  });
