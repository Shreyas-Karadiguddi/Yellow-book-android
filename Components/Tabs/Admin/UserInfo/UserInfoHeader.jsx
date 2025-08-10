import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserInfoHeader = ({ isUserInfo, filter, setFilter }) => {
  return (
    <>
      <Card style={styles.headerCard}>
        <Card.Content>
          <Text style={styles.employeeName}>{isUserInfo?.user_name}</Text>
          <View style={styles.statsRow}>
            <View style={[styles.statsBox, styles.statsBoxWithBorder]}>
              <Icon name="check-circle-outline" size={16} color="#4CAF50" />
              <Text style={styles.statsTitle}>Closed</Text>
              <Text style={styles.statsValue}>{isUserInfo?.closed}</Text>
            </View>
            <View style={[styles.statsBox, styles.statsBoxWithBorder]}>
              <Icon name="alert-circle-outline" size={16} color="#F44336" />
              <Text style={styles.statsTitle}>Pending</Text>
              <Text style={styles.statsValue}>{isUserInfo?.pending}</Text>
            </View>
            <View style={styles.statsBox}>
              <Icon
                name="clipboard-account-outline"
                size={16}
                color="#2196F3"
              />
              <Text style={styles.statsTitle}>Assigned</Text>
              <Text style={styles.statsValue}>{isUserInfo?.total}</Text>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Searchbar
        placeholder="Search"
        inputStyle={{
          fontSize: 16,
          padding: 0,
          paddingBottom: 12,
        }}
        style={{
          height: 45,
          backgroundColor: '#eee6ff',
          borderRadius: 25,
        }}
        value={filter}
        onChangeText={text => setFilter(text)}
      />
    </>
  );
};
export default UserInfoHeader;

const styles = StyleSheet.create({
  headerCard: {
    marginBottom: 16,
    borderRadius: 10,
    // elevation: 2,
  },
  employeeName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: -8,
    color: 'black',
  },
  callButton: {
    borderRadius: 20,
    elevation: 3,
    marginLeft: 8,
    marginTop: -4,
  },
  statsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  statsBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  statsBoxWithBorder: {
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  statsTitle: {
    fontSize: 14,
    color: '#555',
    color: 'black',
    fontWeight: 'bold',
  },
  statsValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
