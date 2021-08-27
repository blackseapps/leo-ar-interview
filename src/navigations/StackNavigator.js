import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashSScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

const RootStack = createStackNavigator();
const HomeStack = createStackNavigator();

function StackNavigator() {
  return (
    <RootStack.Navigator
      initialRouteName={'SplashScreen'}
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: true,
        cardStyle: {backgroundColor: 'transparent'},
      }}>
      <RootStack.Screen name="SplashScreen" component={SplashSScreen} />
   
      <RootStack.Screen name="HomeStack" component={StackHome} />
    </RootStack.Navigator>
  );
}

export function StackHome() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default StackNavigator;

