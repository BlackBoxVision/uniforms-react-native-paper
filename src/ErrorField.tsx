import React from 'react';
import { Override, connectField, filterDOMProps } from 'uniforms';

export type ErrorFieldProps = any;

function Error(props: ErrorFieldProps) {
  // const theme = useTheme();
  // const themeProps = theme.props?.MuiFormControl;

  // return !error ? null : (
  //   <FormControl
  //     error={!!error}
  //     fullWidth={fullWidth ?? themeProps?.fullWidth ?? true}
  //     margin={margin ?? themeProps?.margin ?? 'dense'}
  //     variant={variant ?? themeProps?.variant}
  //   >
  //     <FormHelperText {...filterDOMProps(props)}>
  //       {children || errorMessage}
  //     </FormHelperText>
  //   </FormControl>
  // );

  return null;
}

export default connectField<ErrorFieldProps>(Error, {
  initialValue: false,
  kind: 'leaf',
});
