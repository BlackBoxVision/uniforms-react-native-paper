import React from 'react';
import { FieldProps, connectField } from 'uniforms';
import { TextInput as RNTexInput } from 'react-native-paper';

import TextInput from './TextInput';
import FormControl from './FormControl';

// TODO: improve typings for component props
export type NumFieldProps = FieldProps<
  string,
  React.ComponentProps<typeof RNTexInput>,
  {
    label?: string;
    decimal?: boolean;
    helperText?: string;
    inputRef?: any;
  }
>;

function Num(props: NumFieldProps) {
  let {
    showInlineError,
    errorMessage,
    helperText,
    onChange,
    decimal,
    value,
    error,
  } = props;

  return (
    <FormControl
      error={showInlineError && error}
      helperText={(error && showInlineError && errorMessage) || helperText}
    >
      <TextInput
        {...props}
        keyboardType="numeric"
        value={!!value ? `${value}` : undefined}
        onChange={(text: string) => {
          onChange?.((decimal ? parseInt(text) : parseFloat(text)) as any);
        }}
      />
    </FormControl>
  );
}

export default connectField<NumFieldProps>(Num, {
  kind: 'leaf',
});
