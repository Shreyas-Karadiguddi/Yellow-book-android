import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Col, Row } from 'react-native-easy-grid';
import * as userActions from '../../../../actions/users_api';
import { GeneralDropDown } from '../../../General/DropDown';

const CreateCustomer = ({ createCustomerRef }) => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();
  const { data: isUsers, refetch: refetchUsers } = userActions.useGetAllUsers();

  useEffect(() => {
    refetchUsers();
  }, []);

  useEffect(() => {
    createCustomerRef.user_id = userId;
  }, [userId]);

  useEffect(() => {
    if (users) {
      setUsers(
        isUsers.map(item => ({ value: item.id, label: item.user_name })),
      );
    }
  }, [isUsers]);

  return (
    <View style={{ flex: 1, gap: 5, marginTop: 5 }}>
      <Row>
        <Col>
          <TextInput
            label="Customer name"
            mode="outlined"
            defaultValue={createCustomerRef.customer_name}
            onChangeText={text => (createCustomerRef.customer_name = text)}
            style={{
              height: 50,
            }}
            autoFocus
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Customer address"
            mode="outlined"
            defaultValue={createCustomerRef.customer_address}
            onChangeText={text => (createCustomerRef.customer_address = text)}
            style={{ height: 50 }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Customer area"
            mode="outlined"
            defaultValue={createCustomerRef.customer_area}
            onChangeText={text => (createCustomerRef.customer_area = text)}
            style={{ height: 50 }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Customer city"
            mode="outlined"
            defaultValue={createCustomerRef.customer_city}
            onChangeText={text => (createCustomerRef.customer_city = text)}
            style={{ height: 50 }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Customer state"
            mode="outlined"
            defaultValue={createCustomerRef.customer_state}
            onChangeText={text => (createCustomerRef.customer_state = text)}
            style={{ height: 50 }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Pincode"
            mode="outlined"
            defaultValue={createCustomerRef.pincode}
            onChangeText={text => (createCustomerRef.pincode = text)}
            style={{ height: 50 }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Contact number"
            mode="outlined"
            defaultValue={createCustomerRef.contact_no}
            onChangeText={text => (createCustomerRef.contact_no = text)}
            style={{ height: 50 }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Email"
            mode="outlined"
            defaultValue={createCustomerRef.email}
            onChangeText={text => (createCustomerRef.email = text)}
            style={{ height: 50 }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Pending amount"
            mode="outlined"
            defaultValue={createCustomerRef.pending_amount}
            onChangeText={text => (createCustomerRef.pending_amount = text)}
            style={{ height: 50 }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <GeneralDropDown
            data={users}
            value={userId}
            setValue={setUserId}
            placeholder="Select user ID"
            height={200}
          />
        </Col>
      </Row>
    </View>
  );
};
export default CreateCustomer;
