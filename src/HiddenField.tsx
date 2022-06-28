import React, { useEffect } from 'react';
import { Override, useField } from 'uniforms';

export type HiddenFieldProps = Override<any, any>;

export default function HiddenField({ value, ...rawProps }: HiddenFieldProps) {
  const props = useField(rawProps.name, rawProps, { initialValue: false })[0];

  useEffect(() => {
    if (value !== undefined && value !== props.value) {
      props.onChange(value);
    }
  });

  return props.noDOM ? null : null;
}
