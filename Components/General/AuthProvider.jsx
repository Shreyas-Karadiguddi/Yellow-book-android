import React from 'react';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import Users from '../Tabs/Users/Users';
import AdminDashboard from '../Tabs/Admin/AdminDashboard';
import Settings from '../Tabs/Settings/Settings';
import Customers from '../Tabs/Customers/Customers';
import LoginScreen from '../Login/Login';
import { Colors } from './Colors';

const Tabs = createBottomTabNavigator();

// Combine Navigation and Paper themes
const CombinedDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
  },
};

const CombinedDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#121212', // Optional override
  },
};

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
                case 'User master':
                  iconName = 'group';
                  break;
                case 'Customer master':
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
            tabBarActiveTintColor: '#C4B5FD',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tabs.Screen
            name="Admin Dashboard"
            component={AdminDashboard}
            options={{ headerShown: false }}
          />
          <Tabs.Screen name="User master" component={Users} />
          <Tabs.Screen name="Customer master" component={Customers} />
          <Tabs.Screen name="Settings" component={Settings} />
        </Tabs.Navigator>
      );
  }
};

export const AuthProvider = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { token, role } = useSelector(state => state.reducer);

  const theme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;

  if (!token) {
    return <LoginScreen />;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        {protectRoutes(role)}
      </NavigationContainer>
    </PaperProvider>
  );
};
