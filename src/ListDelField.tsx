import React from 'react';
import { FieldProps, connectField } from 'uniforms';

export type ListDelFieldProps = FieldProps<any, any>;

function ListDel(props: ListDelFieldProps) {
  // const nameParts = joinName(null, name);
  // const nameIndex = +nameParts[nameParts.length - 1];
  // const parentName = joinName(nameParts.slice(0, -1));
  // const parent = useField<{ minCount?: number }, unknown[]>(
  //   parentName,
  //   {},
  //   { absoluteName: true }
  // )[0];

  // const limitNotReached =
  //   !disabled && !(parent.minCount! >= parent.value!.length);

  // return (
  //   <IconButton
  //     {...filterDOMProps(props)}
  //     disabled={!limitNotReached}
  //     onClick={() => {
  //       if (!readOnly) {
  //         const value = parent.value!.slice();
  //         value.splice(nameIndex, 1);
  //         parent.onChange(value);
  //       }
  //     }}
  //   >
  //     {icon}
  //   </IconButton>
  // );

  return null;
}

export default connectField<ListDelFieldProps>(ListDel, {
  initialValue: false,
  kind: 'leaf',
});
