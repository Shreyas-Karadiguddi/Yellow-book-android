import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as userActions from '../../../../actions/users_api';
import { GeneralDropDown } from '../../../General/DropDown';

const AssignCustomer = ({ assignedCustomerRef }) => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();
  const { data: isUsers, refetch: refetchUsers } = userActions.useGetAllUsers();

  useEffect(() => {
    refetchUsers();
  }, []);

  useEffect(() => {
    if (userId) {
      const user = users.find(user => user.value === userId);
      assignedCustomerRef.new_user_name = user.label;
      assignedCustomerRef.user_id = user.value;
    }
  }, [userId]);

  useEffect(() => {
    if (isUsers) {
      setUsers(
        isUsers.map(item => ({
          label: item.user_name,
          value: item.id,
        })),
      );
    }
  }, [isUsers]);

  return (
    <View style={styles.container}>
      <View style={styles.assignedRow}>
        <Icon name="account-tie" size={24} color="#4CAF50" />
        <Text style={styles.assignedText}>
          Assigned to:{' '}
          <Text style={styles.userName}>
            {assignedCustomerRef.user_name || 'Not Assigned'}
          </Text>
        </Text>
      </View>

      <View style={styles.dropdownRow}>
        <Icon name="account-switch" size={22} color="#2196F3" />
        <View style={{ flex: 1 }}>
          <GeneralDropDown
            data={users}
            value={userId}
            setValue={setUserId}
            placeholder="Reassign customer"
            height={200}
          />
        </View>
      </View>
    </View>
  );
};

export default AssignCustomer;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    marginTop: 15,
  },
  assignedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  assignedText: {
    marginLeft: 8,
    fontSize: 15,
    color: '#555',
  },
  userName: {
    fontWeight: 'bold',
    color: '#222',
  },
  dropdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
