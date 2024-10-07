import React from 'react';
import {Image, Platform, StyleSheet} from 'react-native';
import {Images} from '../constants/assets';
import {hasDynamicIsland, hasNotch} from 'react-native-device-info';

const SellaTabIcon = ({focused, routeName}) => {
  let icon;
  if (routeName === 'home' && !focused) {
    icon = Images.homeIcon;
  } else if (routeName === 'home' && focused) {
    icon = Images.homeFocusIcon;
  } else if (routeName === 'insurances' && !focused) {
    icon = Images.insurancesIcon;
  } else if (routeName === 'insurances' && focused) {
    icon = Images.insurancesFocusIcon;
  } else if (routeName === 'loans' && !focused) {
    icon = Images.loansIcon;
  } else if (routeName === 'loans' && focused) {
    icon = Images.loansFocusIcon;
  } else if (routeName === 'shop' && !focused) {
    icon = Images.shopIcon;
  } else if (routeName === 'shop' && focused) {
    icon = Images.shopFocusIcon;
  } else if (routeName === 'hamburger' && !focused) {
    icon = Images.hamburgerIcon;
  } else if (routeName === 'hamburger' && focused) {
    icon = Images.hamburgerFocusIcon;
  } else if (routeName === 'conti' && !focused) {
    icon = Images.contiIcon;
  } else if (routeName === 'conti' && focused) {
    icon = Images.contiFocusIcon;
  }

  return <Image source={icon} style={styles.iconStyle} />;
};

const styles = StyleSheet.create({
  iconStyle: {
    marginTop:
      Platform.OS === 'ios' ? (hasDynamicIsland() || hasNotch() ? 10 : 10) : 30,
    marginBottom:
      Platform.OS === 'ios'
        ? hasDynamicIsland()
          ? 15
          : hasNotch()
          ? 15
          : 20
        : 25,
    height: 30,
    width: 30,
  },
});

export default SellaTabIcon;
