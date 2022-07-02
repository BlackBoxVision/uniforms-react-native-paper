import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';

const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
  $data: true,
});

ajv.addKeyword('uniforms');
ajv.addKeyword('allowedValues');
ajv.addKeyword('checkboxes');
ajv.addKeyword('fieldType');
ajv.addKeyword('multiple');

const schema = {
  title: 'Guest',
  type: 'object',
  properties: {
    date: {
      type: 'string',
      fieldType: Date,
    },

    // fullname: {
    //   type: 'string',
    // },
    // email: {
    //   type: 'string',
    // },
    // confirmEmail: {
    //   type: 'string',
    //   const: {
    //     $data: '1/email',
    //   },
    // },
    // password: {
    //   type: 'string',
    //   uniforms: {
    //     type: 'password',
    //   },
    // },
    // confirmPassword: {
    //   type: 'string',
    //   const: {
    //     $data: '1/password',
    //   },
    //   uniforms: {
    //     type: 'password',
    //   },
    // },
    number: {
      type: 'string',
      multiple: true,
      checkboxes: true,
      fieldType: Array,
      allowedValues: ['1', '2', '3', '4', '7', '8', '9', '10'],
    },
    // acceptTermsOfUse: {
    //   type: 'boolean',
    //   const: true,
    // },
    // age: {
    //   type: 'number',
    // },
  },
  required: [
    // 'fullname',
    // 'email',
    // 'confirmEmail',
    // 'password',
    // 'confirmPassword',
    // 'acceptTermsOfUse',
    'number',
  ],
};

function createValidator(schema: object) {
  const validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);
    return validator.errors?.length ? { details: validator.errors } : null;
  };
}

const schemaValidator = createValidator(schema);

export const bridge = new JSONSchemaBridge(schema, schemaValidator);
