import React, { useCallback, memo } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import BaseModal from '../../General/BaseModal';
import { Loader } from '../../General/Loader';
import CreateUser from './modals/CreateUser';
import ResetPassword from './modals/ResetPassword';
import UpdateUser from './modals/UpdateUser';

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
    footerButton1: 'SAVE',
    footerButton2: 'CANCEL',
    footerButtonIcon1: 'content-save',
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

const modalContent = (
  modalAction,
  createUserRef,
  resetPasswordRef,
  updateUserRef,
) => {
  switch (modalAction) {
    case 'create':
      return <CreateUser createUserRef={createUserRef} />;
    case 'resetpassword':
      return <ResetPassword resetPasswordRef={resetPasswordRef} />;
    case 'update':
      return <UpdateUser updateUserRef={updateUserRef} />;
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

const UserModals = ({
  isOpenModal,
  modalAction,
  setIsOpenModal,
  createUserRef,
  handleActions,
  resetPasswordRef,
  isLoading,
  updateUserRef,
}) => {
  const handleCancel = () => {
    setIsOpenModal(false);
    resetPasswordRef.confirmPassword = '';
    resetPasswordRef.newPassword = '';
    updateUserRef.userName = '';
    updateUserRef.role = '';
    updateUserRef.contact = '';
    createUserRef.userName = '';
    createUserRef.password = '';
    createUserRef.role = '';
    createUserRef.contact = '';
  };

  const cotent = useCallback(() => {
    return modalContent(
      modalAction,
      createUserRef,
      resetPasswordRef,
      updateUserRef,
    );
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
      {cotent()}
    </BaseModal>
  );
};
export default memo(UserModals, (prev, next) => {
  if (prev.isLoading !== next.isLoading) return false;
  if (prev.isOpenModal !== next.isOpenModal) return false;
  if (prev.modalAction !== next.modalAction) return false;
  return true;
});
