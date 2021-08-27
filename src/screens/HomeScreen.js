import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@react-navigation/native';
import {HeaderCustomOptions} from '../navigations/NavigationHeaderOptions';
import {hp, wp} from '../constants/Dimensions';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const styles = Styles(Colors);

  navigation.setOptions(
    HeaderCustomOptions(
      'Choose Music',
      Colors.primary,
      Colors.secondary,
      [],
      [],
    ),
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
    </View>
  );
};

export default HomeScreen;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary,
    },
    content: {
      width: '100%',
      alignItems: 'center',
    },
    maskOval: {
      marginTop: hp(-35),
      zIndex: -1,
    },
  });
