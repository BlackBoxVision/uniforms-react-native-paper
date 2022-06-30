import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { FieldProps, useForm } from 'uniforms';

export type SubmitFieldProps = FieldProps<any, any>;

function SubmitField({
  disabled,
  children,
  label = 'Submit',
}: SubmitFieldProps) {
  let { error, state, onSubmit } = useForm();

  return (
    <View style={{ flex: 1, marginTop: 8 }}>
      <Button
        mode="contained"
        disabled={
          disabled === undefined ? !!(!!error || !!state.disabled) : disabled
        }
        onPress={onSubmit}
      >
        {children || label}
      </Button>
    </View>
  );
}

export default SubmitField;
