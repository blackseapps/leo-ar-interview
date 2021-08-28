import {DefaultTheme} from '@react-navigation/native';

const LightTheme = {
  ...DefaultTheme,
  Colors: {
    ...DefaultTheme.colors,

    // Project First Color
    primary: '#FFFFFF',
    secondary: '#2C2C58',
    tertiary: '#8C8C91',

    //Text Colors
    primaryText: '#181818',

    //White Colors in Project
    white: '#FFFFFF',

    //Black Colors in Project
    black: '#000000',

    //Red Colors in Project
    red: '#880808',

    //Other Colors
    borderColor: '#A8A8A8',
    placeHolder: '#8C8CA4',
    notificationStatus: '#FF7F00',

    titleColor: '#1E1E1E',
    subTitleColor: '#A8A8A8',
    buttonColor: '#F1F1F1',
  },
  Images: {},
};

export default LightTheme;
