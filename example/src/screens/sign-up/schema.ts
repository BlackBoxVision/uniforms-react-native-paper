import JSONSchemaBridge from 'uniforms-bridge-json-schema';

import createValidator from '../../helpers/validator';

let signUpSchema = {
  type: 'object',
  properties: {
    fullname: {
      type: 'string',
      mode: 'outlined',
      showInlineError: true,
      dense: false,
    },
    birthDate: {
      type: 'string',
      fieldType: Date,
      mode: 'outlined',
      showInlineError: true,
      dense: false,
    },
    email: {
      type: 'string',
      mode: 'outlined',
      keyboardType: 'email-address',
      showInlineError: true,
      dense: false,
    },
    confirmEmail: {
      type: 'string',
      mode: 'outlined',
      keyboardType: 'email-address',
      showInlineError: true,
      dense: false,
      const: {
        $data: '1/email',
      },
    },
    password: {
      type: 'string',
      mode: 'outlined',
      showInlineError: true,
      secureTextEntry: true,
      dense: false,
    },
    confirmPassword: {
      type: 'string',
      mode: 'outlined',
      showInlineError: true,
      secureTextEntry: true,
      dense: false,
      const: {
        $data: '1/password',
      },
    },
    acceptTermsOfUse: { type: 'boolean', const: true },
  },
  required: [
    'fullname',
    'email',
    'confirmEmail',
    'password',
    'confirmPassword',
    'acceptTermsOfUse',
  ],
};

export default new JSONSchemaBridge(
  signUpSchema,
  createValidator(signUpSchema)
);
