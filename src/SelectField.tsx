import xor from 'lodash/xor';
import React, { useState } from 'react';
import { FieldProps, connectField } from 'uniforms';
import SelectDropdown from 'react-native-paper-dropdown';
import { Checkbox, RadioButton, Switch } from 'react-native-paper';

import FormControl from './FormControl';
import FormControlLabel from './FormControlLabel';

// TODO: improve typings for component props
type SelectProps = FieldProps<
  any,
  any,
  {
    label?: string;
  }
>;

type CheckboxesProps = FieldProps<
  any,
  any,
  {
    label?: string;
  }
>;

export type SelectFieldProps = CheckboxesProps | SelectProps;

function Select(props: SelectFieldProps) {
  let [isVisible, setIsVisible] = useState(false);

  let {
    showInlineError,
    allowedValues,
    errorMessage,
    disableItem,
    helperText,
    checkboxes,
    fieldType,
    disabled,
    multiple = false,
    readOnly,
    onChange,
    legend,
    label,
    error,
    value,
    required,
    ...rest
  } = props;

  if (checkboxes) {
    let appearance = props.appearance ?? 'checkbox';

    return (
      <FormControl
        error={error}
        required={required}
        label={legend || label}
        helperText={(error && showInlineError && errorMessage) || helperText}
      >
        {!multiple ? (
          <RadioButton.Group
            value={value ?? ''}
            onValueChange={(value) => {
              disabled || readOnly || onChange?.(value);
            }}
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
        ) : (
          allowedValues?.map?.((allowedValue: any, idx: number) => {
            let hasValue = !!value?.split?.(',').includes?.(allowedValue);
            let handleChange = () => {
              disabled ||
                readOnly ||
                onChange?.(
                  !!multiple
                    ? xor?.(value?.split?.(','), [allowedValue]).join(',')
                    : allowedValue
                );
            };

            return (
              <FormControlLabel
                {...rest}
                key={idx}
                label={allowedValue}
                control={
                  appearance === 'checkbox' ? (
                    <Checkbox
                      status={!!hasValue ? 'checked' : 'unchecked'}
                      disabled={disableItem?.(allowedValue) || disabled}
                      onPress={handleChange}
                    />
                  ) : (
                    <Switch
                      value={hasValue}
                      disabled={disableItem?.(allowedValue) || disabled}
                      onValueChange={handleChange}
                    />
                  )
                }
              />
            );
          })
        )}
      </FormControl>
    );
  }

  return (
    <FormControl
      error={showInlineError && error}
      helperText={(error && showInlineError && errorMessage) || helperText}
    >
      <SelectDropdown
        label={legend || label}
        visible={isVisible}
        multiSelect={multiple}
        inputProps={{
          dense: true,
        }}
        onDismiss={() => setIsVisible(false)}
        showDropDown={() => setIsVisible(true)}
        value={Array.isArray(value) ? value?.join?.(',') : value ?? ''}
        list={allowedValues?.map?.((allowedValue: any) => ({
          label: allowedValue,
          value: allowedValue,
        }))}
        setValue={(allowedValue: any) => {
          disabled ||
            readOnly ||
            onChange?.(!!multiple ? allowedValue?.split?.(',') : allowedValue);
        }}
        dropDownItemStyle={{
          height: 40,
        }}
      />
    </FormControl>
  );
}

export default connectField<SelectFieldProps>(Select, {
  kind: 'leaf',
});
