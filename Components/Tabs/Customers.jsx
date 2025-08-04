import React, { useState } from 'react';
import {
  View,
  FlatList,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import { Card, Text, Button, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const Customers = () => {
  const theme = useTheme();
  const [expandedId, setExpandedId] = useState(null);

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

  const toggleExpand = id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(prev => (prev === id ? null : id));
  };

  const renderItem = ({ item }) => {
    const isExpanded = expandedId === item.id;
    return (
      <Card
        key={item.id}
        style={{
          borderRadius: 12,
          marginBottom: 12,
          elevation: 2,
          padding: 12,
          backgroundColor: theme.dark ? '#1e1e1e' : '#F9FAFB',
          width: '100%',
          maxWidth: 600,
          alignSelf: 'center',
        }}
        onPress={() => toggleExpand(item.id)}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 25,
              backgroundColor: '#EAF1FF',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 12,
            }}
          >
            <Icon name="account-circle" size={24} color="#2962FF" />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              flex: 1,
              color: theme.colors.primary,
            }}
          >
            {item.name}
          </Text>
          <Icon
            name={isExpanded ? 'expand-less' : 'expand-more'}
            size={24}
            color={theme.colors.primary}
          />
        </View>

        {isExpanded && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 16,
              gap: 10,
            }}
          >
            <Button
              mode="contained"
              icon="account-edit"
              style={{
                flex: 1,
                borderRadius: 20,
                backgroundColor: '#C4B5FD',
              }}
              textColor="#000"
            >
              Edit
            </Button>
            <Button
              mode="contained"
              icon="delete"
              style={{
                flex: 1,
                borderRadius: 20,
                backgroundColor: '#f87171',
              }}
              textColor="#fff"
            >
              Delete
            </Button>
          </View>
        )}
      </Card>
    );
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Header row with CREATE button */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginBottom: 16,
          paddingHorizontal: 4,
        }}
      >
        <Button
          icon="plus"
          style={{
            backgroundColor: '#fff',
            padding: 3,
            borderRadius: 30,
            elevation: 3,
            marginRight: 5,
          }}
          textColor="#2962FF"
        >
          CREATE
        </Button>
      </View>

      <FlatList
        data={customers}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Customers;
