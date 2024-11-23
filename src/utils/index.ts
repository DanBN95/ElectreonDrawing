import { SummarySessionType } from '@src/features/slices/summaryResultsSlice';
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

export function camelCaseToTitle(camelCase: string): string {
  // Split the string at each point a lowercase letter is followed by an uppercase letter
  const result = camelCase.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Capitalize the first letter of each word
  return result.replace(/\b[a-z]/g, (char) => char.toUpperCase());
}

export const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    return new Intl.DateTimeFormat('en-GB', options).format(date);
  } catch (err) {
    console.log(err);
    return '';
  }
};

export const getStatisticsTableColumns = (
  resultsTable: SummarySessionType[],
): { key: keyof Omit<SummarySessionType, 'id'>; displayName: string }[] => {
  if (resultsTable.length === 0) return [];

  return Object.keys(resultsTable[0])
    .filter((key) => key !== 'id')
    .map((key) => ({
      key: key as keyof Omit<SummarySessionType, 'id'>,
      displayName: camelCaseToTitle(key),
    }));
};
