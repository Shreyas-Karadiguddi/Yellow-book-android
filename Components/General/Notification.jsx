import { ALERT_TYPE, Toast, Dialog } from 'react-native-alert-notification';

export const useToastMessage = (
  type = ALERT_TYPE.SUCCESS,
  title = 'success',
  textBody = 'This is text body',
) => {
  Toast.show({
    type: type,
    title: title,
    textBody: textBody,
    autoClose: 2000,
  });
};

export const useToastDialog = (
  type = ALERT_TYPE.SUCCESS,
  title = 'success',
  textBody = 'This is text body',
) => {
  Dialog.show({
    type: type,
    title: title,
    textBody: textBody,
    button: 'Close',
  });
};
