import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Col, Row } from 'react-native-easy-grid';
import { GeneralDropDown } from '../../../General/DropDown';

const CreateUpdateCustomer = ({
  createUpdateCustomerRef,
  createModal = true,
}) => {
  const fields = [
    { key: 'userName', label: 'Customer Name' },
    { key: 'customerAddress', label: 'Address' },
    { key: 'customerArea', label: 'Area' },
    { key: 'customerCity', label: 'City' },
    { key: 'customerState', label: 'State' },
    { key: 'pincode', label: 'Pincode' },
    { key: 'contactNo', label: 'Contact Number' },
    { key: 'userId', label: 'User ID' },
    { key: 'lastContactDate', label: 'Last Contact Date' },
    { key: 'pendingAmount', label: 'Pending Amount' },
  ];

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {fields.map(({ key, label }) => (
        <Row key={key} style={{ marginBottom: 10 }}>
          <Col>
            <TextInput
              label={label}
              mode="outlined"
              defaultValue={createModal ? '' : createUpdateCustomerRef[key]}
              onChangeText={text => {
                createUpdateCustomerRef[key] = text;
              }}
              style={{ height: 50 }}
              autoFocus={key === 'userName'}
            />
          </Col>
        </Row>
      ))}
      {/* <Row>
        <Col>
          <GeneralDropDown
            data={Users}
            value={role}
            setValue={setRole}
            placeholder="Select Employee to assign"
          />
        </Col>
      </Row> */}
      // Here we need to show employees dropdown to assign
    </View>
  );
};

export default CreateUpdateCustomer;
