import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DeleteCustomer = ({ deleteCustomerRef }) => {
  return (
    <View style={styles.container}>
      <Icon name="alert-outline" size={50} color="#d32f2f" />
      <Text style={styles.title}>{deleteCustomerRef.customer_name}</Text>
      <Text style={styles.message}>
        Are you sure you want to delete this customer
      </Text>
    </View>
  );
};
export default DeleteCustomer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  message: {
    textAlign: 'center',
    color: '#555',
    marginTop: 6,
    fontWeight: 'bold',
  },
});
