import React from 'react';
import { connectField, FieldProps } from 'uniforms';

import AutoField from './AutoField';
import FormControl from './FormControl';

// TODO: improve typings for component props
export type NestFieldProps = FieldProps<
  any,
  any,
  {
    label?: string;
  }
>;

function Nest({
  label,
  required,
  children,
  fields,
  itemProps,
}: NestFieldProps) {
  return (
    <FormControl label={label} required={required}>
      {children ||
        fields?.map?.((field) => (
          <AutoField key={field} name={field} {...itemProps} />
        ))}
    </FormControl>
  );
}

export default connectField<NestFieldProps>(Nest);
