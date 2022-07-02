import invariant from 'invariant';
import { createAutoField } from 'uniforms';

import NumField from './NumField';
import BoolField from './BoolField';
import DateField from './DateField';
import TextField from './TextField';
// import ListField from './ListField';
import RadioField from './RadioField';
// import SelectField from './SelectField';

const AutoField = createAutoField((props) => {
  if (props.allowedValues) {
    return RadioField;
    // return props.checkboxes && props.fieldType !== Array
    //   ? RadioField
    //   : SelectField;
  }

  switch (props.fieldType) {
    // case Array:
    //   return ListField;
    case Boolean:
      return BoolField;
    case Date:
      return DateField;
    case Number:
      return NumField;
    // case Object:
    //   return NestField;
    case String:
      return TextField;
  }

  return invariant(false, 'Unsupported field type: %s', props.fieldType);
});

export { AutoFieldProps } from 'uniforms';

export default AutoField;
