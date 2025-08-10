import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Col, Row } from 'react-native-easy-grid';
import { GeneralDropDown } from '../../../General/DropDown';

const ROLES = [
  { label: 'admin', value: 'admin' },
  { label: 'user', value: 'user' },
];

const UpdateUser = ({ updateUserRef }) => {
  const [role, setRole] = useState(updateUserRef.role);

  useEffect(() => {
    updateUserRef.role = role;
  }, [role]);

  return (
    <View style={{ flex: 1, gap: 6, marginTop: 8 }}>
      <Row>
        <Col>
          <TextInput
            label="Name"
            mode="outlined"
            defaultValue={updateUserRef.userName}
            onChangeText={text => (updateUserRef.userName = text)}
            style={{ height: 50 }}
            autoFocus
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Contact"
            mode="outlined"
            defaultValue={updateUserRef.contact}
            onChangeText={text => (updateUserRef.contact = text)}
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
export default UpdateUser;
