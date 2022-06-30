import React from 'react';
import { View } from 'react-native';
import { FieldProps, connectField } from 'uniforms';
import { TextInput, HelperText } from 'react-native-paper';

export type NumFieldProps = FieldProps<
  string,
  React.ComponentProps<typeof TextInput>,
  {
    decimal?: boolean;
    helperText?: string;
    inputRef?: any;
  }
>;

function Num({
  decimal = true,
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
}: NumFieldProps) {
  let formHelperText = (error && showInlineError && errorMessage) || helperText;

  let helperProps: any = {
    type: showInlineError && error ? 'error' : 'info',
  };

  return (
    <View
      style={{
        flex: 1,
        marginBottom: 8,
      }}
    >
      <TextInput
        keyboardType="numeric"
        disabled={disabled || readOnly}
        error={!!error}
        label={label as any}
        dense={true}
        onChangeText={(text: string) =>
          disabled || onChange(parseFloat(text) as any)
        }
        placeholder={placeholder}
        ref={inputRef}
        value={!!value ? `${value}` : undefined}
        {...(props as any)}
      />
      {!!formHelperText && (
        <HelperText {...helperProps}>{formHelperText}</HelperText>
      )}
    </View>
  );
}

export default connectField<NumFieldProps>(Num, {
  kind: 'leaf',
});
