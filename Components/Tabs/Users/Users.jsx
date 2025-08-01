import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useFocusEffect } from '@react-navigation/native';
import { Divider, useTheme } from 'react-native-paper';
import * as userActions from '../../../actions/users_api';
import UserHeaders from './UserHeaders';
import UserList from './UserList';
import UserModals from './modals/UserModals';
import { useNotification } from '../../General/Notification';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CREATE_USER = {
  id: null,
  userName: '',
  password: '',
  role: '',
  contact: '',
};

const RESET_PASSWORD = {
  oldPassword: '',
  newPassword: '',
};

const Users = () => {
  const theme = useTheme();
  const [expandedId, setExpandedId] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalAction, setModalAction] = useState('');

  const createUserRef = useRef(CREATE_USER);
  const resetPasswordRef = useRef(RESET_PASSWORD);

  const { data: isUserData, refetch: refetchUsers } =
    userActions.useGetAllUsers();

  const { status: isUserCreated, mutate: createUser } =
    userActions.useCreateUser();

  const { status: isUserResetPassword, mutate: resetPassword } =
    userActions.resetPasswordByAdmin();

  const { status: isUpdateUser, mutate: updateUser } =
    userActions.useUpdateUser();

  useFocusEffect(
    useCallback(() => {
      refetchUsers();
      return () => {};
    }, []),
  );

  useEffect(() => {
    if (isUserCreated === 'success') {
      refetchUsers();
      setIsOpenModal(false);
      setModalAction('');
      useNotification('success', 'CREATE USER', 'User created successfully');
    } else if (isUserCreated === 'error') {
      console.log('error');
    }
  }, [isUserCreated]);

  useEffect(() => {
    if (isUpdateUser === 'success') {
      refetchUsers();
      setIsOpenModal(false);
      setModalAction('');
      useNotification('success', 'UPDATE USERS', 'User updated successfully');
    } else if (isUpdateUser === 'error') {
      console.log('error');
    }
  }, [isUpdateUser]);

  useEffect(() => {
    if (isUserResetPassword === 'success') {
      setIsOpenModal(false);
      setModalAction('');
      useNotification(
        'success',
        'RESET PASSWORD',
        'Password reset successfully',
      );
    } else if (isUserResetPassword === 'error') {
      console.log('error');
    }
  }, [isUserResetPassword]);

  useEffect(() => {
    if (modalAction === 'update') {
      console.log(createUserRef.current);
    }
  }, [modalAction]);

  const handleActions = useCallback(() => {
    switch (modalAction) {
      case 'create':
        const newUser = {
          userName: createUserRef.current.userName,
          password: createUserRef.current.password,
          role: createUserRef.current.role,
          contact: createUserRef.current.contact,
        };
        createUser(newUser);
        break;
      case 'update':
        const updateUserDetails = {
          id: createUserRef.current.id,
          userName: createUserRef.current.userName,
          role: createUserRef.current.role,
          contact: createUserRef.current.contact,
        };
        updateUser(updateUserDetails);
        break;
      case 'resetpassword':
        const reset = {
          id: resetPasswordRef.current.id,
          oldPassword: resetPasswordRef.current.oldPassword,
          newPassword: resetPasswordRef.current.newPassword,
        };
        resetPassword(reset);
        break;
      default:
        break;
    }
  }, [modalAction]);

  const toggleExpand = id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(id);
  };

  return (
    <>
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <UserHeaders
          setIsOpenModal={setIsOpenModal}
          setModalAction={setModalAction}
        />
        <Divider style={{ borderBottomWidth: 0.5, marginBottom: 5 }} />
        <FlashList
          data={isUserData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <UserList
                item={item}
                toggleExpand={toggleExpand}
                expandedId={expandedId}
                theme={theme}
                createUserRef={createUserRef.current}
                setModalAction={setModalAction}
                setIsOpenModal={setIsOpenModal}
                resetPasswordRef={resetPasswordRef.current}
              />
            );
          }}
          extraData={expandedId}
        />
      </View>
      <UserModals
        isOpenModal={isOpenModal}
        modalAction={modalAction}
        setIsOpenModal={setIsOpenModal}
        createUserRef={createUserRef.current}
        handleActions={handleActions}
        resetPasswordRef={resetPasswordRef.current}
      />
    </>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
