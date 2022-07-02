import React from 'react';
import { FieldProps, connectField } from 'uniforms';
import { TextInput as RNTextInput } from 'react-native-paper';

import TextInput from './TextInput';
import FormControl from './FormControl';

// TODO: improve typings for component props
export type LongTextFieldProps = FieldProps<
  string,
  React.ComponentProps<typeof RNTextInput>,
  {
    label?: string;
    helperText?: string;
    inputRef?: any;
  }
>;

function LongText(props: LongTextFieldProps) {
  let { showInlineError, error, errorMessage, helperText } = props;

  return (
    <FormControl
      error={showInlineError && error}
      helperText={(error && showInlineError && errorMessage) || helperText}
    >
      <TextInput {...props} numberOfLines={4} multiline />
    </FormControl>
  );
}

export default connectField<LongTextFieldProps>(LongText, {
  kind: 'leaf',
});
