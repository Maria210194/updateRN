import {Platform, StatusBar} from 'react-native';
import {hasDynamicIsland} from 'react-native-device-info';
export const onlyTitle = () => {
  return {
    headerTitle: 'Titolo di prova',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#0033CC',
      borderBottomWidth: 0,
      shadowColor: 'transparent',
      marginTop:
        Platform.OS === 'android'
          ? StatusBar.currentHeight
          : hasDynamicIsland()
          ? StatusBar.currentHeight + 30
          : StatusBar.currentHeight + 5,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
  };
};
