import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomerInfo = ({ customerInfoRef }) => {
  const infoList = [
    {
      icon: 'account',
      label: 'Name',
      value: customerInfoRef.customer_name,
      color: '#4CAF50',
    },
    {
      icon: 'home-map-marker',
      label: 'Address',
      value: customerInfoRef.customer_address,
      color: '#FF9800',
    },
    {
      icon: 'email',
      label: 'Email',
      value: customerInfoRef.email,
      color: '#E91E63',
    },
    {
      icon: 'phone',
      label: 'Contact No',
      value: customerInfoRef.contact_no,
      color: '#2196F3',
    },
    {
      icon: 'currency-inr',
      label: 'Pending Amount',
      value: customerInfoRef.pending_amount,
      color: '#9C27B0',
    },
    {
      icon: 'account-tie',
      label: 'Assigned',
      value: customerInfoRef.user_name,
      color: '#3F51B5',
    },
    {
      icon: customerInfoRef.is_active ? 'check-circle' : 'close-circle',
      label: 'Status',
      value: customerInfoRef.is_active ? 'Active' : 'Inactive',
      color: customerInfoRef.is_active ? '#4CAF50' : '#F44336',
    },
    {
      icon: 'calendar-check',
      label: 'Last Contact',
      value: customerInfoRef.last_contact_date,
      color: '#607D8B',
    },
  ];

  return (
    <View style={styles.container}>
      {infoList.map((item, index) => (
        <View key={index} style={styles.row}>
          <Icon name={item.icon} size={20} color={item.color} />
          <Text style={styles.label}>{item.label} :- </Text>
          <Text style={styles.value}>{item.value || 'Not found'}</Text>
        </View>
      ))}
    </View>
  );
};

export default CustomerInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    marginLeft: 5,
    fontWeight: '600',
    fontSize: 14,
    color: '#555',
    width: 90,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
});
