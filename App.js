import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tesla from './Screens/Tesla';
import Company from './Screens/Company';
import Price from "./Screens/Price";
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';
const Stack = createStackNavigator();
function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}
          options={{ headerShown: false }} />

        <Stack.Screen name="Signup" component={SignupScreen}
          options={{ headerShown: false }} />

        <Stack.Screen name="Tesla" component={Tesla}
          options={{ headerShown: false }} />

        <Stack.Screen name="Company" component={Company}
          options={{ headerShown: false }} />

        <Stack.Screen name="Price" component={Price}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;     