import React, { ReactNode, createElement } from 'react';
import { View } from 'react-native';
import { HelperText } from 'react-native-paper';

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
  const formHelperText = showInlineError && error ? errorMessage : helperText;
  const props = {
    component,
    disabled: !!disabled,
    error: !!error,
    fullWidth: !!fullWidth,
    margin,
    readOnly,
    required,
    variant,
  };

  return createElement(
    View,
    props,
    ...children,
    !!formHelperText && (
      <HelperText type={showInlineError && error ? 'error' : 'info'}>
        {formHelperText}
      </HelperText>
    )
  );
}
