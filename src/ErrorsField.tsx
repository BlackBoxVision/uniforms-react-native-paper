import React from 'react';
import { Override, useForm } from 'uniforms';

export type ErrorsFieldProps = Override<any, any>;

function ErrorsField(props: ErrorsFieldProps) {
  const { error, schema } = useForm();

  return !error && !props.children
    ? null
    : // <FormControl
      //   error={!!error}
      //   fullWidth={fullWidth ?? themeProps?.fullWidth ?? true}
      //   margin={margin ?? themeProps?.margin ?? 'dense'}
      //   variant={variant ?? themeProps?.variant}
      // >
      //   {!!children && (
      //     <FormHelperText {...filterDOMProps(props)}>{children}</FormHelperText>
      //   )}
      //   {schema.getErrorMessages(error).map((message, index) => (
      //     <FormHelperText key={index} {...filterDOMProps(props)}>
      //       {message}
      //     </FormHelperText>
      //   ))}
      // </FormControl>
      null;
}

export default ErrorsField;
