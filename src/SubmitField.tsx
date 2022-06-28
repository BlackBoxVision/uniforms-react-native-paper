import React from 'react';
import { FieldProps, useForm } from 'uniforms';

export type SubmitFieldProps = FieldProps<any, any>;

function SubmitField(props: SubmitFieldProps) {
  // const { error, state } = useForm();
  // const theme = useTheme();
  // const themeProps = theme.props?.MuiButton;

  // return (
  //   <Button
  //     disabled={disabled === undefined ? !!(error || state.disabled) : disabled}
  //     ref={inputRef}
  //     type="submit"
  //     value={value}
  //     variant={themeProps?.variant ?? 'contained'}
  //     {...filterDOMProps(props)}
  //   >
  //     {children || label}
  //   </Button>
  // );

  return null;
}

export default SubmitField;
