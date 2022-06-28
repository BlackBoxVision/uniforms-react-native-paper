import React from 'react';
import omit from 'lodash/omit';
import { FieldProps, connectField } from 'uniforms';

import wrapField from './wrapField';

export type RadioFieldProps = FieldProps<any, any>;

function Radio(props: RadioFieldProps) {
  // const theme = useTheme();
  // const formControlThemeProps = theme.props?.MuiFormControl;
  // return wrapField(
  //   {
  //     fullWidth: formControlThemeProps?.fullWidth ?? true,
  //     margin: formControlThemeProps?.margin ?? 'dense',
  //     ...props,
  //     component: 'fieldset',
  //     disabled,
  //   },
  //   label && (
  //     <FormLabel component="legend" htmlFor={name}>
  //       {label}
  //     </FormLabel>
  //   ),
  //   <RadioGroup
  //     id={id}
  //     name={name}
  //     onChange={(event: any) =>
  //       disabled || readOnly || onChange(event.target.value)
  //     }
  //     ref={inputRef}
  //     row={row}
  //     value={value ?? ''}
  //   >
  //     {allowedValues?.map((item) => (
  //       <FormControlLabel
  //         control={
  //           <RadioMaterial
  //             {...omit(filterDOMProps(props), ['checkboxes', 'helperText'])}
  //           />
  //         }
  //         key={item}
  //         label={transform ? transform(item) : item}
  //         value={`${item}`}
  //       />
  //     ))}
  //   </RadioGroup>
  // );

  return null;
}

export default connectField<RadioFieldProps>(Radio, {
  kind: 'leaf',
});
