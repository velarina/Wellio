import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

export default function OnboardingOne() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/WellioProducts.png")} // adjust path
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Upgrade Energi.{'\n'}Upgrade Mood.</Text>
        <Text style={styles.subtitle}>
          Dapatkan energi positif dengan{"\n"}Super Berry alami Wellio.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8D4AC1",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.08, // 8% of screen width
  },
  image: {
    width: width * 0.75, // 75% of screen width
    height: height * 0.45, // 45% of screen height
    marginBottom: height * 0.05, // 5% spacing
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: width * 0.06, // responsive text (around 24px on normal screen)
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: height * 0.015,
  },
  subtitle: {
    fontSize: width * 0.035, // responsive text (around 14px on normal screen)
    color: "#EDEDED",
    textAlign: "center",
    lineHeight: width * 0.05,
  },
});
