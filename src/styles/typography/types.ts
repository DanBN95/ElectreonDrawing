import { customText } from 'react-native-paper';

export type CustomTextType =
  | 'header'
  | 'titleOne'
  | 'titleTwo'
  | 'subTitleOne'
  | 'subTitleTwo'
  | 'bodyOne'
  | 'bodyTwo';

export const CustomText = customText<CustomTextType>();
