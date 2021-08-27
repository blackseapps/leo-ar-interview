import React from 'react';
import {LogBox} from 'react-native';
import Route from './src/Route';
import 'react-native-gesture-handler';
import configOSAndroidIOS from './src/utils/master/ConfigOSAndroidIOS';

configOSAndroidIOS();

LogBox.ignoreAllLogs();

const App = () => {
  return <Route />;
};

export default App;
