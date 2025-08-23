import React, { useState } from 'react';
import { View } from 'react-native';
import BaseModal from '../../General/BaseModal';
import { Button, TextInput } from 'react-native-paper';

export default function ApiUrlModal({ isOpen, setIsOpen }) {
  const [url, setUrl] = useState('http://192.0.0.0:8085/api');

  const getFooter = () => {
    return (
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
        <Button
          mode="contained"
          icon={'content-save'}
          onPress={() => {
            global.API_URL = url;
            setIsOpen(false);
          }}
          //   onPress={() => dispatch({ type: 'API_URL', payload: url })}
        >
          Save
        </Button>
        <Button mode="outlined" icon={'close'} onPress={() => setIsOpen(false)}>
          Cancel
        </Button>
      </View>
    );
  };
  return (
    <BaseModal open={isOpen} title="API URL" footer={getFooter}>
      <TextInput
        label="API URL"
        value={url}
        onChangeText={setUrl}
        style={{ marginTop: 25 }}
      />
    </BaseModal>
  );
}
