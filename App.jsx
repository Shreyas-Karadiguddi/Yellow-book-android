import React from 'react';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from './redux/store';
import { AuthProvider } from './Components/General/AuthProvider';

const queryClient = new QueryClient();

export default function App() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <AuthProvider />
        </PaperProvider>
      </QueryClientProvider>
    </Provider>
  );
}
