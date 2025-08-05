import { View, StyleSheet } from 'react-native';
import { Skeleton } from '@rneui/base';
import { memo } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export const Loader = ({ type, color = 'black' }) => {
  if (type === 'skeleton') {
    return (
      <View style={{ padding: 10 }}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.card}>
            <Skeleton
              circle
              width={40}
              height={40}
              animation="wave"
              LinearGradientComponent={LinearGradient}
            />
            <Skeleton
              width={200}
              height={20}
              style={{ marginLeft: 15 }}
              animation="wave"
              LinearGradientComponent={LinearGradient}
            />
            <Skeleton
              width={20}
              height={20}
              style={{ marginLeft: 'auto' }}
              animation="wave"
              LinearGradientComponent={LinearGradient}
            />
          </View>
        ))}
      </View>
    );
  }

  return type === 'ActivityIndicator' ? (
    <ActivityIndicator size={18} color={color} />
  ) : null;
};

export default memo(Loader, (prev, next) => {
  return prev.type === next.type;
});

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f5ff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
});
