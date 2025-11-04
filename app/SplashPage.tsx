
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function SplashPage() {
  console.log('[DEBUG] Splash Screen Shows');
  
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      navigation.navigate('onboarding'); // Replace 'Home' with your target screen
    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);
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
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
