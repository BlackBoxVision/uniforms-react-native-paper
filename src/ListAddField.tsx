import cloneDeep from 'lodash/cloneDeep';
import React, { ReactNode } from 'react';
import { FieldProps, connectField, joinName, useField } from 'uniforms';

export type ListAddFieldProps = FieldProps<any, any>;

function ListAdd(props: ListAddFieldProps) {
  return null;
}

export default connectField<ListAddFieldProps>(ListAdd, {
  initialValue: false,
  kind: 'leaf',
});
