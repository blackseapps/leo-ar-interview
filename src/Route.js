import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigations/StackNavigator';
import {navigationRef} from './navigations/RootNavigation';
import DarkTheme from './constants/theme/darkTheme';
import LightTheme from './constants/theme/lightTheme';

const Route = () => {
  const [themeMode, setThemeMode] = useState('light');

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={themeMode === 'dark' ? DarkTheme : LightTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Route;
