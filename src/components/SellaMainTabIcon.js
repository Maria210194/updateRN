import React from 'react';
import {Image, Platform, View} from 'react-native';
import {Images} from '../constants/assets';
import {hasDynamicIsland} from 'react-native-device-info';
import {hasNotch} from 'react-native-device-info';

const SellaMainTabIcon = ({focused, routeName}) => {
  let icon;
  if (routeName === 'home' && !focused) {
    icon = Images.homeIcon;
  } else if (routeName === 'home' && focused) {
    icon = Images.homeFocusIcon;
  } else if (routeName === 'loans' && !focused) {
    icon = Images.loansIcon;
  } else if (routeName === 'loans' && focused) {
    icon = Images.loansFocusIcon;
  } else if (routeName === 'shop' && !focused) {
    icon = Images.shopIcon;
  } else if (routeName === 'shop' && focused) {
    icon = Images.shopFocusIcon;
  } else if (routeName === 'profile' && !focused) {
    icon = Images.profileIcon;
  } else if (routeName === 'profile' && focused) {
    icon = Images.profileFocusIcon;
  }
  return (
    <View
      style={{
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderTopRightRadius: 50 / 2,
        borderTopLeftRadius: 50 / 2,
        marginTop:
          Platform.OS === 'ios'
            ? hasDynamicIsland() || hasNotch()
              ? 0
              : 10
            : 30,
        marginBottom:
          Platform.OS === 'ios'
            ? hasDynamicIsland()
              ? 15
              : hasNotch()
              ? 15
              : 20
            : 25,
      }}>
      <Image
        source={icon}
        style={{
          width: 40,
          height: 40,
        }}
      />
    </View>
  );
};

export default SellaMainTabIcon;
