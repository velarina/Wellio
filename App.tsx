import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HealthJourney from './app/healthJourney';
import Onboarding from './app/onboarding';
import SplashPage from './app/SplashPage';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Screen name="splash" component={SplashPage} options={{headerShown:false}}/>
      <Stack.Screen name="onboarding" component={Onboarding} options={{headerShown:false}}/>
      <Stack.Screen name="healthjourney" component={HealthJourney} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
