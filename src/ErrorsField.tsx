import React from 'react';
import { View } from 'react-native';
import { HelperText } from 'react-native-paper';
import { Override, useForm } from 'uniforms';

export type ErrorsFieldProps = Override<any, any>;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function ErrorsField(props: ErrorsFieldProps) {
  const { error, schema } = useForm();

  return !error && !props.children ? null : (
    <View style={{ flex: 1 }}>
      {!!props.children && <HelperText type="error" {...props} />}
      {schema.getErrorMessages(error).map((message: string, index: number) => (
        <HelperText key={index} type="error" {...props}>
          {capitalizeFirstLetter(message)}
        </HelperText>
      ))}
    </View>
  );
}

export default ErrorsField;
