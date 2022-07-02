import React from 'react';
import { Override, useForm } from 'uniforms';

import FormControl from './FormControl';

// TODO: improve typings for component props
export type ErrorsFieldProps = Override<any, any>;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function ErrorsField({ children, ...props }: ErrorsFieldProps) {
  let { error, schema } = useForm();

  return !error && !children ? null : (
    <FormControl>
      <FormControl {...props} helperText={children} error />
      {schema
        .getErrorMessages(error)
        .map(capitalizeFirstLetter)
        .map((message: string, index: number) => (
          <FormControl {...props} key={index} helperText={message} error />
        ))}
    </FormControl>
  );
}

export default ErrorsField;
