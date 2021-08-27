import {Platform, UIManager} from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';


export const configOSAndroidIOS = () => {
  if (Platform.OS === 'ios') {
    KeyboardManager.setEnable(true);
    KeyboardManager.setEnableDebugging(false);
    KeyboardManager.setKeyboardDistanceFromTextField(10);
    KeyboardManager.setEnableAutoToolbar(true);
    KeyboardManager.setToolbarDoneBarButtonItemText('Bitti');
    KeyboardManager.setToolbarPreviousNextButtonEnable(false);
    KeyboardManager.setShouldShowToolbarPlaceholder(false);
    KeyboardManager.setOverrideKeyboardAppearance(false);
    KeyboardManager.setShouldResignOnTouchOutside(true);
    KeyboardManager.resignFirstResponder();
  }

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
};

export default configOSAndroidIOS;
