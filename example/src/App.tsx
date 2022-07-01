import React, { useState } from 'react';
import { AutoForm } from '@blackbox-vision/uniforms-react-native-paper';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { bridge as schema } from './schema/signup';

export default function App() {
  let [json, setJson] = useState(null);

  return (
    <SafeAreaView>
      <StatusBar />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={{
            paddingVertical: 16,
            paddingHorizontal: 16,
          }}
        >
          <AutoForm
            schema={schema}
            onSubmit={(model: any) => {
              setJson(model);
            }}
          />
          {!!json && (
            <View
              style={{ marginTop: 8, flex: 1, backgroundColor: 'lightgrey' }}
            >
              <Text>{JSON.stringify(json, null, 2)}</Text>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
