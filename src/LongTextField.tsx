import React from 'react';
import { View } from 'react-native';
import { FieldProps, connectField } from 'uniforms';
import { TextInput, HelperText } from 'react-native-paper';

export type LongTextFieldProps = FieldProps<
  string,
  React.ComponentProps<typeof TextInput>
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
  type = 'text',
  value = '',
  ...props
}: LongTextFieldProps) => {
  let formHelperText = (error && showInlineError && errorMessage) || helperText;

  return (
    <View>
      <TextInput
        disabled={disabled || readOnly}
        error={!!error}
        label={label}
        dense={true}
        multiline={true}
        onChangeText={(text: string) => disabled || onChange(text)}
        placeholder={placeholder}
        ref={inputRef}
        value={value}
        {...props}
      />
      {!!formHelperText && (
        <HelperText type={showInlineError && error ? 'error' : 'info'}>
          {formHelperText}
        </HelperText>
      )}
    </View>
  );
};

export default connectField<LongTextFieldProps>(LongText, { kind: 'leaf' });
