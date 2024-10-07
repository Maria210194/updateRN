import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigator} from './src/navigators/stacks/AuthStackNavigator';
import MainTabs from './src/navigators/stacks/MainStackNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
