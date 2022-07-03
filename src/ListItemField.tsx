import React from 'react';
import { connectField } from 'uniforms';
import { List } from 'react-native-paper';

import AutoField from './AutoField';
import ListDelField from './ListDelField';

export type ListItemFieldProps = any;

function ListItem({
  children = <AutoField label={null} name="" />,
  ...props
}: ListItemFieldProps) {
  return (
    <List.Item
      {...props}
      description={children}
      left={(props) => <ListDelField {...props} name="" />}
    />
  );
}

export default connectField<ListItemFieldProps>(ListItem, {
  initialValue: false,
});
