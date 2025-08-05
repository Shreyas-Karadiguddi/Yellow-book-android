import React, { memo } from 'react';
import { Card, Text, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';

const CustomerList = ({
  item,
  toggleExpand,
  expandedId,
  theme,
  setModalAction,
  setIsOpenModal,
  updateCustomerRef,
}) => {
  const isExpanded = expandedId === item.id;
  <Card
    style={[
      styles.customerCard,
      { backgroundColor: theme?.dark ? '#1e1e1e' : '#F9FAFB' },
    ]}
    onPress={() => toggleExpand(item.id)}
  >
    <View style={styles.customerRow}>
      <View style={styles.iconWrapper}>
        <Icon name="account-circle" size={24} color="#2962FF" />
      </View>
      <Text style={[styles.customerName, { color: theme.colors.primary }]}>
        {item.customer_name}
      </Text>
      <Text style={[styles.customerName, { color: theme.colors.primary }]}>
        {item.contact_no}
      </Text>
      <Icon
        name={isExpanded ? 'chevron-up' : 'chevron-down'}
        size={24}
        color={theme.colors.primary}
      />
    </View>

    {isExpanded && (
      <View style={styles.buttonRow}>
        <Button
          mode="contained"
          // icon="account-details-outline" // need to change icon
          style={styles.actionButton}
          textColor="#000"
          onPress={() => {
            setModalAction('view');
            setIsOpenModal(true);
          }}
        >
          View
        </Button>
        <Button
          mode="contained"
          icon="account-edit"
          style={styles.actionButton}
          textColor="#000"
          onPress={() => {
            updateCustomerRef.customerName = item.customer_name;
            (updateCustomerRef.customerAddress = item.customerAddress),
              (updateCustomerRef.customerArea = item.customerArea);
            updateCustomerRef.customerCity = item.customerCity;
            updateCustomerRef.customerState = item.customerState;
            updateCustomerRef.pincode = item.pincode;
            updateCustomerRef.contactNo = item.contact_no;
            updateCustomerRef.userId = item.userId;
            updateCustomerRef.email = item.email;
            updateCustomerRef.lastContactDate = item.lastContactDate;
            updateCustomerRef.pendingAmount = item.pendingAmount;
            setModalAction('update');
            setIsOpenModal(true);
          }}
        >
          Update Customer
        </Button>
      </View>
    )}
  </Card>;
};

export default memo(CustomerList, (prev, next) => {
  return (
    (prev.expandedId === prev.item.id) === (next.expandedId === next.item.id)
  );
});

const styles = StyleSheet.create({
  customerCard: {
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    padding: 12,
  },
  customerRow: {
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
  customerName: {
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
