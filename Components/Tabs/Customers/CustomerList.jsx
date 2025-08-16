import React, { memo } from 'react';
import { Card, Text } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../General/Colors';

const CustomerList = ({
  index,
  item,
  toggleExpand,
  expandedId,
  theme,
  setModalAction,
  setIsOpenModal,
  updateCustomerRef,
  deleteCustomerRef,
  customerInfoRef,
  assignedCustomerRef,
}) => {
  const isExpanded = expandedId === item.id;

  return (
    <Card
      style={[
        styles.userCard,
        { backgroundColor: theme?.dark ? '#1e1e1e' : '#F9FAFB' },
      ]}
      onPress={() => toggleExpand(item.id, index)}
    >
      <View style={styles.userRow}>
        <View style={styles.iconWrapper}>
          <Icon name="account-circle" size={24} color={Colors.blue.dark} />
        </View>
        <Text style={[styles.userName, { color: theme.colors.primary }]}>
          {item.customer_name}
        </Text>
        <Icon
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={24}
          color={theme.colors.primary}
        />
      </View>

      {isExpanded && (
        <View style={styles.iconRow}>
          <TouchableOpacity
            style={styles.actionContainer}
            onPress={() => {
              setIsOpenModal(true);
              setModalAction('update');
              updateCustomerRef.id = item.id;
              updateCustomerRef.customer_name = item.customer_name;
              updateCustomerRef.customer_address = item.customer_address;
              updateCustomerRef.customer_area = item.customer_area;
              updateCustomerRef.customer_city = item.customer_city;
              updateCustomerRef.customer_state = item.customer_state;
              updateCustomerRef.pincode = item.pincode;
              updateCustomerRef.contact_no = item.contact_no;
              updateCustomerRef.email = item.email;
              updateCustomerRef.pending_amount = item.pending_amount;
              updateCustomerRef.is_active = item.is_active;
              updateCustomerRef.response = item.response;
              updateCustomerRef.user_id = item.user_id;
              updateCustomerRef.user_name = item.user_name;
            }}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#F0F0F0' }]}>
              <Icon name="account-edit" size={26} color={Colors.blue.dark}/>
            </View>
            <Text style={styles.actionLabel}>Update</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionContainer}
            onPress={() => {
              setIsOpenModal(true);
              setModalAction('info');
              customerInfoRef.customer_name = item.customer_name;
              customerInfoRef.customer_address = item.customer_address;
              customerInfoRef.email = item.email;
              customerInfoRef.contact_no = item.contact_no;
              customerInfoRef.pending_amount = item.pending_amount;
              customerInfoRef.is_active = item.is_active;
              customerInfoRef.user_name = item.user_name;
              customerInfoRef.last_contact_date = item.last_contact_date;
            }}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#F0F0F0' }]}>
              <Icon name="information-outline" size={26} color={Colors.orange.dark} />
            </View>
            <Text style={styles.actionLabel}>Info</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionContainer}
            onPress={() => {
              setIsOpenModal(true);
              setModalAction('delete');
              deleteCustomerRef.id = item.id;
              deleteCustomerRef.customer_name = item.customer_name;
              deleteCustomerRef.index = index;
            }}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#F0F0F0' }]}>
              <Icon name="delete-outline" size={26} color={Colors.red.dark}/>
            </View>
            <Text style={styles.actionLabel}>Delete</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionContainer}
            onPress={() => {
              setIsOpenModal(true);
              setModalAction('assign');
              assignedCustomerRef.customer_id = item.id;
              assignedCustomerRef.user_id = item.user_id;
              assignedCustomerRef.user_name = item.user_name;
            }}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#F0F0F0' }]}>
              <Icon name="account-plus-outline" size={26} color={Colors.green.dark}/>
            </View>
            <Text style={styles.actionLabel}>Assign</Text>
          </TouchableOpacity>
        </View>
      )}
    </Card>
  );
};

export default memo(CustomerList, (prevProps, nextProps) => {
  return (
    prevProps.item === nextProps.item &&
    prevProps.index === nextProps.index &&
    (prevProps.expandedId === prevProps.item.id) ===
      (nextProps.expandedId === nextProps.item.id)
  );
});

const styles = StyleSheet.create({
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
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  actionContainer: {
    alignItems: 'center',
    flex: 1,
  },
  actionIcon: {
    padding: 8,
    borderRadius: 50,
    marginBottom: 4,
  },
  actionLabel: {
    fontSize: 12,
    color: '#555',
    fontWeight: 'bold',
  },
});
