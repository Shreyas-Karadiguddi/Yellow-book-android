import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { Button, Card, Text, useTheme } from 'react-native-paper';
import Icon from '@react-native-vector-icons/material-design-icons';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const sampleUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  { id: 3, name: 'Alex Johnson', email: 'alex@example.com', role: 'Viewer' },
  { id: 4, name: 'Sam Lee', email: 'sam@example.com', role: 'Admin' },
];

const Users = () => {
  const [expandedId, setExpandedId] = useState(null);
  const theme = useTheme();

  const toggleExpand = id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerRow}>
          <Button
            icon="plus"
            style={styles.profileIconWrapper}
            textColor="#2962FF"
          >
            CREATE
          </Button>
        </View>

        {sampleUsers.map(user => (
          <Card
            key={user.id}
            style={[
              styles.userCard,
              { backgroundColor: theme.dark ? '#1e1e1e' : '#F9FAFB' },
            ]}
            onPress={() => toggleExpand(user.id)}
          >
            <View style={styles.userRow}>
              <View style={styles.iconWrapper}>
                <Icon name="account-circle" size={24} color="#2962FF" />
              </View>
              <Text style={[styles.userName, { color: theme.colors.primary }]}>
                {user.name}
              </Text>
              <Icon
                name={expandedId === user.id ? 'chevron-up' : 'chevron-down'}
                size={24}
                color={theme.colors.primary}
              />
            </View>

            {expandedId === user.id && (
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
        ))}
      </ScrollView>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  profileIconWrapper: {
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 30,
    elevation: 3,
    color: '#2962FF',
    marginRight: 5,
  },
  userCard: {
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    padding: 12,
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
