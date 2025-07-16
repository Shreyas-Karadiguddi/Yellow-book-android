import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { PaperProvider } from 'react-native-paper'
import { QueryClient, QueryClientProvider } from 'react-query'
import { store } from './redux/store';

const queryClient = new QueryClient()

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PaperProvider>
          <View style={styles.container}>
            <Text>Hello welcome to Yellow book test apk</Text>
          </View>
        </PaperProvider>
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
