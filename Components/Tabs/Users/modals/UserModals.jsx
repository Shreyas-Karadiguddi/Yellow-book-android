import React, { useCallback, memo } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import BaseModal from '../../../General/BaseModal';
import CreateUpdateUser from './CreateUpdateUser';

const modalParams = {
  create: {
    title: 'CREATE NEW USER',
    footerButton1: 'CREATE',
    footerButton2: 'CANCEL',
    footerButtonIcon1: 'plus',
    footerButtonIcon2: 'close',
    contentHeight: 280,
  },
  update: {
    title: 'UPDATE USER',
    footerButton1: 'UPDATE',
    footerButton2: 'CANCEL',
    footerButtonIcon1: 'check',
    footerButtonIcon2: 'close',
    contentHeight: 280,
  },
  resetpassword: {
    title: 'RESET PASSWORD',
    footerButton1: 'RESET',
    footerButton2: 'CANCEL',
    footerButtonIcon1: 'lock-reset',
    footerButtonIcon2: 'close',
    contentHeight: 200,
  },
};

const modalContent = (modalAction, createUserRef) => {
  switch (modalAction) {
    case 'create':
    case 'update':
      return <CreateUpdateUser createUserRef={createUserRef} />;
    default:
      return;
  }
};

const modalFooter = (modalAction, handleCancel, handleActions) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
      <Button
        mode="contained"
        icon={modalParams[modalAction]?.footerButtonIcon1}
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

const UserModals = ({
  isOpenModal,
  modalAction,
  setIsOpenModal,
  createUserRef,
  handleActions,
}) => {
  const handleCancel = () => {
    setIsOpenModal(false);
  };

  const cotent = useCallback(() => {
    return modalContent(modalAction, createUserRef);
  }, [modalAction]);

  const footer = useCallback(() => {
    return modalFooter(modalAction, handleCancel, handleActions);
  }, [modalAction]);

  return (
    <BaseModal
      open={isOpenModal}
      title={modalParams[modalAction]?.title}
      contentHeight={modalParams[modalAction]?.contentHeight}
      footer={footer}
    >
      {cotent()}
    </BaseModal>
  );
};
export default memo(UserModals, (prev, next) => {
  if (prev.isOpenModal !== next.isOpenModal) return false;
  if (prev.modalAction !== next.modalAction) return false;
  return true;
});
