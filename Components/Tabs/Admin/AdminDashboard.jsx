import React, { useCallback, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersList from './DashBoard/UsersList';
import UserInfo from './UserInfo/UserInfo';
import * as userActions from '../../../actions/users_api';
import { useFocusEffect } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AdminDashboard = () => {
  const [userId, setUserId] = useState();

  const { data: isUserInfo, refetch: refetchUserInfo } =
    userActions.useGetUserInfo(userId);

  useFocusEffect(
    useCallback(() => {
      if (userId) {
        refetchUserInfo();
      }
    }, [userId]),
  );

  return (
    <Stack.Navigator initialRouteName="Admin Dashboard">
      <Stack.Screen
        name="Admin Dashboard"
        options={{
          title: 'Admin Dashboard',
          headerShown: true,
        }}
      >
        {props => <UsersList {...props} setUserId={setUserId} />}
      </Stack.Screen>
      <Stack.Screen
        name="User Info"
        options={{
          title: 'User Info',
          headerBackTitleVisible: false,
        }}
      >
        {() => <UserInfo isUserInfo={isUserInfo} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AdminDashboard;
