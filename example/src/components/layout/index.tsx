import React from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { useTheme } from 'react-native-paper';

import styles from './styles';

let screen = Dimensions.get('screen');

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  let theme = useTheme();

  return (
    <SafeAreaView>
      <StatusBar />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View
            style={[
              styles.logo,
              {
                backgroundColor: theme.colors.accent,
                width: screen.width - 32,
              },
            ]}
          />
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
