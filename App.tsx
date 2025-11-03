import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "./app/onboarding";
import HealthJourney from "./app/healthJourney";
import SplashPage from "./app/splashScreen";

export type RootStackParamList = {
  SplashScreen: undefined;
  Onboarding: undefined;
  HealthJourney: undefined;
};

console.log("SplashScreen rendered");

const Stack = createStackNavigator<RootStackParamList>();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HealthJourney"
          component={HealthJourney}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
