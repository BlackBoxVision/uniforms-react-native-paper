import React from 'react';
import { Button, useTheme } from 'react-native-paper';

import Layout from '../../components/layout';

export default function LaunchScreen({ navigation }: any) {
  let theme = useTheme();

  return (
    <Layout>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('sign-in')}
        color={theme.colors.accent}
        style={{
          marginBottom: 16,
        }}
      >
        Sign In
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('sign-up')}
        color={theme.colors.accent}
        style={{
          marginBottom: 16,
        }}
      >
        Sign Up
      </Button>
    </Layout>
  );
}
