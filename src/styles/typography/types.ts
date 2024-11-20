import { customText } from 'react-native-paper';

export type CustomTextType =
  | 'header'
  | 'titleOne'
  | 'titleTwo'
  | 'titleThree'
  | 'subTitleOne'
  | 'bodyOne'
  | 'bodyTwo';

export const CustomText = customText<CustomTextType>();
