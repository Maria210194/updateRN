import React from 'react';
import {Platform} from 'react-native';
import {Text} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import {hasDynamicIsland} from 'react-native-device-info';

const SellaTabLabel = ({focused, routeName, text}) => {
  return (
    <Text
      style={{
        marginTop:
          Platform.OS === 'android'
            ? 0
            : Platform.OS == 'ios'
            ? hasDynamicIsland()
              ? 0
              : hasNotch()
              ? 0
              : 5
            : 5,
        marginBottom:
          Platform.OS === 'android'
            ? 5
            : Platform.OS == 'ios'
            ? hasDynamicIsland()
              ? 20
              : hasNotch()
              ? 20
              : 5
            : 5,
        color: focused ? '#0033CC' : '#646464',
        fontSize: 10,
        textAlign: 'center',
      }}>
      {text}
    </Text>
  );
};

export default SellaTabLabel;
