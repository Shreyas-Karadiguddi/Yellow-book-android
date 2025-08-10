import React, { useCallback, memo } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import BaseModal from '../../General/BaseModal';
import { Loader } from '../../General/Loader';
import { CREATE_CUSTOMER, UPDATE_CUSTOMER } from './Customers';
import CreateCustomer from './modals/CreateCustomer';
import UpdateCustomer from './modals/UpdateCustomer';
import DeleteCustomer from './modals/DeleteCustomer';
import CustomerInfo from './modals/CustomerInfo';
import AssignCustomer from './modals/AssignCustomer';

const modalParams = {
  create: {
    title: 'CREATE NEW CUSTOMER',
    footerButton1: 'CREATE',
    footerButton2: 'CANCEL',
    footerButtonIcon1: 'plus',
    footerButtonIcon2: 'close',
    contentHeight: 280,
  },
  update: {
    title: 'UPDATE CUSTOMER',
    footerButton1: 'SAVE',
    footerButton2: 'CANCEL',
    footerButtonIcon1: 'content-save',
    footerButtonIcon2: 'close',
    contentHeight: 280,
  },
  delete: {
    title: 'DELETE CUSTOMER',
    footerButton1: 'DELETE',
    footerButton2: 'CANCEL',
    footerButtonIcon1: 'delete',
    footerButtonIcon2: 'close',
    contentHeight: 150,
  },
  assign: {
    title: 'ASSIGN CUSTOMER',
    footerButton1: 'SAVE',
    footerButton2: 'CANCEL',
    footerButtonIcon1: 'account-plus-outline',
    footerButtonIcon2: 'close',
    contentHeight: 130,
  },
  info: {
    title: 'CUSTOMER INFORMATION',
    footerButton1: 'CANCEL',
    footerButtonIcon1: 'close',
    contentHeight: 295,
  },
};

const modalContent = (
  modalAction,
  createCustomerRef,
  updateCustomerRef,
  deleteCustomerRef,
  customerInfoRef,
  assignedCustomerRef,
) => {
  switch (modalAction) {
    case 'create':
      return <CreateCustomer createCustomerRef={createCustomerRef} />;
    case 'update':
      return <UpdateCustomer updateCustomerRef={updateCustomerRef} />;
    case 'delete':
      return <DeleteCustomer deleteCustomerRef={deleteCustomerRef} />;
    case 'assign':
      return <AssignCustomer assignedCustomerRef={assignedCustomerRef} />;
    case 'info':
      return <CustomerInfo customerInfoRef={customerInfoRef} />;
    default:
      return;
  }
};

const modalFooter = (modalAction, handleCancel, handleActions, isLoading) => {
  if (modalAction === 'info') {
    return (
      <View>
        <Button
          mode="outlined"
          icon={modalParams[modalAction]?.footerButtonIcon1}
          onPress={handleCancel}
        >
          {modalParams[modalAction]?.footerButton1}
        </Button>
      </View>
    );
  }
  return (
    <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
      <Button
        mode="contained"
        icon={
          isLoading
            ? () => <Loader type="ActivityIndicator" color="white" />
            : modalParams[modalAction]?.footerButtonIcon1
        }
        onPress={handleActions}
      >
        {modalParams[modalAction]?.footerButton1}
      </Button>
      <Button
        mode="outlined"
        icon={modalParams[modalAction]?.footerButtonIcon2}
        onPress={handleCancel}
      >
        {modalParams[modalAction]?.footerButton2}
      </Button>
    </View>
  );
};

const CustomerModals = ({
  isOpenModal,
  modalAction,
  setIsOpenModal,
  createCustomerRef,
  updateCustomerRef,
  handleActions,
  isLoading,
  setIsLoading,
  deleteCustomerRef,
  customerInfoRef,
  assignedCustomerRef,
}) => {
  const handleCancel = () => {
    setIsOpenModal(false);
    setIsLoading(false);
    createCustomerRef = { ...CREATE_CUSTOMER };
    updateCustomerRef = { ...UPDATE_CUSTOMER };
  };

  const content = useCallback(() => {
    return modalContent(
      modalAction,
      createCustomerRef,
      updateCustomerRef,
      deleteCustomerRef,
      customerInfoRef,
      assignedCustomerRef,
    );
  }, [modalAction, isOpenModal]);

  const footer = useCallback(() => {
    return modalFooter(modalAction, handleCancel, handleActions, isLoading);
  }, [modalAction, isLoading]);

  return (
    <BaseModal
      open={isOpenModal}
      title={modalParams[modalAction]?.title}
      contentHeight={modalParams[modalAction]?.contentHeight}
      footer={footer}
    >
      {content()}
    </BaseModal>
  );
};
export default memo(CustomerModals, (prev, next) => {
  if (prev.isLoading !== next.isLoading) return false;
  if (prev.isOpenModal !== next.isOpenModal) return false;
  if (prev.modalAction !== next.modalAction) return false;
  return true;
});
