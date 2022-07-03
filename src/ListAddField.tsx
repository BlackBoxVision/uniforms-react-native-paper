import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { Button } from 'react-native-paper';
import { FieldProps, connectField, joinName, useField } from 'uniforms';

// TODO: improve typings for component props
export type ListAddFieldProps = FieldProps<any, any>;

function ListAdd({
  name,
  value,
  icon = '+',
  readOnly,
  disabled,
  initialCount,
  ...props
}: ListAddFieldProps) {
  let nameParts = joinName(null, name);
  let parentName = joinName(nameParts.slice(0, -1));
  let [parent] = useField<
    { initialCount?: number; maxCount?: number },
    unknown[]
  >(
    parentName,
    {
      initialCount,
    },
    {
      absoluteName: true,
    }
  );

  let limitNotReached =
    !disabled && !(parent.maxCount! <= parent.value!.length);

  return (
    <Button
      mode="outlined"
      {...props}
      disabled={!limitNotReached}
      onPress={() => {
        if (!readOnly) {
          parent.onChange(parent.value!.concat([cloneDeep(value)]));
        }
      }}
    >
      {icon}
    </Button>
  );
}

export default connectField<ListAddFieldProps>(ListAdd, {
  initialValue: false,
  kind: 'leaf',
});
