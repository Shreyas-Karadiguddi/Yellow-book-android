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
import { ALERT_TYPE } from 'react-native-alert-notification';
import * as customerActions from '../../../actions/customer_api';
import CustomerHeader from './CustomerHeader';
import CustomerModals from './CustomerModals';
import { useToastDialog } from '../../General/Notification';
import { Loader } from '../../General/Loader';
import CustomerList from './CustomerList';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const CREATE_CUSTOMER = {
  customer_name: '',
  customer_address: '',
  customer_area: '',
  customer_city: '',
  customer_state: '',
  pincode: '',
  contact_no: '',
  user_id: '',
  email: '',
  pending_amount: '',
};

export const UPDATE_CUSTOMER = {
  id: null,
  customer_name: '',
  customer_address: '',
  customer_area: '',
  customer_city: '',
  customer_state: '',
  pincode: '',
  contact_no: '',
  user_id: '',
  email: '',
  pending_amount: '',
  is_active: null,
  response: '',
  user_name: '',
};

export const CUSTOMER_INFO = {
  customer_name: '',
  customer_address: '',
  email: '',
  contact_no: '',
  pending_amount: '',
  user_name: '',
  is_active: null,
  last_contact_date: '',
};

const DELETE_CUSTOMER = {
  id: null,
  customer_name: '',
  index: null,
};

const ASSIGN_CUSTOMER = {
  user_id: null,
  customer_id: null,
  user_name: '',
  new_user_name: '',
};

const PAGE_SIZE = 10;

