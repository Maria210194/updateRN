import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import SellaTabIcon from '../../components/SellaTabIcon';
import SellaTabLabel from '../../components/SellaTabLabel';
import SellaMainTabIcon from '../../components/SellaMainTabIcon';
import {onlyTitle} from '../headers';

// Definizione delle schermate
const LoansScreen = () => (
  <View>
    <Text>Loans Screen</Text>
  </View>
);

const InsurancesScreen = () => (
  <View>
    <Text>Insurances Screen</Text>
  </View>
);

const HomeScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);

const ContiScreen = () => (
  <View>
    <Text>Conti Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View>
    <Text>Profile Screen</Text>
  </View>
);

// Stack per ogni tab
const LoansStack = createNativeStackNavigator();
const LoansStackNavigator = () => (
  <LoansStack.Navigator>
    <LoansStack.Screen
      name="Loans"
      component={LoansScreen}
      options={onlyTitle}
    />
  </LoansStack.Navigator>
);

const InsuranceStack = createNativeStackNavigator();
const InsuranceStackNavigator = () => (
  <InsuranceStack.Navigator>
    <InsuranceStack.Screen name="Insurances" component={InsurancesScreen} />
  </InsuranceStack.Navigator>
);

const DashboardStack = createNativeStackNavigator();
const DashboardStackNavigator = () => (
  <DashboardStack.Navigator>
    <DashboardStack.Screen name="Home" component={HomeScreen} />
  </DashboardStack.Navigator>
);

const AggregatoreStack = createNativeStackNavigator();
const AggregatoreStackNavigator = () => (
  <AggregatoreStack.Navigator>
    <AggregatoreStack.Screen name="Conti" component={ContiScreen} />
  </AggregatoreStack.Navigator>
);

const ProfileStack = createNativeStackNavigator();
const ProfileStackNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);

// Configurazione delle tabs
const Tab = createBottomTabNavigator();

const tabOptions = {
  Loans: {
    screen: LoansStackNavigator,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: ({focused}) => (
        <SellaTabLabel focused={focused} routeName="loans" text={'Prestiti'} />
      ),
      tabBarIcon: ({focused}) => (
        <SellaTabIcon routeName="loans" focused={focused} />
      ),
    }),
  },
  Insurances: {
    screen: InsuranceStackNavigator,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: ({focused}) => (
        <SellaTabLabel
          focused={focused}
          routeName="insurances"
          text={'Assixcurazioni'}
        />
      ),
      tabBarIcon: ({focused}) => (
        <SellaTabIcon routeName="insurances" focused={focused} />
      ),
    }),
  },
  Home: {
    screen: DashboardStackNavigator,
    navigationOptions: {
      tabBarLabel: ({focused}) => (
        <SellaTabLabel focused={focused} routeName="home" text={'Home'} />
      ),
      tabBarIcon: ({focused}) => (
        <SellaMainTabIcon focused={focused} routeName="home" />
      ),
    },
  },
  Conti: {
    screen: AggregatoreStackNavigator,
    navigationOptions: {
      tabBarLabel: ({focused}) => (
        <SellaTabLabel focused={focused} routeName={'conti'} text={'Conti'} />
      ),
      tabBarIcon: ({focused}) => (
        <SellaTabIcon routeName="conti" focused={focused} />
      ),
    },
  },
  Profile: {
    screen: ProfileStackNavigator,
    navigationOptions: {
      tabBarLabel: ({focused}) => (
        <SellaTabLabel
          focused={focused}
          routeName={'hamburger'}
          text={'Altro'}
        />
      ),
      tabBarIcon: ({focused}) => (
        <SellaTabIcon routeName="hamburger" focused={focused} />
      ),
    },
  },
};

// Navigatore principale
const MainTabs = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="LoansTab"
      component={LoansStackNavigator}
      options={navigation => ({
        ...tabOptions.Loans.navigationOptions(navigation),
        headerShown: false,
      })}
    />
    <Tab.Screen
      name="InsurancesTab"
      component={InsuranceStackNavigator}
      options={tabOptions.Insurances.navigationOptions}
    />
    <Tab.Screen
      name="HomeTab"
      component={DashboardStackNavigator}
      options={tabOptions.Home.navigationOptions}
    />
    <Tab.Screen
      name="ContiTab"
      component={AggregatoreStackNavigator}
      options={tabOptions.Conti.navigationOptions}
    />
    <Tab.Screen
      name="ProfileTab"
      component={ProfileStackNavigator}
      options={tabOptions.Profile.navigationOptions}
    />
  </Tab.Navigator>
);

export default MainTabs;
