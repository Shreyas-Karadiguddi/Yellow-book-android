import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  UIManager,
  Platform,
  useColorScheme,
  Animated,
  Easing,
} from 'react-native';
import { Button, Card, Text, useTheme } from 'react-native-paper';
import { FlashList } from '@shopify/flash-list';
import Icon from '@react-native-vector-icons/material-design-icons';
import * as userActions from '../../actions/users_api';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function AdminDash() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const theme = useTheme();

  const [expandedId, setExpandedId] = useState(null);
  const { data: users, isLoading } = userActions.getAllUsers();

  useEffect(() => {
    if (users) {
      console.log('Fetched users:', users);
    }
    console.log('Expanded ID:', expandedId);
  }, [users, expandedId]);

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
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

      <FlashList
        data={users}
        estimatedItemSize={80}
        extraData={expandedId}
        overrideItemLayout={() => null}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <ExpandableCard
            item={item}
            isExpanded={expandedId === item.id}
            onToggle={() =>
              setExpandedId(prev => (prev === item.id ? null : item.id))
            }
            theme={theme}
          />
        )}
      />
    </SafeAreaView>
  );
}

// ✅ ExpandableCard with Animated Expansion
const ExpandableCard = ({ item, isExpanded, onToggle, theme }) => {
  const animatedHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: isExpanded ? 80 : 0, // height in px
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [isExpanded]);

  return (
    <Card
      key={`${item.id}-${isExpanded}`}
      style={[
        styles.userCard,
        { backgroundColor: theme.dark ? '#1e1e1e' : '#F9FAFB' },
      ]}
      onPress={onToggle}
    >
      <View style={styles.userRow}>
        <View style={styles.iconWrapper}>
          <Icon name="account-circle" size={24} color="#2962FF" />
        </View>
        <Text style={[styles.userName, { color: theme.colors.primary }]}>
          {item.user_name}
        </Text>
        <Icon
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color={theme.colors.primary}
        />
      </View>

      <Animated.View style={{ height: animatedHeight, overflow: 'hidden' }}>
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
      </Animated.View>
    </Card>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
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
  listContent: {
    padding: 16,
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
