import React, { useCallback, memo } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import BaseModal from '../../General/BaseModal';
import { Loader } from '../../General/Loader';
import CreateUpdateCustomer from './Modals/CreateUpdateCustomer';

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
};

const modalContent = (modalAction, createUpdateCustomersRef) => {
  switch (modalAction) {
    case 'create':
      return (
        <CreateUpdateCustomer
          createUpdateCustomersRef={createUpdateCustomersRef}
        />
      );
    case 'update':
      return (
        <CreateUpdateCustomer
          createUpdateCustomersRef={createUpdateCustomersRef}
          createModal={false}
        />
      );
    default:
      return;
  }
};

const modalFooter = (modalAction, handleCancel, handleActions, isLoading) => {
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
  createUpdateCustomersRef,
  handleActions,
  isLoading,
}) => {
  const handleCancel = () => {
    setIsOpenModal(false);
    createUpdateCustomersRef.customerName = '';
    createUpdateCustomersRef.customerAddress = '';
    createUpdateCustomersRef.customerArea = '';
    createUpdateCustomersRef.customerCity = '';
    createUpdateCustomersRef.customerState = '';
    createUpdateCustomersRef.pincode = '';
    createUpdateCustomersRef.contactNo = '';
    createUpdateCustomersRef.userId = '';
    createUpdateCustomersRef.lastContactDate = '';
    createUpdateCustomersRef.pendingAmount = '';
  };

  const content = useCallback(() => {
    return modalContent(modalAction, createUpdateCustomersRef);
  }, [modalAction]);

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
