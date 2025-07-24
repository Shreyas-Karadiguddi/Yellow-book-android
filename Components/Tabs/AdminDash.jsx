import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  LayoutAnimation,
  Platform,
  UIManager,
  useColorScheme,
  ScrollView,
} from 'react-native';
import { Button, Card, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlashList } from '@shopify/flash-list';
import * as userActions from '../../actions/users_api';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

export default function AdminDash() {
  const theme = useTheme();
  const isDark = useColorScheme() === 'dark';

  const [expandedId, setExpandedId] = useState(null);
  const { data: users, isLoading } = userActions.getAllUsers();

  const toggleExpand = id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(prev => (prev === id ? null : id));
  };

  useEffect(() => {
    if (users) {
      console.log('Fetched users:', users);
    }
  }, [users]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.statsContainer}>
          <View
            style={[
              styles.statBox,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.outline,
              },
            ]}
          >
            <Text
              style={[styles.statLabel, { color: theme.colors.onBackground }]}
            >
              Total revenue:
            </Text>
            <Text style={[styles.statValue, { color: theme.colors.primary }]}>
              ₹50,00,000
            </Text>
          </View>
          <View
            style={[
              styles.statBox,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.outline,
              },
            ]}
          >
            <Text
              style={[styles.statLabel, { color: theme.colors.onBackground }]}
            >
              Pending Amount:
            </Text>
            <Text style={[styles.statValue, { color: '#DC2626' }]}>
              ₹3,00,000
            </Text>
          </View>
        </View>

        <FlashList
          data={users}
          estimatedItemSize={80}
          extraData={expandedId}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <Card
              key={item.id}
              style={[
                styles.userCard,
                { backgroundColor: theme.dark ? '#1e1e1e' : '#F9FAFB' },
              ]}
              onPress={() => toggleExpand(item.id)}
            >
              <View style={styles.userRow}>
                <View style={styles.iconWrapper}>
                  <Icon name="account-circle" size={24} color="#2962FF" />
                </View>
                <Text
                  style={[styles.userName, { color: theme.colors.primary }]}
                >
                  {item.user_name}
                </Text>
                <Icon
                  name={expandedId === item.id ? 'expand-less' : 'expand-more'}
                  size={24}
                  color={theme.colors.primary}
                />
              </View>

              {expandedId === item.id && (
                <View style={styles.buttonRow}>
                  <Button
                    mode="contained"
                    icon="reload"
                    style={styles.actionButton}
                    textColor="#000"
                  >
                    Reset Password
                  </Button>
                  <Button
                    mode="contained"
                    icon="account-edit"
                    style={styles.actionButton}
                    textColor="#000"
                  >
                    Update User
                  </Button>
                </View>
              )}
            </Card>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 16,
    gap: 10,
  },
  statBox: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 4,
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  profileIconWrapper: {
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 30,
    elevation: 3,
    marginRight: 5,
  },
  userCard: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    padding: 16,
    minHeight: 80,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: '#EAF1FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 10,
  },
  actionButton: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#C4B5FD',
  },
});
