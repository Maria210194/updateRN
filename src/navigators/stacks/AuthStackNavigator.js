import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, View, Text} from 'react-native';
import {onlyTitle} from '../headers';

const AuthStack = createNativeStackNavigator();

const LoginScreen = ({navigation}) => (
  <View>
    <Text>Login Screen</Text>
    <Button
      title="Vai alla Registrazione"
      onPress={() => navigation.navigate('Register')}
    />
    <Button title="Accedi" onPress={() => navigation.replace('MainTabs')} />
  </View>
);

const RegisterScreen = ({navigation}) => (
  <View>
    <Text>Register Screen</Text>
    <Button
      title="Torna al Login"
      onPress={() => navigation.navigate('Login')}
    />
  </View>
);

export const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={onlyTitle}
    />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);
