import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
import {useHeaderHeight} from '@react-navigation/stack';

const SCREEN_WIDTH = 375;
const SCREEN_HEIGHT = 812;

/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const wp = (dimension, isPortrait = null, isFullScreen = false) => {
  if (isPortrait !== null)
    if (!isPortrait) {
      if (isFullScreen)
        dimension = scaleWH(SCREEN_WIDTH, SCREEN_HEIGHT, dimension);
      else dimension = scaleWH(SCREEN_WIDTH, 700, dimension);
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

  const headerHeight = useHeaderHeight();

  useEffect(() => {
    const onChange = result => {
      setScreenInfo(result.screen);
    };
    console.log(headerHeight);
    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  return {
    ...screenInfo,
    isPortrait: screenInfo.height > screenInfo.width,
    headerHeight: headerHeight,
  };
};
