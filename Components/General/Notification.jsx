import Toast from 'react-native-toast-message';

export const useNotification = (type, text1, text2, visibilityTime = 3000) => {
  return Toast.show({
    type: type,
    text1: text1,
    text2: text2,
    visibilityTime: visibilityTime,
  });
};
