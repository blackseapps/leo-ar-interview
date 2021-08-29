import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
import {useHeaderHeight} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SafeArea from 'react-native-safe-area';

const SCREEN_WIDTH = 375;
const SCREEN_HEIGHT = 812;

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const wp = (dimension, orientation, isFullScreen = false) => {
  if (orientation !== undefined) {
    if (orientation.isPortrait === false) {
      if (isFullScreen)
        dimension = scaleWH(SCREEN_WIDTH, SCREEN_HEIGHT, dimension);
      else
        dimension = scaleWH(
          SCREEN_WIDTH,
          orientation.screenSafeHeight,
          dimension,
        );
    }
  }

  return wp2dp((dimension / SCREEN_WIDTH) * 100 + '%');
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const hp = dimension => {
  return hp2dp((dimension / SCREEN_HEIGHT) * 100 + '%');
};

/**
 *
 * @param {*} width
 * @param {*} height
 * @param {*} dimension
 * @returns
 */

const scaleWH = (width, height, dimension) => {
  return (height * dimension) / width;
};

export const useOrientation = () => {
  const [screenInfo, setScreenInfo] = useState(Dimensions.get('screen'));
  const [screenSafeHeight, setScreenSafeHeight] = useState(375);

  let _tempHeight = 0;

  useEffect(() => {
    const onChange = result => {
      setScreenInfo(result.screen);

      SafeArea.getSafeAreaInsetsForRootView().then(value => {
        const isPortrait = result.screen.height > result.screen.width;

        if (isPortrait) _tempHeight = SCREEN_WIDTH;
        else
          _tempHeight =
            result.screen.width -
            (value.safeAreaInsets.left + value.safeAreaInsets.right);

        setScreenSafeHeight(_tempHeight);
      });
    };

    const addEventListener = Dimensions.addEventListener('change', onChange);

    return () => addEventListener?.remove();
  }, [screenSafeHeight]);

  return {
    ...screenInfo,
    isPortrait: screenInfo.height > screenInfo.width,
    screenSafeHeight: screenSafeHeight,
  };
};
