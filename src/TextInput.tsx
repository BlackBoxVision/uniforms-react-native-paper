import React, { useState } from 'react';
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
  secureTextEntry,
  ...textInputProps
}: TextInputProps) {
  let [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(
    !secureTextEntry
  );

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
      secureTextEntry={!isPasswordVisible}
      right={
        !!secureTextEntry && (
          <RNTextInput.Icon
            name={!isPasswordVisible ? 'eye' : 'eye-off'}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        )
      }
      {...(textInputProps as any)}
    />
  );
}
