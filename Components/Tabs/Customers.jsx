import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { List, Text, Divider } from 'react-native-paper';

const Customers = () => {
  const renderItem = ({ item }) => (
    <View>
      <List.Item
        title={item.name}
        description={`Phone: ${item.phone}\nEmail: ${item.email}`}
        left={() => <List.Icon icon="account" />}
        onPress={() => console.log(`Customer ID: ${item.id}`)}
      />
      <Divider />
    </View>
  );

  const customers = [
    {
      id: 1,
      name: 'Alice Johnson',
      phone: '123-456-7890',
      email: 'alice@example.com',
    },
    {
      id: 2,
      name: 'Bob Smith',
      phone: '987-654-3210',
      email: 'bob@example.com',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Customers</Text>

      {customers?.length > 0 ? (
        <FlatList
          data={customers}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.empty}>No customers found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  empty: {
    marginTop: 20,
    textAlign: 'center',
    color: '#888',
  },
});

export default Customers;
