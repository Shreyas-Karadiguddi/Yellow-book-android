import React, { memo } from 'react';
import { Card, Text } from 'react-native-paper';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../General/Colors';

const UserList = ({
  item,
  toggleExpand,
  expandedId,
  theme,
  setModalAction,
  setIsOpenModal,
  resetPasswordRef,
  updateUserRef,
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
          <Icon name="account-circle" size={24} color={Colors.blue.dark} />
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
        <View style={styles.iconRow}>
          <TouchableOpacity
            style={styles.actionContainer}
            onPress={() => {
              resetPasswordRef.id = item.id;
              setModalAction('resetpassword');
              setIsOpenModal(true);
            }}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#F0F0F0' }]}>
              <Icon name="lock-reset" size={26} color={Colors.orange.dark}/>
            </View>
            <Text style={styles.actionLabel}>Reset Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionContainer}
            onPress={() => {
              updateUserRef.id = item.id;
              updateUserRef.userName = item.user_name;
              updateUserRef.role = item.role;
              updateUserRef.contact = item.contact_info;
              setModalAction('update');
              setIsOpenModal(true);
            }}
          >
            <View style={[styles.actionIcon, { backgroundColor: '#F0F0F0' }]}>
              <Icon name="account-edit" size={26} color={Colors.green.dark} />
            </View>
            <Text style={styles.actionLabel}>Update</Text>
          </TouchableOpacity>
        </View>
      )}
    </Card>
  );
};

export default memo(UserList, (prev, next) => {
  return (
    (prev.expandedId === prev.item.id) === (next.expandedId === next.item.id)
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
