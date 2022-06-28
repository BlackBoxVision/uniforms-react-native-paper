import React from 'react';
import { Alert, SafeAreaView, StatusBar } from 'react-native';
import { AutoForm } from '@blackbox-vision/uniforms-react-native-paper';

import { bridge as schema } from './schema/signup';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <AutoForm
        schema={schema}
        onSubmit={(model: any) => {
          Alert.alert(JSON.stringify(model, null, 2));
        }}
      />
    </SafeAreaView>
  );
}
