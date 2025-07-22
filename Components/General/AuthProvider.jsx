import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Users from '../Tabs/Users';
import AdminDash from '../Tabs/AdminDash';
import Settings from '../Tabs/Settings';
import Customers from '../Tabs/Customers';
import LoginScreen from '../Login/Login';
import { useSelector } from 'react-redux';

const Tabs = createBottomTabNavigator();

const protectRoutes = role => {
  switch (role) {
    case 'admin':
      return (
        <Tabs.Navigator
          initialRouteName="Admin Dashboard"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Admin Dashboard':
                  iconName = 'home';
                  break;
                case 'Users':
                  iconName = 'group';
                  break;
                case 'Customers':
                  iconName = 'people';
                  break;
                case 'Settings':
                  iconName = 'settings';
                  break;
                default:
                  iconName = 'circle';
              }

              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#007aff',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tabs.Screen name="Admin Dashboard" component={AdminDash} />
          <Tabs.Screen name="Users" component={Users} />
          <Tabs.Screen name="Customers" component={Customers} />
          <Tabs.Screen name="Settings" component={Settings} />
        </Tabs.Navigator>
      );
  }
};

export const AuthProvider = () => {
  const { token, role } = useSelector(state => state.reducer);
  if (!token) {
    return <LoginScreen />;
  }
  return <NavigationContainer>{protectRoutes(role)}</NavigationContainer>;
};
