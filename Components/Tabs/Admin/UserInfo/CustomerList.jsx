import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomerList = ({ item, setIsOpenModal }) => {
  return (
    <Card style={styles.customerCard}>
      <Card.Content>
        <View style={styles.cardInnerContent}>
          <View style={styles.headerRow}>
            <View style={{ flex: 1 }}>
              <View style={styles.rowWithIcon}>
                <Icon name="account" size={16} color="#333" />
                <Text style={styles.customerName}>{item.customer_name}</Text>
              </View>
              <View style={styles.contactInfo}>
                <Icon name="calendar-clock" size={14} color="#555" />
                <Text style={styles.label}>Last contact: </Text>
                <Text style={styles.contactDate}>
                  {item.last_contact_date || 'Not found'}
                </Text>
              </View>
            </View>
            <IconButton
              icon="phone"
              size={18}
              iconColor="white"
              containerColor="#66BB6A"
              style={styles.callButton}
              onPress={() => {
                Linking.openURL(`tel:${item.contact_no || '9999999999'}`);
                setIsOpenModal(true);
              }}
            />
            <IconButton
              icon="message-text-outline"
              size={18}
              iconColor="white"
              containerColor="#42A5F5"
              style={styles.callButton}
              onPress={() => {
                setIsOpenModal(true);
              }}
            />
          </View>

          <View style={styles.infoRow}>
            <View style={[styles.infoBox, styles.infoBoxWithBorder]}>
              <Icon name="flag-checkered" size={16} color="#999" />
              <Text style={styles.infoLabel}>State</Text>
              <Text style={styles.infoValue}>
                {item.is_active ? 'Active' : 'Closed'}
              </Text>
            </View>
            <View style={[styles.infoBox, styles.infoBoxWithBorder]}>
              <Icon name="cash" size={16} color="#999" />
              <Text style={styles.infoLabel}>Pending Amt</Text>
              <Text style={styles.infoValue}>{item.pending_amount || 0.0}</Text>
            </View>
            <View style={styles.infoBox}>
              <Icon name="calendar-plus" size={16} color="#999" />
              <Text style={styles.infoLabel}>Next follow-up</Text>
              <Text style={styles.infoValue}>
                {item.next_follow_up || 'Not set'}
              </Text>
            </View>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default CustomerList;

const styles = StyleSheet.create({
  callButton: {
    borderRadius: 20,
    elevation: 3,
    marginLeft: 8,
    marginTop: -4,
  },
  customerCard: {
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: 'white',
  },
  cardInnerContent: {
    paddingHorizontal: 8,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  customerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
    color: 'black',
  },
  label: {
    fontSize: 13,
    color: '#444',
    marginLeft: 4,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactDate: {
    fontSize: 13,
    color: '#444',
    fontWeight: 'bold',
    marginLeft: 2,
  },
  infoRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  infoBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  infoBoxWithBorder: {
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
    fontWeight: 'bold',
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: 'bold',
  },
  rowWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
