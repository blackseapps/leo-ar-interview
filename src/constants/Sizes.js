import {Platform} from 'react-native';
import {wp, hp} from './Dimensions';

/**
 * [EN]
 *
 * With the responsive library used in the experiments,
 *  it was decided to use hp on the android side and wp on the IOS side in the fonts.
 *
 * [TR]
 *
 * Projelerde kullanılan responsive kütüphane ile fontlarda
 * android tarafında hp, IOS tarafında wp kullanılmasına karar verildi.
 *
 * @param {*} size
 * @returns
 */

export function FontSize(size) {
  return Platform.OS === 'ios' ? wp(size) : hp(size);
}
