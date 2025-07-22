import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import * as userActions from '../../actions/users_api';

export default function AdminDash() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const { data: users, isLoading } = userActions.getAllUsers();

  const theme = {
    background: isDark ? '#121212' : '#F5F5F5',
    text: isDark ? '#FFFFFF' : '#000000',
    card: isDark ? '#1E1E1E' : '#FFFFFF',
    border: isDark ? '#444' : '#DDD',
    accent: '#4F46E5',
  };

  useEffect(() => {
    if (users) {
      console.log('Fetched users:', users);
    }
  }, [users]);

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      <View style={styles.statsContainer}>
        <View
          style={[
            styles.statBox,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
        >
          <Text style={[styles.statLabel, { color: theme.text }]}>
            Total revenue:
          </Text>
          <Text style={[styles.statValue, { color: theme.accent }]}>
            ₹50,00,000
          </Text>
        </View>
        <View
          style={[
            styles.statBox,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
        >
          <Text style={[styles.statLabel, { color: theme.text }]}>
            Pending Amount:
          </Text>
          <Text style={[styles.statValue, { color: '#DC2626' }]}>
            ₹3,00,000
          </Text>
        </View>
      </View>

      {/* Scrollable List */}
      <FlashList
        data={users}
        estimatedItemSize={40}
        contentContainerStyle={[
          styles.listContent,
          { borderColor: theme.border },
        ]}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: '#322F2F2',
              padding: 10,
              marginLeft: 10,
              marginRight: 10,
              borderRadius: 5,
            }}
          >
            <Text style={[styles.employeeText, { color: theme.text }]}>
              {item.user_name}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  headerContainer: {
    padding: 16,
    backgroundColor: 'transparent', // Keep background matching safe area
    borderBottomWidth: 1,
  },
  statBox: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  statLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
  },
  listContent: {
    padding: 16,
    borderTopWidth: 1,
  },
  employeeText: {
    fontSize: 16,
    paddingVertical: 8,
  },
  safeArea: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 14,
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 24,
    padding: 16,
    gap: 10,
  },
  statBox: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    marginBottom: 6,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  employeeContainer: {
    // borderWidth: 1,
    // borderRadius: 10,
    padding: 12,
  },
  employeeBox: {
    padding: 14,
    marginVertical: 6,
    // borderWidth: 1,
    // borderRadius: 10,
  },
  employeeText: {
    fontSize: 16,
    fontWeight: '500',
  },
  employeeData: {
    marginTop: 4,
    fontSize: 13,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
