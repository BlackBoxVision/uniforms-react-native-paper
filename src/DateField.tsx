import React from 'react';
import { FieldProps, connectField } from 'uniforms';

export type DateFieldProps = FieldProps<any, any>;

function Date(props: DateFieldProps) {
  return null;
}

export default connectField<DateFieldProps>(Date, {
  kind: 'leaf',
});
