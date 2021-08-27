import * as React from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function isFocused() {
  return navigationRef.current?.isFocused();
}

export function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function reset(name, params) {
  navigationRef.current?.reset({
    index: 1,
    routes: [
      {
        name: name,
        params: params,
      },
    ],
  });
}

export function navigateRoute(name, params, route) {
  navigationRef.current?.navigate(name, params, route);
}

export function goBack() {
  navigationRef.current?.goBack();
}
