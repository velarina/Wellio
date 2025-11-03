import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Onboarding2: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Overthinking Terus{"\n"}Sampai Burnout?</Text>
      <Text style={styles.subtitle}>
        Wellio tau Kamu gak sendirian. Otak kamu gak{"\n"}
        istirahat mikirin deadline, anxiety sosial,{"\n"}
        sampai masa depan.
      </Text>

      <Image
        source={require("../assets/images/onboarding2.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4EEF9",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.08,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "700",
    color: "#3E206D",
    textAlign: "center",
    marginBottom: height * 0.015,
  },
  subtitle: {
    fontSize: width * 0.035,
    color: "#6B4E8F",
    textAlign: "center",
    lineHeight: width * 0.05,
    marginBottom: height * 0.04,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
  },
});
