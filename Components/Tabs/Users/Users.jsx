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

const Users = () => {
  const theme = useTheme();
  const [expandedId, setExpandedId] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalAction, setModalAction] = useState('');

  const createUserRef = useRef(CREATE_USER);

  const { data: isUserData, refetch: refetchUsers } =
    userActions.useGetAllUsers();

  const { status: isUserCreated, mutate: createUser } =
    userActions.useCreateUser();

  useFocusEffect(
    useCallback(() => {
      refetchUsers();
      return () => {};
    }, []),
  );

  useEffect(() => {
    if (isUserCreated === 'success') {
      console.log('okkk');
    } else if (isUserCreated === 'error') {
      console.log('error');
    }
  }, [isUserCreated]);

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
