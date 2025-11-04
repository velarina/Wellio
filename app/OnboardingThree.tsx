import StartButton from "@/components/StartButton";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";



const { width, height } = Dimensions.get("window");

export default function OnboardingThree() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/onboarding3.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Daily Level Up  Health Journey</Text>
      <Text style={styles.subtitle}>
        Support Kamu jadi lebih baik dengan Gamified health Journey
      </Text>

      <StartButton
        onPress={() => navigation.navigate("HealthJourney" as never)}
      >
      </StartButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8D4AC1",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.08,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    marginBottom: height * 0.04,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: height * 0.015,
  },
  subtitle: {
    fontSize: width * 0.035,
    color: "#EDEDED",
    textAlign: "center",
    lineHeight: width * 0.05,
    marginBottom: height * 0.04,
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
