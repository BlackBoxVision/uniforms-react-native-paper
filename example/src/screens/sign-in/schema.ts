import JSONSchemaBridge from 'uniforms-bridge-json-schema';

import createValidator from '../../helpers/validator';

let signInSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      mode: 'outlined',
      showInlineError: true,
      keyboardType: 'email-address',
      dense: false,
    },
    password: {
      type: 'string',
      mode: 'outlined',
      showInlineError: true,
      secureTextEntry: true,
      dense: false,
    },
  },
  required: ['email', 'password'],
};

export default new JSONSchemaBridge(
  signInSchema,
  createValidator(signInSchema)
);
