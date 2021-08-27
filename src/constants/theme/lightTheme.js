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
    primaryText: '#49495C',

    //White Colors in Project
    white: '#FFFFFF',

    //Black Colors in Project
    black: '#000000',

    //Red Colors in Project
    red: '#880808',

    //Other Colors
    borderColor: '#F5EFEF',
    placeHolder: '#8C8CA4',
    notificationStatus: '#FF7F00',
  },
  Images: {},
};

export default LightTheme;
