import React from 'react';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { store } from './redux/store';
import { AuthProvider } from './Components/General/AuthProvider';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <PaperProvider>
            <AlertNotificationRoot>
              <AuthProvider />
            </AlertNotificationRoot>
          </PaperProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </Provider>
  );
}
