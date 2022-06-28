import React from 'react';
import { FieldProps, connectField } from 'uniforms';

export type NumFieldProps = FieldProps<any, any>;

function Num(props: NumFieldProps) {
  // const theme = useTheme();
  // const themeProps = theme.props?.MuiTextField;

  // return (
  //   <TextField
  //     disabled={disabled}
  //     error={!!error}
  //     fullWidth={themeProps?.fullWidth ?? true}
  //     helperText={(error && showInlineError && errorMessage) || helperText}
  //     inputProps={{
  //       ...(themeProps?.inputProps ?? {}),
  //       min,
  //       max,
  //       readOnly,
  //       step,
  //       ...inputProps,
  //     }}
  //     label={label}
  //     margin={themeProps?.margin ?? 'dense'}
  //     name={name}
  //     onChange={(event) => {
  //       const parse = decimal ? parseFloat : parseInt;
  //       const value = parse(event.target.value);
  //       onChange(isNaN(value) ? undefined : value);
  //     }}
  //     placeholder={placeholder}
  //     ref={inputRef}
  //     type="number"
  //     value={value ?? ''}
  //     {...filterDOMProps(props)}
  //   />
  // );

  return null;
}

export default connectField<NumFieldProps>(Num, {
  kind: 'leaf',
});
