import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AdminDash() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const [activeTab, setActiveTab] = useState('Users');

  const theme = {
    background: isDark ? '#121212' : '#F5F5F5',
    text: isDark ? '#FFFFFF' : '#000000',
    card: isDark ? '#1E1E1E' : '#FFFFFF',
    border: isDark ? '#444' : '#DDD',
    accent: '#4F46E5',
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Users':
        return (
          <>
            <Text style={[styles.header, { color: theme.text }]}>
              Admin Dashboard
            </Text>
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
            <View
              style={[styles.employeeContainer, { borderColor: theme.border }]}
            >
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <View
                    key={i}
                    style={[
                      styles.employeeBox,
                      {
                        backgroundColor: theme.card,
                        borderColor: theme.border,
                      },
                    ]}
                  >
                    <Text style={[styles.employeeText, { color: theme.text }]}>
                      Employee
                    </Text>
                    {i === 0 && (
                      <Text
                        style={[styles.employeeData, { color: theme.text }]}
                      >
                        Data regarding the status ...
                      </Text>
                    )}
                  </View>
                ))}
            </View>
          </>
        );
      case 'Customers':
        return (
          <View style={styles.center}>
            <Text style={{ color: theme.text }}>Customers</Text>
          </View>
        );
      case 'Settings':
        return (
          <View style={styles.center}>
            <Text style={{ color: theme.text }}>Settings</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.background }]}
    >
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <ScrollView
        style={[styles.container]}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {renderContent()}
      </ScrollView>

      {/* Custom Bottom Nav */}
      <View
        style={[
          styles.bottomNav,
          {
            backgroundColor: isDark ? '#1e1e1e' : '#f9f9f9',
            borderTopColor: theme.border,
          },
        ]}
      >
        {['Users', 'Customers', 'Settings'].map(tab => {
          const icon =
            tab === 'Users'
              ? 'group'
              : tab === 'Customers'
              ? 'people'
              : 'settings';
          const focused = activeTab === tab;

          return (
            <TouchableOpacity
              key={tab}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab)}
            >
              <Icon
                name={icon}
                size={24}
                color={focused ? theme.accent : theme.text}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? theme.accent : theme.text,
                }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
  },
  employeeBox: {
    padding: 14,
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 10,
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
