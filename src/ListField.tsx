import React, {
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';
import { FieldProps, connectField } from 'uniforms';

import ListAddField from './ListAddField';
import ListItemField from './ListItemField';

export type ListFieldProps = FieldProps<any, any>;

function List(props: ListFieldProps) {
  // return (
  //   <>
  //     <ListMaterial
  //       dense
  //       subheader={
  //         label ? (
  //           <ListSubheader disableSticky>{label}</ListSubheader>
  //         ) : undefined
  //       }
  //       {...filterDOMProps(props)}
  //     >
  //       {value?.map((item, itemIndex) =>
  //         Children.map(children, (child, childIndex) =>
  //           isValidElement(child)
  //             ? cloneElement(child, {
  //                 key: `${itemIndex}-${childIndex}`,
  //                 name: child.props.name?.replace('$', '' + itemIndex),
  //                 ...itemProps,
  //               })
  //             : child
  //         )
  //       )}
  //     </ListMaterial>
  //     <ListAddField icon={addIcon} initialCount={initialCount} name="$" />
  //   </>
  // );

  return null;
}

export default connectField<ListFieldProps>(List);
