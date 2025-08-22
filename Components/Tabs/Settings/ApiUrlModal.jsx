import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import BaseModal from '../../General/BaseModal';
import { Button, TextInput } from 'react-native-paper';

export default function ApiUrlModal({ isOpen, setIsOpen }) {
  const dispatch = useDispatch();
  const apiUrl = useSelector(state => state.reducer.apiUrl);
  const [url, setUrl] = useState(apiUrl);
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
        onChangeText={text => setUrl(text)}
      />
    </BaseModal>
  );
}
