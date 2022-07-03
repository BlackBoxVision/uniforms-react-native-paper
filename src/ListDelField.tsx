import React from 'react';
import { List } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import { FieldProps, connectField, joinName, useField } from 'uniforms';

// TODO: improve typings for component props
export type ListDelFieldProps = FieldProps<any, any>;

function ListDel({ name, disabled, readOnly, ...props }: ListDelFieldProps) {
  let nameParts = joinName(null, name);
  let nameIndex = +nameParts[nameParts.length - 1];
  let parentName = joinName(nameParts.slice(0, -1));
  let [parent] = useField<{ minCount?: number }, unknown[]>(
    parentName,
    {},
    {
      absoluteName: true,
    }
  );

  let limitNotReached =
    !disabled && !(parent.minCount! >= parent.value!.length);

  return (
    <TouchableOpacity
      disabled={!limitNotReached}
      onPress={() => {
        if (!readOnly) {
          let value = parent.value!.slice();

          value.splice(nameIndex, 1);
          parent.onChange(value);
        }
      }}
    >
      <List.Icon {...props} icon="" />
    </TouchableOpacity>
  );
}

export default connectField<ListDelFieldProps>(ListDel, {
  initialValue: false,
  kind: 'leaf',
});
