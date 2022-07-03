import React from 'react';
import { Button, useTheme } from 'react-native-paper';

import AuthLayout from '../../components/auth-layout';

import signInSchema from './schema';

export default function SignInScreen({ navigation }: any) {
  let theme = useTheme();

  return (
    <AuthLayout
      label="Sign In"
      schema={signInSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('password-reset')}
        color={theme.colors.accent}
        style={{
          marginTop: 16,
          marginBottom: 16,
        }}
      >
        Password Reset
      </Button>
    </AuthLayout>
  );
}
