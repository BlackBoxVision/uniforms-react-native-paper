import React from 'react';
import { Provider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LaunchScreen from './screens/launch';
import SignUpScreen from './screens/sign-up';
import SignInScreen from './screens/sign-in';
import PasswordResetScreen from './screens/password-reset';

let Stack = createNativeStackNavigator();

let appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2c387e',
    accent: '#14a37f',
  },
};

export default function App() {
  return (
    <Provider theme={appTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="launch"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="launch" component={LaunchScreen} />
          <Stack.Screen name="sign-in" component={SignInScreen} />
          <Stack.Screen name="sign-up" component={SignUpScreen} />
          <Stack.Screen name="password-reset" component={PasswordResetScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
