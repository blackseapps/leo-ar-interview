import React, {useEffect} from 'react';
import {View, StatusBar, StyleSheet, Image} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import * as Images from '../constants/Images';
import {hp, wp} from '../constants/Dimensions';

const SplashSScreen = props => {
  const navigation = useNavigation();

  const {Colors} = useTheme();
  const styles = Styles(Colors);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeStack');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image source={Images.Logo} style={styles.logo} />
    </View>
  );
};

export default SplashSScreen;

const Styles = Colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: wp(126),
      height: hp(54),
      resizeMode: 'contain',
    },
  });
