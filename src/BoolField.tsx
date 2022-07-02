import React from 'react';
import { FieldProps, connectField } from 'uniforms';
import { Checkbox, Switch } from 'react-native-paper';

import FormControl from './FormControl';
import FormControlLabel from './FormControlLabel';

// TODO: improve typings for component props
export type BoolFieldProps = FieldProps<
  boolean,
  any,
  {
    label?: string;
  }
>;

function Bool({
  appearance,
  disabled,
  onChange,
  readOnly,
  value,
  error,
  showInlineError,
  helperText,
  errorMessage,
  ...props
}: BoolFieldProps) {
  let handleChange = () => {
    disabled || readOnly || onChange?.(!value);
  };

  return (
    <FormControl
      error={showInlineError && error}
      helperText={(error && showInlineError && errorMessage) || helperText}
    >
      <FormControlLabel
        {...props}
        control={
          appearance === 'checkbox' || appearance === undefined ? (
            <Checkbox
              disabled={disabled}
              onPress={handleChange}
              status={!!value ? 'checked' : 'unchecked'}
            />
          ) : (
            <Switch
              value={!!value}
              disabled={disabled}
              onValueChange={handleChange}
            />
          )
        }
      />
    </FormControl>
  );
}

export default connectField<BoolFieldProps>(Bool, {
  kind: 'leaf',
});
