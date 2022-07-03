import React from 'react';

import AuthLayout from '../../components/auth-layout';

import passwordResetSchema from './schema';

export default function PasswordResetScreen() {
  return (
    <AuthLayout
      label="Reset Password"
      schema={passwordResetSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    />
  );
}
