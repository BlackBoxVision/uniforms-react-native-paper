import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HelperText, Text, useTheme } from 'react-native-paper';

import { capitalizeFirstLetter } from './helpers';

export type FormControlProps = React.PropsWithChildren<{
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
  [key: string]: any;
}>;

function FormControl({
  error = false,
  required = false,
  label,
  children,
  helperText,
  ...props
}: FormControlProps) {
  let theme = useTheme();

  let labelStyle = {
    color: !!error ? theme.colors.error : theme.colors.text,
  };

  return (
    <View style={styles.container}>
      {!!label && (
        <Text style={[styles.label, labelStyle]}>
          {`${label}${required ? ' *' : ''}`}
        </Text>
      )}
      {children}
      {!!helperText && (
        <HelperText type={error ? 'error' : 'info'} {...(props as any)}>
          {capitalizeFirstLetter(helperText)}
        </HelperText>
      )}
    </View>
  );
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 8,
  },
  label: {
    marginBottom: 8,
  },
});

export default FormControl;
