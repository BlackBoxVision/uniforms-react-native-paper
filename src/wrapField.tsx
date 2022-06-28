import { View } from 'react-native';
import { HelperText } from 'react-native-paper';
import React, { ReactNode, createElement } from 'react';

export default function wrapField(
  {
    component,
    disabled,
    error,
    errorMessage,
    fullWidth,
    helperText,
    margin,
    readOnly,
    required,
    showInlineError,
    variant,
  }: any,
  ...children: ReactNode[]
) {
  let formHelperText = showInlineError && error ? errorMessage : helperText;
  let props = {
    component,
    disabled: !!disabled,
    error: !!error,
    fullWidth: !!fullWidth,
    margin,
    readOnly,
    required,
    variant,
    style: {
      marginBottom: 8,
    },
  };

  let helperProps: any = {
    visible: !!formHelperText,
    type: showInlineError && error ? 'error' : 'info',
  };

  return createElement(
    View,
    props as any,
    ...children,
    !!formHelperText && (
      <HelperText {...helperProps}>{formHelperText}</HelperText>
    )
  );
}
