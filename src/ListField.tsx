import React, {
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';
import { List as RNList } from 'react-native-paper';
import { FieldProps, connectField } from 'uniforms';

import ListAddField from './ListAddField';

// TODO: improve typings for component props
export type ListFieldProps = FieldProps<any, any>;

function List({
  value,
  label,
  addIcon,
  children,
  itemProps,
  initialCount,
  ...props
}: ListFieldProps) {
  return (
    <>
      <RNList.Section {...props}>
        {label ? <RNList.Subheader>{label}</RNList.Subheader> : undefined}
        {value?.map?.((_: any, itemIndex: number) =>
          React.Children.map(children, (child: any, childIndex: number) =>
            isValidElement(child)
              ? cloneElement(child, {
                  key: `${itemIndex}-${childIndex}`,
                  name: (child as any)?.props?.name?.replace(
                    '$',
                    '' + itemIndex
                  ),
                  ...itemProps,
                })
              : child
          )
        )}
      </RNList.Section>
      <ListAddField name="$" icon={addIcon} initialCount={initialCount} />
    </>
  );
}

export default connectField<ListFieldProps>(List);
