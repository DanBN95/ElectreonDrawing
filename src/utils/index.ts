import Toast, { ToastShowParams, ToastType } from 'react-native-toast-message';

export const generateRandomLetter = () => {
  const isUppercase = Math.random() < 0.5; // Randomly decides uppercase or lowercase
  const asciiValue = isUppercase
    ? Math.floor(Math.random() * 26) + 65 // ASCII range for 'A' to 'Z'
    : Math.floor(Math.random() * 26) + 97; // ASCII range for 'a' to 'z'
  return String.fromCharCode(asciiValue);
};

const SUCCESS_TOAST_PARAMS: ToastShowParams = {
  type: 'success',
  text1: 'Good job!',
};

const FAILURE_TOAST_PARAMS: ToastShowParams = {
  type: 'error',
  text1: 'Letter did not match',
  text2: "Don't worry. Try Again!",
};

export const showToast = (type: Omit<ToastType, 'info'>) => {
  switch (type) {
    case 'success':
      return Toast.show(SUCCESS_TOAST_PARAMS);
    case 'error':
      return Toast.show(FAILURE_TOAST_PARAMS);
  }
};
