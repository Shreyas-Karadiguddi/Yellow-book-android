import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { PORT, DEVHOST } from '@env';
import { store } from './redux/store';
import { AuthProvider } from './Components/General/AuthProvider';

const queryClient = new QueryClient();
export const API = {
  URL: "http://100.0.0.0:8085/api"
}

export default function App() {
  const apiUrl = useSelector((state) => state.reducer.apiUrl)

  useEffect(() => {
    if (apiUrl) {

      API.URL = __DEV__ ? `http://${DEVHOST}:${PORT}/api` : apiUrl
      console.log("DEV", __DEV__, apiUrl, API.URL)
    }
  }, [apiUrl])

  return (
    // <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <PaperProvider>
          <AlertNotificationRoot>
            <AuthProvider />
          </AlertNotificationRoot>
        </PaperProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
    // </Provider>
  );
}
