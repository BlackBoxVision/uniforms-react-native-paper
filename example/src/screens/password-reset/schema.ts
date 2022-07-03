import JSONSchemaBridge from 'uniforms-bridge-json-schema';

import createValidator from '../../helpers/validator';

let passwordResetSchema = {
  type: 'object',
  properties: {
    email: {
      type: 'string',
      mode: 'outlined',
      keyboardType: 'email-address',
      dense: false,
      showInlineError: true,
    },
  },
  required: ['email'],
};

export default new JSONSchemaBridge(
  passwordResetSchema,
  createValidator(passwordResetSchema)
);
