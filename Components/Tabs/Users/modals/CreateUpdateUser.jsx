import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Col, Row } from 'react-native-easy-grid';

const CreateUpdateUser = ({ createUserRef }) => {
  return (
    <View style={{ flex: 1 }}>
      <Row>
        <Col>
          <TextInput
            label="Name"
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
            label="Role"
            defaultValue={createUserRef.role}
            onChangeText={text => (createUserRef.role = text)}
            style={{ height: 50 }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Contact"
            defaultValue={createUserRef.contact}
            onChangeText={text => (createUserRef.contact = text)}
            style={{ height: 50 }}
          />
        </Col>
      </Row>
    </View>
  );
};
export default CreateUpdateUser;
