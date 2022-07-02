import React from 'react';
import { FieldProps, connectField } from 'uniforms';
import { TextInput as RNTextInput } from 'react-native-paper';

import TextInput from './TextInput';
import FormControl from './FormControl';

// TODO: improve typings for component props
export type TextFieldProps = FieldProps<
  string,
  React.ComponentProps<typeof RNTextInput>,
  {
    label?: string;
    helperText?: string;
    inputRef?: any;
  }
>;

function Text(props: TextFieldProps) {
  let { showInlineError, error, errorMessage, helperText } = props;

  return (
    <FormControl
      error={showInlineError && error}
      helperText={(error && showInlineError && errorMessage) || helperText}
    >
      <TextInput {...props} />
    </FormControl>
  );
}

export default connectField<TextFieldProps>(Text, {
  kind: 'leaf',
});
