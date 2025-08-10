import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Text, Divider } from 'react-native-paper';
import Loader from '../../../General/Loader';
import CustomerList from './CustomerList';
import UserInfoHeader from './UserInfoHeader';
import FeedBackModal from './FeedBackModal';

const UserInfo = ({ isUserInfo }) => {
  const [filter, setFilter] = useState('');
  const [customers, setCustomers] = useState(isUserInfo?.customers);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const delayDebounce = setTimeout(() => {
      if (filter) {
        setCustomers(
          isUserInfo.customers.filter(item =>
            item.customer_name.toLowerCase().includes(filter.toLowerCase()),
          ),
        );
      } else {
        setCustomers(isUserInfo?.customers);
      }
      setIsLoading(false);
    }, 300);

    return () => {
      clearTimeout(delayDebounce);
    };
  }, [filter, isUserInfo?.customers]);

  return (
    <View style={styles.container}>
      <UserInfoHeader
        filter={filter}
        setFilter={setFilter}
        isUserInfo={isUserInfo}
      />
      <View style={styles.dividerWrapper}>
        <Divider />
      </View>

      {isLoading ? (
        <Loader type="skeleton" />
      ) : (
        <FlashList
          data={customers || []}
          keyExtractor={item => item.customer_id.toString()}
          renderItem={({ item }) => (
            <CustomerList item={item} setIsOpenModal={setIsOpenModal} />
          )}
          estimatedItemSize={150}
          ListEmptyComponent={
            <View style={{ marginTop: '50%' }}>
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}
              >
                No customers found
              </Text>
            </View>
          }
        />
      )}
      <FeedBackModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#f5f5f5',
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

export default UserInfo;
