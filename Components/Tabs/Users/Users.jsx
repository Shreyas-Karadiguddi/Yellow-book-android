import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { useSelector } from 'react-redux';
import { FlashList } from '@shopify/flash-list';
import { useFocusEffect } from '@react-navigation/native';
import { Divider, useTheme } from 'react-native-paper';
import { ALERT_TYPE } from 'react-native-alert-notification';
import * as userActions from '../../../actions/users_api';
import UserHeader from './UserHeader';
import UserList from './UserList';
import UserModals from './UserModals';
import { useToastDialog } from '../../General/Notification';
import { Loader } from '../../General/Loader';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CREATE_USER = {
  userName: '',
  password: '',
  role: '',
  contact: '',
};

const UPDATE_USER = {
  id: null,
  userName: '',
  role: '',
  contact: '',
};

const RESET_PASSWORD = {
  id: null,
  newPassword: '',
  confirmPassword: '',
};

const Users = () => {
  const apiUrl = useSelector(state => state.reducer.apiUrl);
  const theme = useTheme();
  const [expandedId, setExpandedId] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalAction, setModalAction] = useState('');
  const [filter, setFilter] = useState('');
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const createUserRef = useRef(CREATE_USER);
  const updateUserRef = useRef(UPDATE_USER);
  const resetPasswordRef = useRef(RESET_PASSWORD);

  const {
    data: isUserData,
    refetch: refetchUsers,
    isFetching: isFetchingUsers,
  } = userActions.useGetAllUsers();

  const {
    status: isUserCreated,
    mutate: createUser,
    error: isCreateUserError,
  } = userActions.useCreateUser();

  const { status: isUserResetPassword, mutate: resetPassword } =
    userActions.resetPasswordByAdmin();

  const {
    status: isUpdateUser,
    mutate: updateUser,
    error: isUpdateUserError,
  } = userActions.useUpdateUser();

  useFocusEffect(
    useCallback(() => {
      refetchUsers();
    }, []),
  );

  useEffect(() => {
    if (isUserData) {
      setUserList(isUserData);
    }
  }, [isUserData]);

  useEffect(() => {
    if (isUserCreated === 'success') {
      refetchUsers();
      setIsOpenModal(false);
      setIsLoading(false);
      useToastDialog(
        ALERT_TYPE.SUCCESS,
        'CREATE USER',
        'User created successfully',
      );
    } else if (isUserCreated === 'error') {
      setIsOpenModal(false);
      setIsLoading(false);
      if (isCreateUserError?.response.data) {
        useToastDialog(
          ALERT_TYPE.DANGER,
          'CREATE USER',
          isCreateUserError?.response.data,
        );
        return;
      }
      useToastDialog(ALERT_TYPE.DANGER, 'CREATE USER', 'Failed to create User');
    }
  }, [isUserCreated]);

  useEffect(() => {
    if (isUpdateUser === 'success') {
      refetchUsers();
      setIsOpenModal(false);
      setModalAction('');
      useToastDialog(
        ALERT_TYPE.SUCCESS,
        'UPDATE USER',
        'User updated successfully',
      );
    } else if (isUpdateUser === 'error') {
      setIsOpenModal(false);
      setIsLoading(false);
      if (isUpdateUserError?.response.data) {
        useToastDialog(
          ALERT_TYPE.DANGER,
          'UPDATE USER',
          isUpdateUserError?.response.data,
        );
        return;
      }
      useToastDialog(
        ALERT_TYPE.DANGER,
        'UPDATE USER',
        'Failed to update user!',
      );
    }
  }, [isUpdateUser]);

  useEffect(() => {
    if (isUserResetPassword === 'success') {
      setIsOpenModal(false);
      setIsLoading(false);
      useToastDialog(
        ALERT_TYPE.SUCCESS,
        'RESET PASSWORD',
        'Password reset successfully',
      );
    } else if (isUserResetPassword === 'error') {
      setIsOpenModal(false);
      setIsLoading(false);
      useToastDialog(
        ALERT_TYPE.DANGER,
        'RESET PASSWORD',
        'Failed to reset password!',
      );
    }
  }, [isUserResetPassword]);

  useEffect(() => {
    setIsLoading(true);
    const delayDebounce = setTimeout(() => {
      if (filter) {
        setUserList(
          isUserData.filter(item =>
            item.user_name.toLowerCase().includes(filter.toLowerCase()),
          ),
        );
      } else {
        setUserList(isUserData);
      }
      setIsLoading(false);
    }, 300);

    return () => {
      clearTimeout(delayDebounce);
    };
  }, [filter, isUserData]);

  const handleActions = useCallback(() => {
    setIsLoading(true);
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
          id: updateUserRef.current.id,
          userName: updateUserRef.current.userName,
          role: updateUserRef.current.role,
          contact: updateUserRef.current.contact,
        };
        updateUser(updateUserDetails);
        break;
      case 'resetpassword':
        if (
          resetPasswordRef.current.newPassword !==
          resetPasswordRef.current.confirmPassword
        ) {
          useToastDialog(
            ALERT_TYPE.DANGER,
            'RESET PASSWORD',
            'Make sure to enter the same password in both fields',
          );
          setIsLoading(false);
          setIsOpenModal(false);
          return;
        }
        const reset = {
          id: resetPasswordRef.current.id,
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
        <UserHeader
          setIsOpenModal={setIsOpenModal}
          setModalAction={setModalAction}
          filter={filter}
          setFilter={setFilter}
        />
        <View style={styles.dividerWrapper}>
          <Divider />
        </View>
        <View style={{ flex: 1 }}>
          {isLoading || isFetchingUsers ? (
            <Loader type="skeleton" />
          ) : (
            <FlashList
              data={userList}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <UserList
                  item={item}
                  toggleExpand={toggleExpand}
                  expandedId={expandedId}
                  theme={theme}
                  setModalAction={setModalAction}
                  setIsOpenModal={setIsOpenModal}
                  resetPasswordRef={resetPasswordRef.current}
                  updateUserRef={updateUserRef.current}
                />
              )}
              extraData={expandedId}
            />
          )}
        </View>
      </View>
      <UserModals
        isLoading={isLoading}
        isOpenModal={isOpenModal}
        modalAction={modalAction}
        setIsOpenModal={setIsOpenModal}
        handleActions={handleActions}
        createUserRef={createUserRef.current}
        resetPasswordRef={resetPasswordRef.current}
        updateUserRef={updateUserRef.current}
      />
    </>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dividerWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    marginVertical: 12,
    borderRadius: 1,
    overflow: 'hidden',
  },
});
