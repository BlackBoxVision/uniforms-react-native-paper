import React from 'react';
import { connectField, FieldProps } from 'uniforms';

import AutoField from './AutoField';
import wrapField from './wrapField';

// FIXME: wrapField is not typed correctly.
export type NestFieldProps = FieldProps<any, any>;

function Nest(props: NestFieldProps) {
  // const theme = useTheme();
  // const formControlThemeProps = theme.props?.MuiFormControl;
  // return wrapField(
  //   {
  //     fullWidth: formControlThemeProps?.fullWidth ?? true,
  //     margin: formControlThemeProps?.margin ?? 'dense',
  //     ...props,
  //     component: undefined,
  //   },
  //   label && <FormLabel component="legend">{label}</FormLabel>,
  //   children ||
  //     fields.map((field) => (
  //       <AutoField key={field} name={field} {...itemProps} />
  //     ))
  // );

  return null;
}

export default connectField<NestFieldProps>(Nest);
