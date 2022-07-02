import React from 'react';
import { TextInput as RNTextInput } from 'react-native-paper';

export type TextInputProps = {
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;

  value?: any;
  label?: string;
  placeholder?: string;

  onChange?: (value: any) => void;

  [key: string]: any;
};

export default function TextInput({
  disabled,
  readOnly,
  error,
  required,
  label,
  placeholder,
  value,
  onChange,
  ...textInputProps
}: TextInputProps) {
  return (
    <RNTextInput
      dense
      value={value}
      error={!!error}
      placeholder={placeholder}
      disabled={disabled || readOnly}
      label={`${label as any}${required ? ' *' : ''}`}
      onChangeText={(text: string) => {
        disabled || readOnly || onChange?.(text);
      }}
      {...(textInputProps as any)}
    />
  );
}
