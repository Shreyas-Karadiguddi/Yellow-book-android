import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SettingsScreen() {
  const items = [
    { icon: <Icon name="account-edit-outline" size={28} color="#2962FF" />, label: 'Edit Profile' },
    { icon: <Icon name="refresh-circle" size={28} color="#00BFA5" />, label: 'Reset Password' },
    { icon: <Ionicons name="call-outline" size={28} color="#FF9800" />, label: 'Call Logs' },
    { icon: <Ionicons name="people-outline" size={28} color="#3F51B5" />, label: 'User Logs' },
    { icon: <Ionicons name="moon-outline" size={28} color="#4FC3F7" />, label: 'Dark Theme' },
    { icon: <Ionicons name="log-out-outline" size={28} color="#FF4C4C" />, label: 'Logout' },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={[styles.card, styles.profileCard]}>
        <View style={styles.profileHeader}>
          <Ionicons name="person-circle-outline" size={60} color="#FF8C42" />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Jabbar Patel</Text>
            <Text style={styles.profileRole}>Software Developer</Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statsBox}>
            <Ionicons name="checkmark-circle-outline" size={20} color="#4CAF50" />
            <Text style={styles.statsNumber}>1</Text>
            <Text style={styles.statsLabel}>Closed</Text>
          </View>
          <View style={styles.statsBox}>
            <Ionicons name="briefcase-outline" size={20} color="#2196F3" />
            <Text style={styles.statsNumber}>2</Text>
            <Text style={styles.statsLabel}>Assigned</Text>
          </View>
          <View style={styles.statsBox}>
            <Ionicons name="time-outline" size={20} color="#FF9800" />
            <Text style={styles.statsNumber}>3</Text>
            <Text style={styles.statsLabel}>Pending</Text>
          </View>
        </View>
      </View>
      <View style={styles.grid}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={styles.actionCard}>
            <View style={styles.iconWrapper}>{item.icon}</View>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8FA',
    padding: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6, 
  },
  profileCard: {
    flexDirection: 'column',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileInfo: {
    marginLeft: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileRole: {
    fontSize: 14,
    color: '#999',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  statsBox: {
    flex: 1,
    alignItems: 'center',
  },
  statsNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  statsLabel: {
    fontSize: 12,
    color: '#999',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-between',
  },
  actionCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15, 
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6, 
  },
  iconWrapper: {
    backgroundColor: '#F8F8F8',
    borderRadius: 50,
    padding: 12,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});
