import Ajv from 'ajv';

let ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
  $data: true,
});

[
  'showInlineError',
  'dense',
  'keyboardType',
  'secureTextEntry',
  'mode',
  'fieldType',
].forEach((validKeyword: string) => {
  ajv.addKeyword(validKeyword);
});

export default function createValidator(schema: object) {
  let validator = ajv.compile(schema);

  return (model: object) => {
    validator(model);

    return validator.errors?.length
      ? {
          details: validator.errors,
        }
      : null;
  };
}
