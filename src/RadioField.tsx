import React from 'react';
import { RadioButton } from 'react-native-paper';
import { FieldProps, connectField } from 'uniforms';

import FormControl from './FormControl';
import FormControlLabel from './FormControlLabel';

// TODO: improve typings for component props
export type RadioFieldProps = FieldProps<
  any,
  any,
  {
    label?: string;
  }
>;

function Radio({
  error,
  label,
  value,
  readOnly,
  disabled,
  transform,
  allowedValues,
  onChange,
  helperText,
  errorMessage,
  showInlineError,
  required,
  ...props
}: RadioFieldProps) {
  return (
    <FormControl
      label={label}
      required={required}
      error={showInlineError && error}
      helperText={(error && showInlineError && errorMessage) || helperText}
    >
      <RadioButton.Group
        onValueChange={(value) => disabled || readOnly || onChange(value)}
        value={value ?? ''}
      >
        {allowedValues?.map?.((allowedValue: any, idx: number) => (
          <FormControlLabel
            {...props}
            key={idx}
            label={allowedValue}
            control={<RadioButton value={allowedValue} />}
          />
        ))}
      </RadioButton.Group>
    </FormControl>
  );
}

export default connectField<RadioFieldProps>(Radio, {
  kind: 'leaf',
});
