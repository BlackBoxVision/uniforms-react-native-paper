import React from 'react';
import { useTheme } from 'react-native-paper';
import {
  AutoForm,
  AutoFields,
  SubmitField,
} from '@blackbox-vision/uniforms-react-native-paper';
import JSONSchemaBridge from 'uniforms-bridge-json-schema';

import Layout from '../layout';
import { View } from 'react-native';

export default function AuthLayout({
  label,
  schema,
  children,
  onSubmit,
}: React.PropsWithChildren<{
  label: string;
  schema: JSONSchemaBridge;
  onSubmit: (values: any) => void;
}>) {
  let theme = useTheme();

  return (
    <Layout>
      <AutoForm schema={schema} onSubmit={onSubmit}>
        <AutoFields />
        <SubmitField label={label} color={theme.colors.accent} />
      </AutoForm>
      {children}
    </Layout>
  );
}
