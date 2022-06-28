import React from 'react';
import { connectField } from 'uniforms';

import AutoField from './AutoField';
import ListDelField from './ListDelField';

export type ListItemFieldProps = any;

function ListItem(props: ListItemFieldProps) {
  // return (
  //   <ListItemMaterial
  //     dense={dense}
  //     disableGutters={disableGutters}
  //     divider={divider}
  //   >
  //     {children}
  //     <ListDelField name="" icon={removeIcon} />
  //   </ListItemMaterial>
  // );

  return null;
}

export default connectField<ListItemFieldProps>(ListItem, {
  initialValue: false,
});
