import React from 'react';
import { View } from 'react-native';
import { FieldProps, connectField } from 'uniforms';
import { TextInput, HelperText } from 'react-native-paper';

export type LongTextFieldProps = FieldProps<
  string,
  React.ComponentProps<typeof TextInput>,
  {
    helperText?: string;
    inputRef?: any;
  }
>;

const LongText = ({
  disabled,
  error,
  errorMessage,
  helperText,
  inputRef,
  label,
  name,
  onChange,
  placeholder,
  readOnly,
  showInlineError,
  value = '',
  ...props
}: LongTextFieldProps) => {
  let formHelperText = (error && showInlineError && errorMessage) || helperText;

  let helperProps: any = {
    type: showInlineError && error ? 'error' : 'info',
  };

  return (
    <View>
      <TextInput
        disabled={disabled || readOnly}
        error={!!error}
        label={`${label as any}${(props as any).required ? ' *' : ''}`}
        dense={true}
        multiline={true}
        onChangeText={(text: string) => disabled || onChange(text)}
        placeholder={placeholder}
        ref={inputRef}
        value={value}
        {...(props as any)}
      />
      {!!formHelperText && (
        <HelperText {...helperProps}>{formHelperText}</HelperText>
      )}
    </View>
  );
};

export default connectField<LongTextFieldProps>(LongText, { kind: 'leaf' });