const Customers = () => {
  const theme = useTheme();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalAction, setModalAction] = useState('');
  const [filter, setFilter] = useState('');
  const [customerList, setCustomerList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState({
    id: null,
    index: null,
  });

  const createCustomerRef = useRef(CREATE_CUSTOMER);
  const updateCustomerRef = useRef(UPDATE_CUSTOMER);
  const deleteCustomerRef = useRef(DELETE_CUSTOMER);
  const customerInfoRef = useRef(CUSTOMER_INFO);
  const assignedCustomerRef = useRef(ASSIGN_CUSTOMER);
  const totalPages = useRef();

  const {
    data: isCustomers,
    refetch: refetchCustomers,
    isFetching: isFetchingCustomers,
  } = customerActions.useGetCustomers(page, PAGE_SIZE, filter);

  const { mutate: createCustomer, status: isCustomerCreated } =
    customerActions.useCreateCustomer();

  const { mutate: updateCustomer, status: isCustomerUpdate } =
    customerActions.useUpdateCustomer();

  const { status: isCustomerDeleted, mutate: deleteCustomer } =
    customerActions.useDeleteCustomer();

  const { status: isAssignCustomer, mutate: assignCustomer } =
    customerActions.useAssignCustomer();

  useFocusEffect(
    useCallback(() => {
      refetchCustomers();
    }, [page, filter]),
  );

  useEffect(() => {
    if (isCustomers?.customers) {
      setCustomerList(prevData =>
        page === 1
          ? isCustomers.customers
          : [...prevData, ...isCustomers.customers],
      );
      totalPages.current = isCustomers.totalPages;
    }
  }, [isCustomers, page]);

  useEffect(() => {
    if (isCustomerCreated === 'success') {
      setIsOpenModal(false);
      setIsLoading(false);
      createCustomerRef.current = { ...CREATE_CUSTOMER };
      useToastDialog(
        ALERT_TYPE.SUCCESS,
        'CREATE CUSTOMER',
        'Customer created successfully !',
      );
    } else if (isCustomerCreated === 'error') {
      setIsLoading(false);
      useToastDialog(
        ALERT_TYPE.DANGER,
        'CREATE CUSTOMER',
        'Failed to create customers !',
      );
    }
  }, [isCustomerCreated]);

  useEffect(() => {
    if (isCustomerUpdate === 'success') {
      setIsOpenModal(false);
      setIsLoading(false);
      setCustomerList(prevData => {
        const newData = [...prevData];
        newData[expandedId.index] = {
          ...newData[expandedId.index],
          customer_name: updateCustomerRef.current.customer_name,
          customer_address: updateCustomerRef.current.customer_address,
          customer_area: updateCustomerRef.current.customer_area,
          customer_city: updateCustomerRef.current.customer_city,
          customer_state: updateCustomerRef.current.customer_state,
          pincode: updateCustomerRef.current.pincode,
          contact_no: updateCustomerRef.current.contact_no,
          user_id: updateCustomerRef.current.user_id,
          email: updateCustomerRef.current.email,
          pending_amount: updateCustomerRef.current.pending_amount,
          is_active: updateCustomerRef.current.is_active,
          response: updateCustomerRef.current.response,
          user_name: updateCustomerRef.current.user_name,
        };
        return newData;
      });
      useToastDialog(
        ALERT_TYPE.SUCCESS,
        'UPDATE CUSTOMER',
        'Customer updated successfully !',
      );
    } else if (isCustomerUpdate === 'error') {
      setIsLoading(false);
      useToastDialog(
        ALERT_TYPE.DANGER,
        'UPDATE CUSTOMER',
        'Failed to update customer',
      );
    }
  }, [isCustomerUpdate]);

  useEffect(() => {
    if (isCustomerDeleted === 'success') {
      setIsOpenModal(false);
      setIsLoading(false);
      useToastDialog(
        ALERT_TYPE.SUCCESS,
        'DELETE CUSTOMER',
        'Customer deleted successfully !',
      );
      setCustomerList(prevData => [
        ...prevData.slice(0, deleteCustomerRef.current.index),
        ...prevData.slice(deleteCustomerRef.current.index + 1),
      ]);
    } else if (isCustomerDeleted === 'error') {
      setIsLoading(false);
      useToastDialog(
        ALERT_TYPE.DANGER,
        'DELETE CUSTOMER',
        'Failed to delete customer !',
      );
    }
  }, [isCustomerDeleted]);

  useEffect(() => {
    if (isAssignCustomer === 'success') {
      setIsOpenModal(false);
      setIsLoading(false);
      useToastDialog(
        ALERT_TYPE.SUCCESS,
        'ASSIGN CUSTOMER',
        'Customer assigned successfully !',
      );
      setCustomerList(prevData => {
        const newData = [...prevData];
        newData[expandedId.index] = {
          ...newData[expandedId.index],
          user_name: assignedCustomerRef.current.new_user_name,
        };
        return newData;
      });
    } else if (isAssignCustomer === 'error') {
      setIsLoading(false);
      useToastDialog(
        ALERT_TYPE.DANGER,
        'ASSIGN CUSTOMER',
        'Failed to assign the customer !',
      );
    }
  }, [isAssignCustomer]);

  const handleActions = useCallback(() => {
    setIsLoading(true);
    switch (modalAction) {
      case 'create':
        createCustomer(createCustomerRef.current);
        break;
      case 'update':
        updateCustomer(updateCustomerRef.current);
        break;
      case 'delete':
        deleteCustomer(deleteCustomerRef.current.id);
        break;
      case 'assign':
        assignCustomer(assignedCustomerRef.current);
        break;
      default:
        return;
    }
  }, [modalAction]);

  const toggleExpand = (id, index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(prevData => ({ ...prevData, id: id, index: index }));
  };

  const loadMoreCustomers = () => {
    if (totalPages.current < page) {
      return;
    }
    setPage(prev => prev + 1);
  };

  return (
    <>
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <CustomerHeader
          setIsOpenModal={setIsOpenModal}
          setModalAction={setModalAction}
          filter={filter}
          setFilter={setFilter}
          setPage={setPage}
        />

        <View style={styles.dividerWrapper}>
          <Divider />
        </View>

        <View style={{ flex: 1 }}>
          {isFetchingCustomers ? (
            <Loader type="skeleton" />
          ) : (
            <FlashList
              // initialScrollIndex={0}
              data={customerList}
              keyExtractor={item => item.id.toString()}
              maintainVisibleContentPosition={{ minIndexForVisible: 0 }}
              estimatedItemSize={80}
              disableAutoLayout={false}
              removeClippedSubviews={false}
              renderItem={({ item, index }) => (
                <CustomerList
                  index={index}
                  item={item}
                  toggleExpand={toggleExpand}
                  expandedId={expandedId.id}
                  expandedIndex={expandedId.index}
                  theme={theme}
                  setModalAction={setModalAction}
                  setIsOpenModal={setIsOpenModal}
                  updateCustomerRef={updateCustomerRef.current}
                  deleteCustomerRef={deleteCustomerRef.current}
                  customerInfoRef={customerInfoRef.current}
                  assignedCustomerRef={assignedCustomerRef.current}
                />
              )}
              onEndReached={loadMoreCustomers}
              onEndReachedThreshold={0.5}
              ListFooterComponent={
                isFetchingCustomers ? <Loader type="small" /> : null
              }
              extraData={expandedId.id}
            />
          )}
        </View>
      </View>

      <CustomerModals
        isLoading={isLoading}
        isOpenModal={isOpenModal}
        modalAction={modalAction}
        setIsOpenModal={setIsOpenModal}
        setIsLoading={setIsLoading}
        handleActions={handleActions}
        createCustomerRef={createCustomerRef.current}
        updateCustomerRef={updateCustomerRef.current}
        deleteCustomerRef={deleteCustomerRef.current}
        customerInfoRef={customerInfoRef.current}
        assignedCustomerRef={assignedCustomerRef.current}
      />
    </>
  );
};

export default Customers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dividerWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
    marginVertical: 12,
    borderRadius: 1,
    overflow: 'hidden',
  },
});
