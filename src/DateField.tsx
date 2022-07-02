import React, { useState } from 'react';
import { FieldProps, connectField } from 'uniforms';
import { TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import TextField from './TextField';

// TODO: improve typings for component props
export type DateFieldProps = FieldProps<
  any,
  any,
  {
    label?: string;
  }
>;

function DateField(props: DateFieldProps) {
  let [isVisible, setIsVisible] = useState<boolean>(false);

  let { disabled, readOnly, value, onChange } = props;

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setIsVisible(true);
        }}
      >
        <View pointerEvents="none">
          <TextField
            {...(props as any)}
            onChange={() => {}}
            value={!!value ? new Date(value).toLocaleString() : ''}
          />
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        date={!!value ? new Date(value) : new Date()}
        mode="datetime"
        isVisible={isVisible && !disabled && !readOnly}
        onCancel={() => {
          setIsVisible(false);
        }}
        onConfirm={(date: Date) => {
          disabled || readOnly || onChange?.(date?.toISOString?.());

          setIsVisible(false);
        }}
      />
    </>
  );
}

export default connectField<DateFieldProps>(DateField, {
  kind: 'leaf',
});
