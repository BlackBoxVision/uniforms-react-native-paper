import React, { useEffect } from 'react';
import { Override, useField } from 'uniforms';

export type HiddenFieldProps = Override<any, any>;

export default function HiddenField({ value, ...props }: HiddenFieldProps) {
  let [fieldProps] = useField(props.name, props, {
    initialValue: false,
  });

  useEffect(() => {
    if (value !== undefined && value !== fieldProps.value) {
      fieldProps.onChange(value);
    }
  });

  return null;
}
