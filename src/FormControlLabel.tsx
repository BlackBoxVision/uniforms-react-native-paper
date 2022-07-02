import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

export type FormControlLabelProps = {
  control: any;
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  transform?: any;
  [key: string]: any;
};

function FormControlLabel({
  error = false,
  required = false,
  control,
  transform,
  label,
}: FormControlLabelProps) {
  let theme = useTheme();

  let labelStyle = {
    color: !!error ? theme.colors.error : theme.colors.text,
  };

  return (
    <View style={styles.container}>
      {control}
      <Text style={labelStyle}>
        {`${!!transform ? transform(label) : label}${required ? ' *' : ''}`}
      </Text>
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default FormControlLabel;
