import React from 'react';
import omit from 'lodash/omit';
import { FieldProps, connectField } from 'uniforms';

import wrapField from './wrapField';

export type BoolFieldProps = FieldProps<boolean, any>;

function Bool(props: BoolFieldProps) {
  // const {
  //   appearance,
  //   disabled,
  //   inputRef,
  //   label,
  //   legend,
  //   name,
  //   onChange,
  //   readOnly,
  //   transform,
  //   value,
  // } = props;
  // const theme = useTheme();
  // const formControlThemeProps = theme.props?.MuiFormControl;
  // const SelectionControl =
  //   appearance === 'checkbox' || appearance === undefined ? Checkbox : Switch;

  // return wrapField(
  //   {
  //     ...(formControlThemeProps?.fullWidth === undefined && {
  //       fullWidth: true,
  //     }),
  //     ...(formControlThemeProps?.margin === undefined && { margin: 'dense' }),
  //     ...props,
  //     component: 'fieldset',
  //   },
  //   legend && (
  //     <FormLabel component="legend" htmlFor={name}>
  //       {legend}
  //     </FormLabel>
  //   ),
  //   <FormGroup>
  //     <FormControlLabel
  //       control={
  //         <SelectionControl
  //           checked={!!value}
  //           name={name}
  //           onChange={(event) =>
  //             !disabled &&
  //             !readOnly &&
  //             onChange &&
  //             onChange(event.target.checked)
  //           }
  //           ref={inputRef as Ref<HTMLButtonElement>}
  //           value={name}
  //           {...omit(filterDOMProps(props), ['helperText', 'fullWidth'])}
  //         />
  //       }
  //       label={transform ? transform(label as string) : label}
  //     />
  //   </FormGroup>
  // );

  return null;
}

export default connectField<BoolFieldProps>(Bool, {
  kind: 'leaf',
});
