import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { List, Switch, Divider, Text, useTheme } from 'react-native-paper';

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const theme = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <List.Section>
        <List.Subheader>General</List.Subheader>

        <List.Item
          title="Dark Mode"
          left={() => <List.Icon icon="theme-light-dark" />}
          right={() => (
            <Switch
              value={isDarkMode}
              onValueChange={() => setIsDarkMode(!isDarkMode)}
            />
          )}
        />

        <List.Item
          title="Notifications"
          left={() => <List.Icon icon="bell" />}
          right={() => (
            <Switch
              value={notifications}
              onValueChange={() => setNotifications(!notifications)}
            />
          )}
        />
      </List.Section>

      <Divider />

      <List.Section>
        <List.Subheader>Account</List.Subheader>

        <List.Item
          title="Profile"
          description="View and edit profile"
          left={() => <List.Icon icon="account" />}
          onPress={() => console.log('Navigate to Profile')}
        />

        <List.Item
          title="Change Password"
          left={() => <List.Icon icon="lock" />}
          onPress={() => console.log('Navigate to Change Password')}
        />
      </List.Section>

      <Divider />

      <List.Item
        title="Logout"
        left={() => <List.Icon icon="logout" />}
        onPress={() => console.log('Logging out')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Settings;
