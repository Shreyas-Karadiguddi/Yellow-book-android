import React, { memo } from 'react';
import { Row, Col } from 'react-native-easy-grid';
import { Button, Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const CustomerHeader = ({
  setIsOpenModal,
  setModalAction,
  filter,
  setFilter,
  setPage,
}) => {
  return (
    <Row style={styles.row}>
      <Col style={styles.searchCol}>
        <Searchbar
          placeholder="Search"
          inputStyle={styles.searchInput}
          style={styles.searchBar}
          contentStyle={styles.searchContent}
          value={filter}
          onChangeText={text => {
            setFilter(text);
            setPage(1);
          }}
        />
      </Col>
      <Col style={styles.buttonCol}>
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

const styles = StyleSheet.create({
  row: {
    height: 60,
    alignItems: 'center',
  },
  searchCol: {
    paddingHorizontal: 8,
    width: '70%',
  },
  searchInput: {
    fontSize: 16,
    padding: 0,
    paddingBottom: 12,
  },
  searchBar: {
    height: 45,
    backgroundColor: '#eee6ff',
    borderRadius: 25,
  },
  searchContent: {
    height: 45,
  },
  buttonCol: {
    paddingHorizontal: 8,
  },
});

export default memo(CustomerHeader, (prev, next) => {
  return prev.filter === next.filter;
});
