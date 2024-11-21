import { Platform } from 'react-native';

type BoxShadowStyle = {
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  shadowColor?: string;
  elevation: number;
};

export const boxShadowOne: BoxShadowStyle = {
  shadowOffset: {
    width: 10,
    height: 17,
  },
  shadowOpacity: 23,
  shadowRadius: 12,
  shadowColor: Platform.OS === 'android' ? 'green' : 'black',
  elevation: 4,
};
