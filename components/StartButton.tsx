import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface StartButtonProps {
  title?: string;
  onPress: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ title = "Mulai Sekarang", onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default StartButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3B2F5C",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
});
