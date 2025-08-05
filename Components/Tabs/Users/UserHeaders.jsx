import React, { memo } from 'react';
import { Row, Col } from 'react-native-easy-grid';
import { Button, Searchbar } from 'react-native-paper';

const UserHeaders = ({ setIsOpenModal, setModalAction, filter, setFilter }) => {
  return (
    <Row style={{ height: 60, alignItems: 'center' }}>
      <Col style={{ paddingHorizontal: 8, width: '70%' }}>
        <Searchbar
          placeholder="Search"
          inputStyle={{
            fontSize: 16,
            padding: 0,
            paddingBottom: 12,
          }}
          style={{
            height: 45,
            backgroundColor: '#eee6ff',
            borderRadius: 25,
          }}
          contentStyle={{
            height: 45,
          }}
          value={filter}
          onChangeText={text => setFilter(text)}
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
export default memo(UserHeaders, (prev, next) => {
  return prev.filter === next.filter;
});
