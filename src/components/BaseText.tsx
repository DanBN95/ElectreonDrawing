import React from 'react';
import { TextProps } from 'react-native-paper';
import { TextStyle } from 'react-native/types';
import { CustomText, CustomTextType } from '@src/styles/typography/types';
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types';
import useAppTheme from '@src/hooks/useAppTheme';

export interface BaseTextProps extends Omit<TextProps<TextStyle>, 'variant'> {
  isLink?: boolean;
  variant?: VariantProp<CustomTextType>;
}

const BaseText = ({
  children,
  isLink,
  variant = 'bodyOne',
  style,
  ...props
}: BaseTextProps & React.PropsWithChildren) => {
  const theme = useAppTheme();
  return (
    <CustomText
      {...props}
      variant={variant}
      style={[{ backgroundColor: theme.colors.transparent }, style]}
      //   selectionColor={theme.colors.cursorColor}
    >
      {children}
    </CustomText>
  );
};

export default BaseText;
