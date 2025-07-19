import React from 'react';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Components/Login/Login';
import AdminDash from './Components/Admin/AdminDash'; // Your tabbed dashboard (Users, Customers, Settings)

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="AdminDash" component={AdminDash} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </QueryClientProvider>
    </Provider>
  );
}
