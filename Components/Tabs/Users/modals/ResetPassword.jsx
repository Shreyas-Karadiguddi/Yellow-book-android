import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Col, Row } from 'react-native-easy-grid';

const ResetPassword = ({ resetPasswordRef }) => {
  return (
    <View style={{ flex: 1 }}>
      <Row>
        <Col>
          <TextInput
            label="Old Password"
            defaultValue={resetPasswordRef.oldPassword}
            onChangeText={text => (resetPasswordRef.userName = text)}
            style={{ height: 50 }}
            autoFocus
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="New Password"
            defaultValue={resetPasswordRef.password}
            onChangeText={text => (resetPasswordRef.newPassword = text)}
            style={{ height: 50 }}
            secureTextEntry
            right={<TextInput.Icon icon="eye" size={20} />}
          />
        </Col>
      </Row>
    </View>
  );
};
export default ResetPassword;
