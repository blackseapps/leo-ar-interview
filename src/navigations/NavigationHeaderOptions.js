import React from 'react';
import HeaderTitle from '../views/header/HeaderTitle';
import {
  _renderLeftButtons,
  _renderRightButtons,
} from '../views/header/HeaderEnum';

/**
 * Default Options for Top Header Component
 **/

export const HeaderDefaultOptions = (title = '', color, titleColor) => {
  return {
    headerTitle: props => (
      <HeaderTitle {...props} title={title} titleColor={titleColor} />
    ),
    headerTintColor: color,
    headerStyle: {
      backgroundColor: color,
      shadowColor: color,
      elevation: 0,
      shadowRadius: 0,
    },
  };
};

export const HeaderNullOptions = () => {
  return {
    headerTitle: props => null,
    headerTransparent: true,
    headerStyle: {
      elevation: 0,
      shadowRadius: 0,
    },
    headerLeft: props => null,
  };
};

/**
 *  Custom Options for Top Header Component
 **/

export const HeaderCustomOptions = (
  title = '',
  color,
  titleColor,
  leftButtons = [],
  rightButtons = [],
) => {
  return {
    headerTitle: props => (
      <HeaderTitle {...props} title={title} titleColor={titleColor} />
    ),
    headerTintColor: color,
    headerTransparent: false,
    headerStyle: {
      backgroundColor: color,
      shadowColor: color,
      elevation: 0,
      shadowRadius: 0,
      borderBottomWidth: 1,
    },
    headerLeft: props => _renderLeftButtons(leftButtons, props, color),
    headerRight: props => _renderRightButtons(rightButtons, props, color),
  };
};
