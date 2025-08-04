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
            label="New Password"
            mode="outlined"
            defaultValue={resetPasswordRef.newPassword}
            onChangeText={text => (resetPasswordRef.newPassword = text)}
            style={{ height: 50 }}
            autoFocus
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Confirm Password"
            mode="outlined"
            defaultValue={resetPasswordRef.confirmPassword}
            onChangeText={text => (resetPasswordRef.confirmPassword = text)}
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
