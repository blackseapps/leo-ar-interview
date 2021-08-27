import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const HeaderButtonsWrapperRight = props => {
  const {children} = props;
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return <View style={styles.containerRight}>{children}</View>;
};

export const HeaderButtonsWrapperLeft = props => {
  const {children} = props;
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  return <View style={styles.containerLeft}>{children}</View>;
};

const Styles = Colors =>
  StyleSheet.create({
    containerRight: {
      flexDirection: 'row',
      alignContent: 'center',
    },
    containerLeft: {
      flexDirection: 'row',
      alignContent: 'center',
    },
  });
