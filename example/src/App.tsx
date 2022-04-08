import React from 'react';
import { AutoForm } from '@blackbox-vision/uniforms-react-native-paper';

import { bridge as schema } from './schema/signup';

export default function App() {
  return (
    <AutoForm
      schema={schema}
      onSubmit={(model: any) => alert(JSON.stringify(model, null, 2))}
    />
  );
}