import React, { memo } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';

const DashBoardHeader = ({ filter, setFilter, theme }) => {
  return (
    <>
      <View style={styles.statsRow}>
        <TouchableOpacity
          style={styles.shadowCard}
          onPress={() => navigation.navigate('User Info')}
        >
          <Text style={styles.label}>Total Revenue</Text>
          <Text style={[styles.value, { color: theme.colors.primary }]}>
            ₹50,00,00
          </Text>
        </TouchableOpacity>

        <View style={styles.shadowCard}>
          <Text style={styles.label}>Pending Amount</Text>
          <Text style={[styles.value, { color: '#DC2626' }]}>₹3,00,000</Text>
        </View>
      </View>
      <Searchbar
        placeholder="Search"
        inputStyle={{
          fontSize: 16,
          padding: 0,
          paddingBottom: 12,
        }}
        style={styles.search}
        value={filter}
        onChangeText={text => setFilter(text)}
      />
    </>
  );
};
export default memo(DashBoardHeader, (prev, next) => {
  return prev.filter === next.filter;
});

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  shadowCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    marginHorizontal: 4,
    elevation: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 6,
    color: '#333',
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
  },
  search: {
    height: 45,
    backgroundColor: '#eee6ff',
    borderRadius: 25,
    marginTop: 10,
  },
});
