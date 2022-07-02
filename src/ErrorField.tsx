import React from 'react';
import { connectField } from 'uniforms';

import FormControl from './FormControl';

// TODO: improve typings for component props
export type ErrorFieldProps = any;

function Error({ children, error, errorMessage, ...props }: ErrorFieldProps) {
  return !error ? null : (
    <FormControl {...props} helperText={children || errorMessage} error />
  );
}

export default connectField<ErrorFieldProps>(Error, {
  initialValue: false,
  kind: 'leaf',
});
