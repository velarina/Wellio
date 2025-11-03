import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

// 👇 import your root navigation types
import { RootStackParamList } from "../App"; // adjust path as needed

// 👇 define prop type for this screen
type SplashPageNavigationProp = StackNavigationProp<RootStackParamList, "SplashScreen">;

interface Props {
  navigation: SplashPageNavigationProp;
}

export default function SplashPage({ navigation }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  console.log('splashPage active')

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/WellioLogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
