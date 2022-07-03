import React from 'react';

import AuthLayout from '../../components/auth-layout';

import signUpSchema from './schema';

export default function SignUpScreen() {
  return (
    <AuthLayout
      label="Sign Up"
      schema={signUpSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    />
  );
}
