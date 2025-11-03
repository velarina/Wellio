import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

interface MissionPopupProps {
  visible: boolean;
  missionText: string;
  onClose: () => void;
}

const MissionPopup: React.FC<MissionPopupProps> = ({ visible, missionText, onClose }) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.popupContainer}>
          <Text style={styles.title}>Misi Hari Ini</Text>
          <Text style={styles.text}>{missionText}</Text>

          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Tutup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MissionPopup;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  popupContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: "80%",
    alignItems: "center",
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#F37A24",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#F37A24",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
