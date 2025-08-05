import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useFocusEffect } from '@react-navigation/native';
import { Divider, useTheme } from 'react-native-paper';
import * as customerActions from '../../../actions/customers_api';
import { useToastMessage } from '../../General/Notification';
import Loader from '../../General/Loader';
import CustomersList from './CustomersList';
import CustomersHeaders from './CustomerHeaders';
import CustomerModals from './CustomerModals';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CREATE_UPDATE_CUSTOMERS = {
  id: null,
  customerName: '',
  customerAddress: '',
  customerArea: '',
  customerCity: '',
  customerState: '',
  pincode: '',
  contactNo: '',
  userId: null,
  email: '',
  lastContactDate: '',
  pendingAmount: null,
};

const Customers = () => {
  const theme = useTheme();
  const [expandedId, setExpandedId] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(null);
  const [modalAction, setModalAction] = useState('');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  // const [customerList, setCustomerList] = useState([])

  const createUpdateCustomersRef = useRef(CREATE_UPDATE_CUSTOMERS);

  const {
    data: isCustomersData,
    refetch: refetchCustomers,
    isFetching: isLoadingCustomers,
  } = customerActions.useGetAllCustomers(page, pageSize, filter);

  const {
    status: isCreatedCustomer,
    mutate: createCustomer,
    isLoading: isAddingCustomer,
  } = customerActions.useCreateCustomer();

  const {
    status: isCustomerUpdate,
    mutate: updateCustomer,
    isLoading: isUpdatingCustomer,
  } = customerActions.useUpdateCustomer();

  useFocusEffect(
    useCallback(() => {
      refetchCustomers();
      return () => {};
    }, []),
  );

  const afterApiCall = () => {
    refetchCustomers();
    setIsOpenModal(false);
    setModalAction('');
  };

  useEffect(() => {
    if (isCreatedCustomer === 'success') {
      afterApiCall();
      useToastMessage(
        'success',
        'CREATE CUSTOMER',
        'Customers created succesfully',
      );
    } else if (isCreatedCustomer === 'error') {
      console.log('error');
    }
  }, [isCreatedCustomer]);

  useEffect(() => {
    if (isCustomerUpdate === 'success') {
      afterApiCall();
      useToastMessage(
        'success',
        'UPDATE CUSTOMER',
        'Customer updated succesfully',
      );
    } else if (isCustomerUpdate === 'error') {
      console.log('error');
    }
  }, [isCustomerUpdate]);

  const handleActions = useCallback(() => {
    switch (modalAction) {
      case 'create':
        const newCustomer = {
          customerName: createUpdateCustomersRef.current.userName,
          customerAddress: createUpdateCustomersRef.current.customerAddress,
          customerArea: createUpdateCustomersRef.current.customerArea,
          customerCity: createUpdateCustomersRef.current.customerCity,
          customerState: createUpdateCustomersRef.current.customerState,
          pincode: createUpdateCustomersRef.current.pincode,
          contactNo: createUpdateCustomersRef.current.contactNo,
          email: createUpdateCustomersRef.current.email,
          lastContactDate: createUpdateCustomersRef.current.lastContactDate,
          pendingAmount: createUpdateCustomersRef.current.pendingAmount,
        };
        createCustomer(newCustomer);
        break;
      case 'update':
        const UpdateCustomerDetails = {
          newCustomerName: createUpdateCustomersRef.current.userName,
          newCustomerAddress: createUpdateCustomersRef.current.customerAddress,
          newCustomerArea: createUpdateCustomersRef.current.customerArea,
          newCustomerCity: createUpdateCustomersRef.current.customerCity,
          newCustomerState: createUpdateCustomersRef.current.customerState,
          newPincode: createUpdateCustomersRef.current.pincode,
          newContactNo: createUpdateCustomersRef.current.contactNo,
          newEmail: createUpdateCustomersRef.current.email,
          newLastContactDate: createUpdateCustomersRef.current.lastContactDate,
          newPendingAmount: createUpdateCustomersRef.current.pendingAmount,
        };
        updateCustomer(UpdateCustomerDetails);
        break;
      default:
        break;
    }
  }, [modalAction]);

  const toggleExpand = id => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(id);
  };

  return (
    <>
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <CustomersHeaders
          setIsOpenModal={setIsOpenModal}
          isOpenModal={isOpenModal}
          filter={filter}
          setFilter={setFilter}
        />
        <Divider style={{ borderBottomWidth: 0.5, marginBottom: 5 }} />
        <View style={{ flex: 1 }}>
          {isLoadingCustomers ? (
            <Loader type="skeleton" />
          ) : (
            <FlashList
              data={isCustomersData}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <CustomersList
                    item={item}
                    toggleExpand={toggleExpand}
                    expandedId={expandedId}
                    theme={theme}
                    setModalAction={setModalAction}
                    setIsOpenModal={setIsOpenModal}
                    updateCustomerRef={createUpdateCustomersRef.current}
                  />
                );
              }}
              extraData={expandedId}
            />
          )}
        </View>
      </View>
      <CustomerModals
        isLoading={isAddingCustomer || isUpdatingCustomer}
        isOpenModal={isOpenModal}
        modalAction={modalAction}
        setIsOpenModal={setIsOpenModal}
        handleActions={handleActions}
        createUpdateCustomersRef={createUpdateCustomersRef.current}
      />
    </>
  );
};

export default Customers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
