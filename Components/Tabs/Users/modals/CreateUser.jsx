import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Col, Row } from 'react-native-easy-grid';
import { GeneralDropDown } from '../../../General/DropDown';

const ROLES = [
  { label: 'admin', value: 'admin' },
  { label: 'user', value: 'user' },
];

const CreateUser = ({ createUserRef }) => {
  const [role, setRole] = useState('');

  useEffect(() => {
    createUserRef.role = role;
  }, [role]);

  return (
    <View style={{ flex: 1 }}>
      <Row>
        <Col>
          <TextInput
            label="Name"
            mode="outlined"
            defaultValue={createUserRef.userName}
            onChangeText={text => (createUserRef.userName = text)}
            style={{ height: 50 }}
            autoFocus
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Password"
            mode="outlined"
            defaultValue={createUserRef.password}
            onChangeText={text => (createUserRef.password = text)}
            style={{ height: 50 }}
            secureTextEntry
            right={<TextInput.Icon icon="eye" size={20} />}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Contact"
            mode="outlined"
            defaultValue={createUserRef.contact}
            onChangeText={text => (createUserRef.contact = text)}
            style={{ height: 50 }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <GeneralDropDown
            data={ROLES}
            value={role}
            setValue={setRole}
            placeholder="Select Role"
          />
        </Col>
      </Row>
    </View>
  );
};
export default CreateUser;
