import React, { memo } from 'react';
import { Card, Text, Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import Icon from '@react-native-vector-icons/material-design-icons';

const UserList = ({
  item,
  toggleExpand,
  expandedId,
  theme,
  createUserRef,
  setModalAction,
  setIsOpenModal,
  resetPasswordRef,
}) => {
  const isExpanded = expandedId === item.id;

  return (
    <Card
      style={[
        styles.userCard,
        { backgroundColor: theme?.dark ? '#1e1e1e' : '#F9FAFB' },
      ]}
      onPress={() => toggleExpand(item.id)}
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

      {isExpanded && (
        <View style={styles.buttonRow}>
          <Button
            mode="contained"
            icon="reload"
            style={styles.actionButton}
            textColor="#000"
            onPress={() => {
              resetPasswordRef.id = item.id;
              setModalAction('resetpassword');
              setIsOpenModal(true);
            }}
          >
            Reset Password
          </Button>
          <Button
            mode="contained"
            icon="account-edit"
            style={styles.actionButton}
            textColor="#000"
            onPress={() => {
              createUserRef.id = item.id;
              createUserRef.userName = item.user_name;
              // createUserRef.role = item.role;
              createUserRef.contact = item.contact_info;
              // console.log(
              //   'OKKKKKKKKKK',
              //   item.id,
              //   item.user_name,
              //   createUserRef,
              // );
              setModalAction('update');
              setIsOpenModal(true);
            }}
          >
            Update User
          </Button>
        </View>
      )}
    </Card>
  );
};

export default memo(
  UserList,
  (prev, next) =>
    (prev.expandedId === prev.item.id) === (next.expandedId === next.item.id),
);

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
