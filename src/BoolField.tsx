import React from 'react';
import { View } from 'react-native';
import { FieldProps, connectField } from 'uniforms';
import {
  Checkbox,
  HelperText,
  Switch,
  Text,
  useTheme,
} from 'react-native-paper';

export type BoolFieldProps = FieldProps<boolean, any>;

function Bool({
  appearance,
  disabled,
  label,
  onChange,
  readOnly,
  transform,
  value,
  error,
  showInlineError,
  helperText,
  errorMessage,
  ...props
}: BoolFieldProps) {
  let theme = useTheme();

  let formHelperText = (error && showInlineError && errorMessage) || helperText;

  let helperProps: any = {
    visible: !!formHelperText,
    type: showInlineError && error ? 'error' : 'info',
    children: formHelperText,
  };

  return (
    <View style={{ flex: 1, marginBottom: 8 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignContent: 'center',
          alignItems: 'center',
        }}
      >
        {appearance === 'checkbox' || appearance === undefined ? (
          <Checkbox
            disabled={disabled}
            status={!!value ? 'checked' : 'unchecked'}
            onPress={() => {
              !disabled && !readOnly && onChange && onChange(!value);
            }}
          />
        ) : (
          <Switch
            disabled={disabled}
            value={!!value}
            onValueChange={() => {
              !disabled && !readOnly && onChange && onChange(!value);
            }}
          />
        )}
        <Text
          style={{
            color: !!error ? theme.colors.error : theme.colors.text,
          }}
        >
          {`${transform ? transform(label as string) : (label as any)}${
            (props as any).required ? ' *' : ''
          }`}
        </Text>
      </View>
      {!!formHelperText && <HelperText {...helperProps} />}
    </View>
  );
}

export default connectField<BoolFieldProps>(Bool, {
  kind: 'leaf',
});
