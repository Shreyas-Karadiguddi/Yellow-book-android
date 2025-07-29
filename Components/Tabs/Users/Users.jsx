import React, { useCallback, useState } from 'react';
import {
  View,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import * as userActions from '../../../actions/users_api';
import UserList from './UserList';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Users = () => {
  const theme = useTheme();
  const [expandedId, setExpandedId] = useState(null);

  const { data: isUserData, refetch: refetchUsers } =
    userActions.useGetAllUsers();

  useFocusEffect(
    useCallback(() => {
      refetchUsers();
      return () => {};
    }, []),
  );

  const toggleExpand = id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(id);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
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
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
