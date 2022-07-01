import React from 'react';
import { View } from 'react-native';
import { FieldProps, connectField } from 'uniforms';
import { RadioButton, Text, useTheme } from 'react-native-paper';

export type RadioFieldProps = FieldProps<any, any>;

function Radio({
  error,
  label,
  value,
  readOnly,
  disabled,
  transform,
  allowedValues,
  onChange,
  ...props
}: RadioFieldProps) {
  let theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        marginBottom: 8,
      }}
    >
      <Text
        style={{
          marginBottom: 8,
          color: !!error ? theme.colors.error : theme.colors.text,
        }}
      >
        {`${label as any}${(props as any).required ? ' *' : ''}`}
      </Text>
      <RadioButton.Group
        onValueChange={(value) => disabled || readOnly || onChange(value)}
        value={value ?? ''}
      >
        {allowedValues?.map((item: any, idx: number) => (
          <View
            key={`${item}-${idx}`}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <RadioButton value={item} />
            <Text>{transform ? transform(item) : item}</Text>
          </View>
        ))}
      </RadioButton.Group>
    </View>
  );
}

export default connectField<RadioFieldProps>(Radio, {
  kind: 'leaf',
});
