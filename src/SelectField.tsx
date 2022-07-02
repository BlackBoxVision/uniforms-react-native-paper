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
  } = props;

  if (checkboxes) {
    let appearance = props.appearance ?? 'checkbox';
    let isArray = fieldType !== Array;

    return (
      <FormControl
        required={required}
        label={legend || label}
        error={showInlineError && error}
        helperText={(error && showInlineError && errorMessage) || helperText}
      >
        {!isArray ? (
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
          allowedValues?.map?.((allowedValue: any, idx: number) => (
            <FormControlLabel
              {...props}
              key={idx}
              control={
                appearance === 'checkbox' ? (
                  <Checkbox
                    status={
                      !!value?.includes?.(allowedValue)
                        ? 'checked'
                        : 'unchecked'
                    }
                    disabled={disableItem?.(allowedValue) || disabled}
                    onPress={() => {
                      disabled ||
                        readOnly ||
                        onChange?.(
                          !!multiple
                            ? xor?.([allowedValue], value)
                            : allowedValue
                        );
                    }}
                  />
                ) : (
                  <Switch
                    value={!!value?.includes?.(allowedValue)}
                    disabled={disableItem?.(allowedValue) || disabled}
                    onValueChange={() => {
                      disabled ||
                        readOnly ||
                        onChange?.(
                          !!multiple
                            ? xor?.([allowedValue], value)
                            : allowedValue
                        );
                    }}
                  />
                )
              }
            />
          ))
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
        value={value ?? ''}
        label={legend || label}
        visible={isVisible}
        multiSelect={multiple}
        inputProps={{
          dense: true,
        }}
        onDismiss={() => setIsVisible(false)}
        showDropDown={() => setIsVisible(true)}
        list={allowedValues?.map?.((allowedValue: any) => ({
          label: allowedValue,
          value: allowedValue,
        }))}
        setValue={(allowedValue: any) => {
          disabled || readOnly || onChange?.(allowedValue);
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
