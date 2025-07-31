import React from 'react';
import { Text, View } from 'react-native';
import { Row, Col } from 'react-native-easy-grid';
import { Button, Icon, TextInput } from 'react-native-paper';

const UserHeaders = ({ setIsOpenModal, setModalAction }) => {
  return (
    <Row style={{ height: 60, alignItems: 'center' }}>
      <Col style={{ paddingHorizontal: 8, width: '70%' }}>
        <TextInput
          mode="contained"
          placeholder="Search"
          style={{ height: 40 }}
          left={<TextInput.Icon icon="filter" size={20} />}
        />
      </Col>
      <Col style={{ paddingHorizontal: 8 }}>
        <Button
          icon="plus"
          mode="contained"
          onPress={() => {
            setIsOpenModal(true);
            setModalAction('create');
          }}
        >
          CREATE
        </Button>
      </Col>
    </Row>
  );
};
export default UserHeaders;
