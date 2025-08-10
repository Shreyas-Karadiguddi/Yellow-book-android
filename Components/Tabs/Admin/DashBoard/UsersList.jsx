import { FlashList } from '@shopify/flash-list';
import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, useColorScheme } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Card, Text, useTheme, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as usersActions from '../../../../actions/users_api';
import Loader from '../../../General/Loader';
import DashBoardHeader from './DashBoardHeader';

export default function UsersList({ navigation, setUserId }) {
  const theme = useTheme();
  const isDark = useColorScheme() === 'dark';

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('');

  const {
    data: isUsers,
    refetch: refetchUsers,
    isFetching: isFetchingUsers,
  } = usersActions.useGetAllUsers();

  useFocusEffect(
    useCallback(() => {
      refetchUsers();
    }, []),
  );

  useEffect(() => {
    console.log('UsersList mounted');
    return () => console.log('UsersList unmounted');
  }, []);

  useEffect(() => {
    if (isUsers) {
      setUsers(isUsers);
    }
  }, [isUsers]);

  useEffect(() => {
    setIsLoading(true);
    const delayDebounce = setTimeout(() => {
      if (filter) {
        setUsers(
          isUsers.filter(item =>
            item.user_name.toLowerCase().includes(filter.toLowerCase()),
          ),
        );
      } else {
        setUsers(isUsers);
      }
      setIsLoading(false);
    }, 300);

    return () => {
      clearTimeout(delayDebounce);
    };
  }, [filter, isUsers]);

  const renderItem = ({ item }) => {
    return (
      <Card
        style={[
          styles.userCard,
          { backgroundColor: isDark ? '#1e1e1e' : '#F9FAFB' },
        ]}
        onPress={() => {
          console.log('CLICK');
          navigation.navigate('User Info');
          setUserId(item.id);
        }}
      >
        <View style={styles.userRow}>
          <View style={styles.iconWrapper}>
            <Icon name="account-circle" size={24} color="#2962FF" />
          </View>
          <Text style={[styles.userName, { color: theme.colors.primary }]}>
            {item.user_name}
          </Text>
          <Icon name="chevron-right" size={24} color="#2962FF" />
        </View>
      </Card>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={styles.container}>
        <DashBoardHeader filter={filter} setFilter={setFilter} theme={theme} />

        <View style={styles.dividerWrapper}>
          <Divider />
        </View>

        {isFetchingUsers || isLoading ? (
          <Loader type="skeleton" />
        ) : (
          <FlashList
            data={users}
            renderItem={renderItem}
            estimatedItemSize={50}
            ListEmptyComponent={
              <View style={{ marginTop: '50%' }}>
                <Text style={{ textAlign: 'center', marginTop: 40 }}>
                  No users found
                </Text>
              </View>
            }
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    padding: 5,
    flex: 1,
  },
  userCard: {
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    padding: 16,
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
  dividerWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 6,
    marginVertical: 8,
    borderRadius: 1,
    overflow: 'hidden',
  },
});
