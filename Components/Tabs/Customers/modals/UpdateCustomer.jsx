import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Row, Col } from 'react-native-easy-grid';
import { TextInput } from 'react-native-paper';
import { GeneralDropDown } from '../../../General/DropDown';
import * as userActions from '../../../../actions/users_api';

const IS_ACTIVE = [
  {
    value: 0,
    label: 'false',
  },
  {
    value: 1,
    label: 'true',
  },
];

const UpdateCustomer = ({ updateCustomerRef }) => {
  const [isActive, setIsActive] = useState(updateCustomerRef.is_active);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(updateCustomerRef.user_id);

  const { data: isUsers, refetch: refetchUsers } = userActions.useGetAllUsers();

  useEffect(() => {
    updateCustomerRef.is_active = isActive;
  }, [isActive]);

  useEffect(() => {
    refetchUsers();
  }, []);

  useEffect(() => {
    if (isUsers) {
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
            defaultValue={updateCustomerRef.customer_name}
            onChangeText={text => (updateCustomerRef.customer_name = text)}
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
            defaultValue={updateCustomerRef.customer_address}
            onChangeText={text => (updateCustomerRef.customer_address = text)}
            style={{
              height: 50,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Customer area"
            mode="outlined"
            defaultValue={updateCustomerRef.customer_area}
            onChangeText={text => (updateCustomerRef.customer_area = text)}
            style={{
              height: 50,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Customer city"
            mode="outlined"
            defaultValue={updateCustomerRef.customer_city}
            onChangeText={text => (updateCustomerRef.customer_city = text)}
            style={{
              height: 50,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Customer state"
            mode="outlined"
            defaultValue={updateCustomerRef.customer_state}
            onChangeText={text => (updateCustomerRef.customer_state = text)}
            style={{
              height: 50,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Pincode"
            mode="outlined"
            defaultValue={updateCustomerRef.pincode}
            onChangeText={text => (updateCustomerRef.pincode = text)}
            style={{
              height: 50,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Contact No."
            mode="outlined"
            defaultValue={updateCustomerRef.contact_no}
            onChangeText={text => (updateCustomerRef.contact_no = text)}
            style={{
              height: 50,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Email"
            mode="outlined"
            defaultValue={updateCustomerRef.email}
            onChangeText={text => (updateCustomerRef.email = text)}
            style={{
              height: 50,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Pending amount"
            mode="outlined"
            defaultValue={updateCustomerRef.pending_amount}
            onChangeText={text => (updateCustomerRef.pending_amount = text)}
            style={{
              height: 50,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInput
            label="Response"
            mode="outlined"
            defaultValue={updateCustomerRef.response}
            onChangeText={text => (updateCustomerRef.response = text)}
            style={{
              height: 50,
            }}
          />
        </Col>
      </Row>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}
      >
        <View style={{ flex: 1, marginRight: 8 }}>
          <Text style={{ fontWeight: 'bold' }}>State :-</Text>
          <GeneralDropDown
            data={IS_ACTIVE}
            value={isActive}
            setValue={setIsActive}
            placeholder="Select the state"
          />
        </View>
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Text style={{ fontWeight: 'bold' }}>User :-</Text>
          <GeneralDropDown
            data={users}
            value={userId}
            setValue={setUserId}
            placeholder="Select the user"
            height={200}
          />
        </View>
      </View>
    </View>
  );
};
export default UpdateCustomer;
